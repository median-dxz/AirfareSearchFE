import DropDownButton from "@/components/Search/DropDownButton";
import NumberInput from "@/components/NumberInput";
import QueueListIcon from "@heroicons/react/24/outline/QueueListIcon";
import { useSearchPayload } from "@/store/SearchPayload";

export function ResultsLimit() {
  const [payload, dispatch] = useSearchPayload();
  const { maxResults } = payload;
  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = e.target.valueAsNumber;
    if (isNaN(e.target.valueAsNumber) || e.target.valueAsNumber < 0) {
      value = 0;
    }
    dispatch({ type: "setMaxResults", data: value });
  };

  return (
    <DropDownButton
      buttonContent={
        <>
          <QueueListIcon width={18} />
          <span>最大结果数: {maxResults}</span>
        </>
      }
    >
      <NumberInput
        id="ResultsNumber"
        value={maxResults}
        onChange={handleChangeValue}
        placeholder="最大结果数..."
        className="mx-2 w-36"
      />
    </DropDownButton>
  );
}
