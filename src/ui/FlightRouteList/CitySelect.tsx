import { getCities } from "@/lib/getCities";
import { City } from "@/utils/type";

import React, { PropsWithChildren, useEffect } from "react";
import useSWR from "swr";

import { Select, initTE } from "tw-elements";

import { SelectProvider, useSelect } from "@mui/base";

interface OptionProps {
  className?: string;
  value: string;
  label?: string;
  disabled?: boolean;
  secondaryText?: string;
}

const Option = ({ label, value, secondaryText, children, ...optionProps }: PropsWithChildren<OptionProps>) => {
  return (
    <option value={value} data-te-select-secondary-text={secondaryText} {...optionProps}>
      {children}
    </option>
  );
};

interface CitySelectProps {
  value?: City;
  onSelect: (city?: City) => void;
}

export function CitySelect({ value, onSelect }: CitySelectProps) {
  const { data } = useSWR("getCities", getCities);
  const cityOptions = data?.map((city) => ({ label: city.name, value: city.code }));

  const selectRef = React.useRef<HTMLSelectElement>(null);
  const { contextValue } = useSelect<City, false>({});

  useEffect(() => {
    initTE({ Select });
    // const ins = Select.getInstance(selectRef.current);
  }, []);

  if (!data) {
    return <select data-te-select-init />;
  }

  const handleSelect = (value: string) => {
    onSelect(data.find((city) => city.code === value));
  };

  return (
    <>
      <select
        ref={selectRef}
        data-te-select-init
        data-te-select-filter="true"
        data-te-select-option-height="52"
        data-te-select-clear-button
      >
        <SelectProvider value={contextValue}>
          {cityOptions?.map((option) => {
            return (
              <Option key={option.value} value={option.value} secondaryText={option.value}>
                {option.label}
              </Option>
            );
          })}
        </SelectProvider>
      </select>
      <label data-te-select-label-ref>选择城市</label>
    </>
  );
}
