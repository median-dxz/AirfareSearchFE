import { useState } from "react";
import useSWR from "swr";

import Box from "@/components/Box";
import Button from "@/components/Button";
import AutoComplete from "@/components/AutoComplete";

import { getAgencies } from "@/lib/getAgencies";
import { useSearchPayload } from "@/store/SearchPayload";
import Swal from "sweetalert2";

export function AgencySelectForm() {
  const { data } = useSWR("getAgencies", getAgencies, { fallbackData: [] as string[] });
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
            if (payload.agencies.length < 20) {
              dispatch({ type: "setAgencies", data: payload.agencies.concat(value) });
              setValue(null);
            } else {
              Swal.fire({
                icon: "warning",
                title: "代理人数量已达上限",
                text: "最多只能选择 20 个代理人",
                toast: true,
                position: "top",
                timerProgressBar: true,
                timer: 3000,
                showConfirmButton: false,
              });
            }
          }
        }}
      >
        添加
      </Button>
    </Box>
  );
}
