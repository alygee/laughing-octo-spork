declare class Props {
    color: import("vue-class-component").WithDefault<string>;
}
declare const ColorMixin_base: import("vue-class-component").VueConstructor<{
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
    $props: Partial<import("vue-class-component").ExtractDefaultProps<Props>> & Omit<import("vue-class-component").ExtractProps<Props> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "color">;
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
declare class ColorMixin extends ColorMixin_base {
    hasColorThemeMixin: boolean;
    created(): void;
    theme: import("vue").ShallowUnwrapRef<{
        getColor: (prop?: string | undefined, defaultColor?: string) => string;
    }>;
    get colorComputed(): string;
    computeColor(prop: string, defaultColor?: string): string;
}
export default ColorMixin;
