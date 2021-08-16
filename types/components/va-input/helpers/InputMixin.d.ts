import Cleave from 'cleave.js';
import { CleaveOptions } from 'cleave.js/options';
import { StatefulMixin } from '../../../mixins/StatefulMixin/StatefulMixin';
import { FormComponentMixin } from '../../../mixins/FormComponent/FormComponentMixin';
declare class Props {
    mask: import("vue-class-component").WithDefault<string | CleaveOptions>;
    returnRaw: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: import("vue-class-component").WithDefault<boolean>;
    clearableIcon: import("vue-class-component").WithDefault<string>;
    loading: import("vue-class-component").WithDefault<boolean>;
    canBeFocused: import("vue-class-component").WithDefault<boolean>;
    focused: import("vue-class-component").WithDefault<boolean>;
    modelValue: import("vue-class-component").WithDefault<string | number>;
}
declare const InputMixin_base: import("vue-class-component").VueConstructor<FormComponentMixin & StatefulMixin & {
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
export declare class InputMixin extends InputMixin_base {
    inputElement: Cleave | null;
    eventListeners: any;
    isFocused: boolean;
    get isFocusedComputed(): boolean;
    set isFocusedComputed(value: boolean);
    context: import("vue").ShallowUnwrapRef<{}>;
    get computedValue(): string;
    get showIcon(): boolean;
    get canBeCleared(): boolean;
    get hasContent(): boolean;
    onInput(event: any): void;
    onChange(event: any): void;
    onClick(event: Event): void;
    onPrependClick(event: Event): void;
    onPrependInnerClick(event: Event): void;
    onAppendClick(event: Event): void;
    onAppendInnerClick(event: Event): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    onKeyup(event: Event): void;
    onKeydown(event: Event): void;
    getMask(mask: CleaveOptions | string): {
        creditCard?: boolean | undefined;
        creditCardStrictMode?: boolean | undefined;
        creditCardType?: string | undefined;
        onCreditCardTypeChanged?: import("cleave.js/options/creditCard").CreditCardTypeChangeHandler | undefined;
        phone?: boolean | undefined;
        phoneRegionCode?: string | undefined;
        date?: boolean | undefined;
        dateMin?: string | undefined;
        dateMax?: string | undefined;
        datePattern?: readonly string[] | undefined;
        time?: boolean | undefined;
        timePattern?: readonly string[] | undefined;
        timeFormat?: string | undefined;
        numeral?: boolean | undefined;
        numeralDecimalMark?: string | undefined;
        numeralDecimalScale?: number | undefined;
        numeralIntegerScale?: number | undefined;
        numeralPositiveOnly?: boolean | undefined;
        numeralThousandsGroupStyle?: import("cleave.js/options").NumeralThousandsGroupStyleType | undefined;
        stripLeadingZeroes?: boolean | undefined;
        blocks?: readonly number[] | undefined;
        copyDelimiter?: boolean | undefined;
        delimiter?: string | undefined;
        delimiters?: readonly string[] | undefined;
        delimiterLazyShow?: boolean | undefined;
        initValue?: any;
        lowercase?: boolean | undefined;
        numericOnly?: boolean | undefined;
        prefix?: string | undefined;
        noImmediatePrefix?: boolean | undefined;
        rawValueTrimPrefix?: boolean | undefined;
        uppercase?: boolean | undefined;
        onValueChanged?(event: any): void;
    };
    destroyCleaveInstance(): void;
    initInput(): void;
    setEventListeners(): void;
    mounted(): void;
    /**
     * Free up memory
     */
    beforeUnmount(): void;
}
export {};
