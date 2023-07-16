import QueueListIcon from "@heroicons/react/24/outline/QueueListIcon";
import DropDownButton from "./DropDownButton";
import NumberInput from "@/components/NumberInput";

export default function ResultsDropDown() {
  return (
    <DropDownButton
      buttonContent={
        <>
          <QueueListIcon width={18} />
          <span>最大结果数: {20}</span>
        </>
      }
    >
      <NumberInput id="ResultsNumber" placeholder="最大结果数..." className="mx-2 w-36" />
    </DropDownButton>
  );
}
