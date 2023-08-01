import { useState } from "react";
import useSWR from "swr";

import Box from "@/components/Box";
import Button from "@/components/Button";
import AutoComplete from "@/components/AutoComplete";

import { getAngncies } from "@/lib/getAgencies";
import { useSearchPayload } from "@/store/SearchPayload";

export function AgencySelectForm() {
  const { data } = useSWR("getAgencies", getAngncies, { fallbackData: [] as string[] });
  const [payload, dispatch] = useSearchPayload();
  const [value, setValue] = useState<string | null>(null);

  return (
    <Box className="items-center pt-2 pl-2">
      <AutoComplete
        options={data.filter((v) => !payload.agencies.includes(v))}
        getOptionLabel={(v) => v}
        value={value}
        onChange={(evt, val) => {
          setValue(val);
        }}
      />
      <Button
        className="mx-1"
        color="tetriary"
        onClick={() => {
          if (value && !payload.agencies.includes(value)) {
            dispatch({ type: "setAgencies", data: payload.agencies.concat(value) });
            setValue(null);
          }
        }}
      >
        添加
      </Button>
    </Box>
  );
}
