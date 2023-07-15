import ClickAwayListener from "@mui/base/ClickAwayListener/ClickAwayListener";
import Popper from "@mui/base/Popper";
import * as React from "react";

interface DropDownProps {
  children: React.ReactNode;
  button: React.ReactNode;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const useDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return { open: handleClick, props: { anchorEl, setAnchorEl } };
};

function DropDown({ button, anchorEl, setAnchorEl, children }: DropDownProps) {
  const open = Boolean(anchorEl);

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}>
      <div role="none">
        {button}
        <Popper
          className="flex flex-col py-3 m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-[0_4px_16px_rgba(69,88,115,.2)] animate-[fade-in_0.3s_ease]"
          open={open}
          anchorEl={anchorEl}
        >
          {children}
        </Popper>
      </div>
    </ClickAwayListener>
  );
}

export default DropDown;
