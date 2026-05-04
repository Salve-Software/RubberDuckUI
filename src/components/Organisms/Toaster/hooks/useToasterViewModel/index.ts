import type { IToasterApi } from '../../controllers/ToasterApi/types';
import type { IToasterRefProps } from '../../types';
import { useState, useRef, useCallback, useEffect } from 'react';
import { ToasterApi } from '../../controllers';
import { DEFAULT_TOAST_DURATION_MS } from '../../constants';

export const useToasterViewModel = () => {
  const [toasterProps, setToasterPropsState] = useState<IToasterRefProps | undefined>();
  const [isVisible, setIsVisible] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imperativeRef = useRef<IToasterApi | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = useCallback((props: IToasterRefProps) => {
    clearTimer();
    setToasterPropsState(props);
    setIsVisible(true);
    timeoutRef.current = setTimeout(() => setIsVisible(false), props.duration ?? DEFAULT_TOAST_DURATION_MS);
  }, []);

  const hide = useCallback(() => {
    clearTimer();
    setIsVisible(false);
  }, []);

  useEffect(() => {
    imperativeRef.current = { show, hide };
    ToasterApi.setRef(imperativeRef);
  }, [show, hide]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return {
    toasterProps,
    isVisible,
  };
};
