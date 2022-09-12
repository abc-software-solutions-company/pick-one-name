import {useCallback, useRef} from 'react';

export default function useRefWithCallback(
  onMount: (element: HTMLElement) => void,
  onUnmount: (element: HTMLElement) => void
) {
  const nodeRef = useRef<HTMLElement>();

  const setRef = useCallback(
    (node: HTMLElement) => {
      if (nodeRef.current) onUnmount(nodeRef.current);
      nodeRef.current = node;
      if (nodeRef.current) onMount(nodeRef.current);
    },
    [onMount, onUnmount]
  );

  return setRef;
}
