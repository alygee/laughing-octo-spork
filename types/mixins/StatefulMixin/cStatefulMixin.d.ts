/**
 * Returns `valueComputed` that is proxy for `modelValue`
 * if `stateful` prop is `false`
 * Record<any, any> & Record<'modelValue', T>
 */
export declare function useStateful<T>(props: {
    [key: string]: any;
    modelValue?: T;
}, emit: (event: 'update:modelValue', ...args: any[]) => void, defaultValue?: T): {
    valueComputed: import("vue").WritableComputedRef<T>;
};
/**
 * Insert this to `@Options`.
 * This will add `modelValue`, `stateful` props and `update:modelValue` emit.
 * If you want to use `modelValue` in your component you provide prop manually.
 *
 * @example
 ```
  @Options({ name: 'Example', ...statefulComponentOptions })
  export default class ExampleComponent extends Vue.with(props)
 ```
 */
export declare const statefulComponentOptions: {
    props: {
        stateful: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: undefined;
            default: undefined;
        };
    };
    emits: readonly ["update:modelValue"];
};
