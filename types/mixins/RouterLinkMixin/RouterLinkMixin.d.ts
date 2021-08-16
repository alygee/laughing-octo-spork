declare class RouterLinkProps {
    tag: import("vue-class-component").WithDefault<string>;
    to: string | Record<string, unknown> | undefined;
    replace: boolean | undefined;
    append: boolean | undefined;
    exact: boolean | undefined;
    activeClass: string | undefined;
    exactActiveClass: string | undefined;
    href: string | undefined;
    target: string | undefined;
}
declare const RouterLinkMixin_base: import("vue-class-component").VueConstructor<{
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
    $props: Partial<import("vue-class-component").ExtractDefaultProps<RouterLinkProps>> & Omit<import("vue-class-component").ExtractProps<RouterLinkProps> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag">;
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
} & import("vue-class-component").ExtractProps<RouterLinkProps>>;
export declare class RouterLinkMixin extends RouterLinkMixin_base {
    hasRouterLinkMixin: boolean;
    get tagComputed(): string;
    get hasRouterLinkParams(): boolean;
    get isActiveRouterLink(): boolean;
    get hrefComputed(): any;
    created(): void;
}
export {};
