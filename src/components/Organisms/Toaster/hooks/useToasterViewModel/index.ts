import type { Ref } from 'react';
import type { IToasterApi } from '../../controllers/ToasterApi/types';
import type { IToasterRefProps } from '../../types';
import { useState, useRef, useEffect, useImperativeHandle } from 'react';
import { ToasterApi } from '../../controllers';
import { DEFAULT_TOAST_DURATION_MS } from '../../constants';

export const useToasterViewModel = (ref: Ref<IToasterApi> | null) => {
  const [toasterProps, setToasterPropsState] = useState<IToasterRefProps | undefined>();
  const [isVisible, setIsVisible] = useState(false);

  const isGlobal = useRef(ref === null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imperativeRef = useRef<IToasterApi | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = (props: IToasterRefProps) => {
    clearTimer();
    setToasterPropsState(props);
    setIsVisible(true);
    if (!props.loading) {
      timeoutRef.current = setTimeout(() => setIsVisible(false), props.duration ?? DEFAULT_TOAST_DURATION_MS);
    }
  };

  const hide = () => {
    clearTimer();
    setIsVisible(false);
  };

  imperativeRef.current = { show, hide };

  useImperativeHandle(ref, () => ({
    show: (props) => imperativeRef.current?.show(props),
    hide: () => imperativeRef.current?.hide(),
  }), []);

  useEffect(() => {
    if (isGlobal.current) {
      ToasterApi.setRef(imperativeRef);
      return () => {
        clearTimer();
        ToasterApi.setRef({ current: null });
      };
    }
    return () => clearTimer();
  }, []);

  return {
    toasterProps,
    isVisible,
    hide,
  };
};
