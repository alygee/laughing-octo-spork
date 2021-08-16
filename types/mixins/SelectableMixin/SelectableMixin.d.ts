import ColorMixin from '../../services/color-config/ColorMixin';
import { FormComponentMixin } from '../FormComponent/FormComponentMixin';
import { StatefulMixin } from '../StatefulMixin/StatefulMixin';
import { LoadingMixin } from '../LoadingMixin/LoadingMixin';
declare class Props {
    arrayValue: import("vue-class-component").WithDefault<string | Record<string, unknown>>;
    label: import("vue-class-component").WithDefault<string>;
    leftLabel: import("vue-class-component").WithDefault<boolean>;
    trueValue: import("vue-class-component").WithDefault<boolean>;
    falseValue: import("vue-class-component").WithDefault<boolean>;
    indeterminate: import("vue-class-component").WithDefault<boolean>;
    indeterminateValue: import("vue-class-component").WithDefault<string | boolean | any[] | Record<string, unknown>>;
}
declare const SelectableMixin_base: import("vue-class-component").VueConstructor<FormComponentMixin & StatefulMixin & LoadingMixin & ColorMixin & {
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
export declare class SelectableMixin extends SelectableMixin_base {
    isSelectableComponent: boolean;
    created(): void;
    get isChecked(): boolean;
    get isIndeterminate(): boolean;
    get modelIsArray(): boolean;
    /** @public */
    reset(): void;
    checkDuplicates(): void;
    onFocus(event: FocusEvent): void;
    onBlur(event: FocusEvent): void;
    isElementRelated(element: any): boolean;
    onWrapperClick(): void;
    toggleSelection(): void;
}
export {};
