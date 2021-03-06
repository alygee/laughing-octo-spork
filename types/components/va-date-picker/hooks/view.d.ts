import { VaDatePickerView, VaDatePickerViewProp } from './../types/types';
export declare const useView: (props: {
    [key: string]: any;
    view?: VaDatePickerViewProp | undefined;
}, emit: (event: any | 'update:view', newValue: VaDatePickerViewProp) => any, defaultOverride?: VaDatePickerViewProp | undefined) => {
    syncView: import("vue").WritableComputedRef<VaDatePickerView>;
    next: () => void;
    prev: () => void;
};
