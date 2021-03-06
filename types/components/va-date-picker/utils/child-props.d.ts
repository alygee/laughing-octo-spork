import { ComponentOptionsBase, PropType, ComputedRef } from 'vue';
/**
 * Accepts parent component props and return value only for child component props.
 *
 * Used to proxy child component props from parent.
 */
export declare const filterComponentProps: (propsValues: Record<string, any>, childProps: Record<string, any>) => ComputedRef<Record<string, any>>;
declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, any, any, any, any, any, any, any> ? unknown extends P ? {} : P : {};
declare type ExtractPropsType<T> = {
    -readonly [K in keyof ExtractOptionProp<T>]-?: {
        type: PropType<ExtractOptionProp<T>[K]>;
        required: undefined extends ExtractOptionProp<T>[K] ? false : true;
    };
};
export declare function extractComponentProps<T>(component: T, ignoreProps?: string[]): ExtractPropsType<T>;
declare type ExtractEmitsType<T> = T extends ComponentOptionsBase<any, any, any, any, any, any, any, infer E> ? E : [];
export declare function extractComponentEmits<T>(component: T): ExtractEmitsType<T>;
export {};
