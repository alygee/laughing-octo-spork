export declare type VaDatePickerModelValuePeriod = {
    start: Date | null;
    end: Date | null;
};
export declare type VaDatePickerModelValue = Date | Date[] | VaDatePickerModelValuePeriod;
export declare type VaDatePickerViewType = 'year' | 'month' | 'day';
export declare type VaDatePickerView = {
    type: VaDatePickerViewType;
    year: number;
    month: number;
};
export declare type VaDatePickerViewProp = {
    [T in keyof VaDatePickerView]+?: VaDatePickerView[T];
};
export declare type VaDatePickerType = 'year' | 'month' | 'day';
export declare type VaDatePickerMode = 'single' | 'multiple' | 'range' | 'auto';
