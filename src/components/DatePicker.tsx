import dayjs from "dayjs";
import React, { useId } from "react";
import { Datepicker, Input, initTE } from "tw-elements";

interface DatePickerProps {
  value?: Date;
  onChange?(value?: Date): void;
  minDate?: Date;
}

export default function DatePicker({ value, onChange, minDate }: DatePickerProps) {
  const ref = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (!mounted) {
      initTE({ Datepicker, Input });
      const ins = Datepicker.getInstance(ref.current);
      ins.options.title = "选择日期";
      ins.options.monthsFull = [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];
      ins.options.weekdaysFull = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      ins.options.monthsShort = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
      ins.options.weekdaysShort = [...ins.options.weekdaysFull];
      ins.options.weekdaysNarrow = ["日", "一", "二", "三", "四", "五", "六"];
      // ins.options.okBtnText = "确认";
      // ins.options.clearBtnText = "清除";
      ins.options.cancelBtnText = "取消";
      ins.options.disablePast = true;
      ins.options.removeOkBtn = true;
      ins.options.confirmDateOnSelect = true;
      ins.options.removeClearBtn = true;
      setMounted(true);
    } else {
      const ins = Datepicker.getInstance(ref.current);
      ins.options.min = minDate ?? dayjs().toDate();
      ins.options.max = dayjs().add(1, "year").toDate();

      const confirmDate = ins._confirmSelection.bind(ins);
      ins._confirmSelection = function (date?: Date) {
        confirmDate(date);
        onChange?.(date);
      };
    }
  }, [onChange, minDate, mounted]);

  const dateInputId = useId();

  return (
    <div className="margin-reset">
      <div
        ref={ref}
        className="relative sm:mt-0 mt-3"
        data-te-datepicker-init
        data-te-format="yyyy/mm/dd"
        data-te-input-wrapper-init
      >
        <input
          id={dateInputId}
          type="text"
          className="peer block min-h-[auto] w-full rounded border-1 border-transparent bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          data-te-datepicker-toggle-ref
          data-te-datepicker-toggle-button-ref
          placeholder="选择日期..."
          value={dayjs(value).format("YYYY/MM/DD")}
          onChange={() => {}}
        />
        <label
          htmlFor={dateInputId}
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
        >
          出发日期
        </label>
      </div>
    </div>
  );
}
