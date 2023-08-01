"use client";

import React from "react";
import Typed from "typed.js";

interface Props {
  text: string[];
  className: string;
}

export function TypedText({ text, className }: Props) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, [text, className]);

  return (
    <span className={className}>
      <span ref={el}> </span>
    </span>
  );
}
