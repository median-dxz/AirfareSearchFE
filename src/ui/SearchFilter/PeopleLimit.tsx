import DropDownButton from "@/components/Search/DropDownButton";
import RangeInput from "@/components/RangeInput";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";

export function PeopleLimit() {
  return (
    <DropDownButton
      buttonContent={
        <>
          <UsersIcon width={18} />
          <span>人数: {20}</span>
        </>
      }
    >
      <label htmlFor="PeopleRange" className="mx-auto text-sm inline text-gray-500">
        人数(1-8):
      </label>
      <RangeInput
        id="PeopleRange"
        className="mx-2 w-36"
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
