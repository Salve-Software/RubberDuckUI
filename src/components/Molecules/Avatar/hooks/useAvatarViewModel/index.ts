import type { IAvatarProps } from '../../types';
import { useState } from 'react';

export const useAvatarViewModel = (props: IAvatarProps) => {
  const { source } = props;
  
   const isImageStatic = typeof source === 'number';

  const [isLoading, setLoading] = useState<boolean>(!!source);
  const [hasError, setHasError] = useState<boolean>(false);
  
  function onLoad() {
    setLoading(false);
  }
  
  function onError() {
    setLoading(false);
    setHasError(true);
  }

  return {
    isImageStatic,
    isLoading,
    hasError,
    onLoad,
    onError,
  };
};
