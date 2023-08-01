import DropDownButton from "@/components/Search/DropDownButton";
import RangeInput from "@/components/RangeInput";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";

import { useSearchPayload } from "@/store/SearchPayload";

export function PeopleLimit() {
  const [payload, dispatch] = useSearchPayload();
  const { people } = payload;
  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "setPeople", data: e.target.valueAsNumber });
  };

  return (
    <DropDownButton
      buttonContent={
        <>
          <UsersIcon className="flex-none w-5" />
          <p>人数: {people}</p>
        </>
      }
    >
      <label htmlFor="PeopleRange" className="mx-auto text-sm inline text-gray-500">
        人数(1-8):
      </label>
      <RangeInput
        id="PeopleRange"
        className="mx-2 w-36"
        value={people}
        onChange={handleChangeValue}
        slotProps={{
          input: {
            min: 1,
            max: 8,
          },
        }}
      />
    </DropDownButton>
  );
}
