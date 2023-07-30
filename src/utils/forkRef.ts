import type { MutableRefObject, RefCallback } from "react";
type ForkedRef<T> = RefCallback<T> | React.MutableRefObject<T> | null;

export function forkRef<T>(...refs: ForkedRef<T>[]): RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        (ref as MutableRefObject<T>).current = node;
      }
    });
  };
}
