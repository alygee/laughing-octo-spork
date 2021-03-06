export declare const sleep: (ms?: number) => Promise<unknown>;
export declare const normalizeValue: (value: any, minValue?: number, maxValue?: number) => any;
export declare const deepEqual: (a: any, b: any) => any;
export declare const warn: (...attrs: any[]) => boolean;
export declare const hasOwnProperty: (object: any, key: any) => boolean;
export declare const getNestedValue: (option: any, propsArray: any) => any;
/**
 * Finds value in the object using string with dots 'key.key.key'
 *
 * @param option
 * @param prop
 */
export declare const getValueByPath: <T extends Record<string, unknown>>(option: T, prop: string | keyof T) => any;
/**
 * Finds value of nested property inside of an object.
 *
 * @param option - Object to look properties inside
 * @param prop - string or function used to find nested property
 */
export declare const getProp: <T extends string | Record<string, unknown>>(option: T, prop: string | Function | ((t: T) => any)) => any;
export declare const generateUuid: () => any;
