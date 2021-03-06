import { PropType } from 'vue';
export declare const useAlignProps: {
    align: {
        type: PropType<string>;
        default: string;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useAlign(props: any): {
    alignComputed: import("vue").ComputedRef<{
        display: string;
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
    }>;
};
