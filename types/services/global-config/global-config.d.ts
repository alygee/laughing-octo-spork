import { GlobalConfig, GlobalConfigUpdater } from './types';
export declare function setGlobalConfig(updater: GlobalConfig | GlobalConfigUpdater): void;
/** Merge current config with new value */
export declare function mergeGlobalConfig(updater: GlobalConfig | GlobalConfigUpdater): void;
export declare function getGlobalConfig(): GlobalConfig;
export declare function useGlobalConfig(): {
    setGlobalConfig: typeof setGlobalConfig;
    getGlobalConfig: typeof getGlobalConfig;
    mergeGlobalConfig: typeof mergeGlobalConfig;
    globalConfig: import("vue").Ref<{
        colors?: {
            [x: string]: string;
        } | undefined;
        icons?: ({
            name: string;
            resolve?: ((dynamicSegments: {
                [dynamicSegment: string]: string;
            }) => import("../icon-config/types").IconProps) | undefined;
            attrs?: {
                [x: string]: string | ((...args: any[]) => unknown);
            } | undefined;
            component?: any;
            content?: string | undefined;
            class?: string | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            rotation?: string | number | undefined;
            spin?: boolean | "clockwise" | "counter-clockwise" | undefined;
            to?: string | undefined;
        } | {
            name: {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: () => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
            } & {
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
            } & {
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            } & {
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
            } & {
                [Symbol.search]: (string: string) => number;
            } & {
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
            };
            resolveFromRegex?: ((...regexGroupValues: string[]) => import("../icon-config/types").IconProps) | undefined;
            attrs?: {
                [x: string]: string | ((...args: any[]) => unknown);
            } | undefined;
            component?: any;
            content?: string | undefined;
            class?: string | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            rotation?: string | number | undefined;
            spin?: boolean | "clockwise" | "counter-clockwise" | undefined;
            to?: string | undefined;
        })[] | undefined;
        components?: {
            [x: string]: {
                [x: string]: any;
            };
        } | undefined;
    }>;
};
export * from './types';
