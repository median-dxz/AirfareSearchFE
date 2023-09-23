import Popper from "@mui/base/Popper";
import useAutocomplete, { UseAutocompleteProps } from "@mui/base/useAutocomplete";
import clsx from "clsx";
import * as React from "react";
import { ReactElement, Ref, forwardRef } from "react";

import muiStyles from "@/app/mui.module.css";

import { forkRef } from "@/utils/forkRef";
import { ScrollbarStyle } from "./ScrollbarStyle";

type RenderOption<T> = React.FC<React.HTMLAttributes<HTMLLIElement> & { option?: T }>;

type AutoCompleteProps<TOption> = UseAutocompleteProps<TOption, false, false, false> & {
  renderOption?: RenderOption<TOption>;
  placeholder?: string;
};

export default forwardRef(function AutoComplete<TOption>(
  { renderOption, placeholder, ...muiAutoCompleteProps }: AutoCompleteProps<TOption>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { getOptionLabel } = muiAutoCompleteProps;

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    popupOpen,
    anchorEl,
    setAnchorEl,
  } = useAutocomplete({ ...muiAutoCompleteProps });

  const forkedRef = forkRef(ref, setAnchorEl);

  const getOptionElement = (option?: TOption, optionProps?: Omit<React.HTMLAttributes<HTMLLIElement>, "key">) => {
    if (renderOption) {
      return renderOption({ option, ...optionProps });
    } else {
      let optionText;

      if (!option) {
        optionText = "没有结果";
      } else {
        optionText = getOptionLabel ? getOptionLabel(option) : JSON.stringify(option);
      }

      return (
        <li className="list-none p-2 text-secondary-900 my-2" {...optionProps}>
          {optionText}
        </li>
      );
    }
  };

  return (
    <>
      <StyledAutocompleteRoot {...getRootProps()} ref={forkedRef}>
        <StyledInput placeholder={placeholder} {...getInputProps()} />
      </StyledAutocompleteRoot>
      {anchorEl && (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slots={{
            root: "div",
          }}
          slotProps={{
            root: {
              className: "relative z-10 min-w-[206px] animate-[fade-in_0.3s_ease]",
            },
          }}
        >
          <StyledListbox {...getListboxProps()}>
            {groupedOptions.length > 0
              ? (groupedOptions as Array<TOption>).map((option, index) => {
                  const { key, ...optionProps } = getOptionProps({
                    option,
                    index,
                  }) as React.HTMLAttributes<HTMLLIElement> & { key: React.Key };

                  return <React.Fragment key={key}>{getOptionElement(option, optionProps)}</React.Fragment>;
                })
              : getOptionElement()}
          </StyledListbox>
        </Popper>
      )}
    </>
  );
}) as <TOption>(
  props: AutoCompleteProps<TOption> & {
    ref?: Ref<HTMLDivElement>;
  }
) => ReactElement;

const StyledAutocompleteRoot = React.forwardRef(function StyledAutocompleteRoot(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const baseStyles = clsx("group", "relative", "flex", props.className);

  return (
    <div className={baseStyles} ref={ref} {...props}>
      {props.children}
    </div>
  );
});

const StyledInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function StyledInput({ className, ...props }, ref) {
    const baseStyles = clsx(
      "peer",
      "block",
      "border-1",
      "border-neutral-300",
      "min-h-[auto]",
      "w-full",
      "rounded",
      "bg-transparent",
      "outline-none",
      "cursor-text",
      "text-ellipsis",
      "text-secondary-900",
      "py-[0.32rem]",
      "px-3",
      "leading-[1.6]",
      "transition-all",
      "duration-300",
      "hover:border-primary",
      "focus-within:border-primary",
      className
    );

    return <input type="search" className={baseStyles} ref={ref} {...props} />;
  }
);

const StyledListbox = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(function StyledListbox(
  { className, children, ...props },
  ref
) {
  const baseStyles = clsx(
    ScrollbarStyle,
    ["max-h-[284px]", "border-none", "bg-white", "shadow-[0_4px_16px_rgba(69,88,115,.2)]", "rounded", "p-1", "my-1"],
    muiStyles["list-box"],
    className
  );
  return (
    <ul className={baseStyles} ref={ref} {...props}>
      {children}
    </ul>
  );
});
