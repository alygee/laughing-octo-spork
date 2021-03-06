import { PropType, Ref } from 'vue';
/**
 * You could add these props to any component by destructuring them inside props option.
 * @example
 * props: { ...useMaxSelectionsProps, componentsOwnProp, etc. }
 * It's better to add props at the beginning, to make sure that Component own props will be used instead in case of collision
 */
export declare const useMaxSelectionsProps: {
    maxSelections: {
        type: PropType<number>;
        default: undefined;
    };
};
export declare function useMaxSelections(selections: Ref<any[]>, maxSelections: Ref<number>, emit: (event: 'update:modelValue', ...args: any[]) => void): {
    exceedsMaxSelections: () => boolean;
    addOption: (optionToAdd: any) => void;
};
