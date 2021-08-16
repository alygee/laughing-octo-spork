declare class Props {
    rules: import("vue-class-component").WithDefault<any[]>;
    disabled: import("vue-class-component").WithDefault<boolean>;
    readonly: import("vue-class-component").WithDefault<boolean>;
    success: import("vue-class-component").WithDefault<boolean>;
    messages: import("vue-class-component").WithDefault<any[]>;
    error: import("vue-class-component").WithDefault<boolean>;
    errorMessages: string | any[] | undefined;
    errorCount: import("vue-class-component").WithDefault<string | number>;
    id: import("vue-class-component").WithDefault<string | number>;
    name: import("vue-class-component").WithDefault<string | number>;
    modelValue: unknown;
}
declare const FormComponentMixin_base: import("vue-class-component").VueConstructor<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{}> & Omit<import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>;
    $forceUpdate: import("vue").ReactiveEffect<any>;
    $nextTick: typeof import("vue").nextTick;
    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & import("vue").ShallowUnwrapRef<{}> & {} & {} & import("vue").ComponentCustomProperties & import("vue-class-component").ClassComponentHooks & {
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<import("vue-class-component").ExtractDefaultProps<Props>> & Omit<import("vue-class-component").ExtractProps<Props> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue-class-component").DefaultKeys<Props>>;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>;
    $forceUpdate: import("vue").ReactiveEffect<any>;
    $nextTick: typeof import("vue").nextTick;
    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & import("vue-class-component").ExtractProps<Props>>;
export declare class FormComponentMixin extends FormComponentMixin_base {
    hadFocus: boolean;
    isFocused: boolean;
    internalErrorMessages: any[];
    internalError: boolean;
    isFormComponent: boolean;
    formProvider: import("vue").ShallowUnwrapRef<{
        onChildMounted?: ((child: FormComponentMixin) => void) | undefined;
        onChildUnmounted?: ((child: FormComponentMixin) => void) | undefined;
    }>;
    mounted(): void;
    unmounted(): void;
    /** @public */
    validate(): any;
    /** @public */
    focus(): void;
    /** @public */
    reset(): void;
    resetValidation(): void;
    hasError(): any;
    ValidateMixin_onBlur(): void;
    get shouldValidateOnBlur(): boolean;
    get computedError(): boolean;
    set computedError(errorMessage: boolean);
    get computedErrorMessages(): any[];
    set computedErrorMessages(errorMessages: any[]);
}
export {};
