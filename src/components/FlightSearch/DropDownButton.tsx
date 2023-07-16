import Button from "@/components/Button";
import DropDown, { useDropDown } from "@/components/Dropdown";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

interface DropDownButtonProps {
  children: React.ReactNode;
  buttonContent: React.ReactNode;
}

export default function DropDownButton({ children, buttonContent }: DropDownButtonProps) {
  const { open, props } = useDropDown();
  return (
    <DropDown
      button={
        <Button
          className="items-center space-x-2 whitespace-nowrap"
          color="tetriary"
          onClick={open}
        >
          {buttonContent}
          {Boolean(props.anchorEl) ? <ChevronUpIcon width={18} /> : <ChevronDownIcon width={18} />}
        </Button>
      }
      {...props}
    >
      {children}
    </DropDown>
  );
}
