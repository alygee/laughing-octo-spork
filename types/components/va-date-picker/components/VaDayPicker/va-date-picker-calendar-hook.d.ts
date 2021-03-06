import { Ref } from 'vue';
import { VaDatePickerView } from '../../types/types';
/** Returns last day of previous month */
export declare const getMonthDaysCount: (year: number, month: number) => number;
export declare const getMonthStartWeekday: (year: number, month: number) => number;
/** Returns array from 1 to length */
export declare const getNumbersArray: (length: number) => number[];
export declare const useVaDatePickerCalendar: (view: Ref<VaDatePickerView>, options?: {
    firstWeekday?: Ref<"Monday" | "Sunday"> | undefined;
} | undefined) => {
    calendarDates: import("vue").ComputedRef<Date[]>;
    currentMonthStartIndex: import("vue").ComputedRef<number>;
    currentMonthEndIndex: import("vue").ComputedRef<number>;
};
