import { PropType } from 'vue';
/**
 * You could add these props to any component by destructuring them inside props option.
 * @example
 * props: { ...useColorProps, componentsOwnProp, etc. }
 * It's better to add props at the beginning, to make sure that Component own props will be used instead in case of collision
 */
export declare const useColorProps: {
    color: {
        type: PropType<string>;
        default: string;
    };
};
export declare function useColor(props: any): {
    hasColorTheme: boolean;
    theme: {
        getColor: (prop?: string | undefined, defaultColor?: string) => string;
    };
    colorComputed: import("vue").ComputedRef<string>;
    computeColor: (prop: string, defaultColor?: string | undefined) => string;
};
