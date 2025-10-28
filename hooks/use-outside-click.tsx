import React, { useEffect } from "react";

type OutsideClickEvent = MouseEvent | TouchEvent;

export const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: OutsideClickEvent) => void
) => {
  useEffect(() => {
    const listener = (event: OutsideClickEvent) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
