import { DefineComponent, ComponentOptions } from 'vue';
import { PropOptions } from 'vue-class-component';
export declare type Props = {
    [key: string]: PropOptions;
};
export declare function getComponentOptions(component: DefineComponent): ComponentOptions;
export declare function resolveProps(options: any, optionsType?: string): {};
declare const withConfigTransport: (component: any) => any;
export default withConfigTransport;
