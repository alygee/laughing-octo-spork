import { Ref } from 'vue';
import { VaDatePickerModelValue } from '../../va-date-picker/types/types';
/**
 * This guard is used to prevent updating modelValue if range end is not specified.
 * This guard provides reset method, that allow us to reset VaDateInput value if dropdown is closed.
 */
export declare const useRangeModelValueGuard: (modelValue: Ref<VaDatePickerModelValue | undefined>, disabled: Ref<boolean>) => {
    valueComputed: import("vue").WritableComputedRef<VaDatePickerModelValue | undefined>;
    reset: () => void;
};
