import { PropType } from 'vue';
import { FormProvider } from '../components/va-form/consts';
/**
 * You could add these props to any component by destructuring them inside props option.
 * @example
 * props: { ...useFormComponentProps, componentsOwnProp, etc. }
 * It's better to add props at the beginning, to make sure that Component own props will be used instead in case of collision
 */
export declare const useFormComponentProps: {
    rules: {
        type: PropType<any[]>;
        default: () => never[];
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    success: {
        type: PropType<boolean>;
        default: boolean;
    };
    messages: {
        type: PropType<any[]>;
        default: () => never[];
    };
    error: {
        type: PropType<boolean>;
        default: boolean;
    };
    errorMessages: {
        type: PropType<string | any[]>;
    };
    errorCount: {
        type: PropType<string | number>;
        default: number;
    };
    id: {
        type: PropType<string | number>;
        default: undefined;
    };
    name: {
        type: PropType<string | number>;
        default: undefined;
    };
    modelValue: {
        default: undefined;
        validator: () => never;
    };
};
export declare function useFormComponent(props: Record<string, any>, context: any): {
    isFocused: import("vue").Ref<boolean>;
    isFormComponent: import("vue").Ref<boolean>;
    formProvider: FormProvider | undefined;
    validate: () => boolean;
    ValidateMixin_onBlur: () => void;
    shouldValidateOnBlur: import("vue").ComputedRef<boolean>;
    focus: () => void;
    reset: () => void;
    resetValidation: () => void;
    hasError: () => any;
    computedError: import("vue").WritableComputedRef<boolean>;
    computedErrorMessages: import("vue").WritableComputedRef<any[]>;
};
