import { PropType } from 'vue';
declare type StringOrFunction = string | Function;
export declare const useSelectableListProps: {
    options: {
        type: PropType<any[]>;
        default: () => never[];
    };
    textBy: {
        type: PropType<StringOrFunction>;
        default: string;
    };
    valueBy: {
        type: PropType<StringOrFunction>;
    };
    trackBy: {
        type: PropType<StringOrFunction>;
        default: string;
    };
    disabledBy: {
        type: PropType<StringOrFunction>;
        default: string;
    };
};
export declare function useSelectableList(props: any): {
    isSelectableListComponent: boolean;
    getValue: (option: any) => any;
    getOptionByValue: (value: any) => any;
    getText: (option: any) => any;
    getDisabled: (option: any) => any;
    getTrackBy: (option: any) => any;
};
export {};
