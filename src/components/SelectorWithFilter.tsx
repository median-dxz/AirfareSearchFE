import React, { useEffect } from "react";
import { Select, initTE } from "tw-elements";

export default function SelectorWithFilter() {
  useEffect(() => {
    initTE({ Select });
  }, []);

  return (
    <select data-te-select-init data-te-select-filter="true">
      <option value="1" data-te-select-secondary-text="Secondary text">
        One
      </option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
      <option value="6">Six</option>
      <option value="7">Seven</option>
      <option value="8">Eight</option>
      <option value="9">Nine</option>
      <option value="10">Ten</option>
    </select>
  );
}
