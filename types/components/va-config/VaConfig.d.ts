import { ComputedRef } from 'vue';
import { ComponentConfig } from '../../services/component-config/component-config';
/**
 * We need another key to provide injected value.
 */
export declare const LocalConfigKey: unique symbol;
export declare const CONFIGS_DEFAULT: ComputedRef<never[]>;
export declare function useLocalConfig(): ComputedRef<ComponentConfig[]>;
declare const _default: import("vue").DefineComponent<{
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    components: Record<string, any>;
} & {}>, {
    components: Record<string, any>;
}>;
export default _default;
