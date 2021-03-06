export declare type CssColor = string;
export declare type ColorConfig = {
    [colorName: string]: CssColor;
};
export declare const DEFAULT_COLOR = "#000000";
export declare const setColors: (colors: ColorConfig) => void;
export declare const getColors: () => ColorConfig;
/**
 * Returns color from config by name or return prop if color is it's valid hex, hsl, hsla, rgb or rgba color.
 * @param prop - should be color name or color in hex, hsl, hsla, rgb or rgba format
 * @param defaultColor - this color will be used if prop is invalid
 */
export declare const getColor: (prop?: string | undefined, defaultColor?: string) => CssColor;
export declare const colorsToCSSVariable: (colors: {
    [colorName: string]: string;
}, prefix?: string) => {};
export declare const useColors: () => {
    setColors: (colors: ColorConfig) => void;
    getColors: () => ColorConfig;
    getColor: (prop?: string | undefined, defaultColor?: string) => CssColor;
    getBoxShadowColor: (color: import("colortranslator/dist/@types").ColorInput) => string;
    getHoverColor: (color: import("colortranslator/dist/@types").ColorInput) => string;
    getFocusColor: (color: import("colortranslator/dist/@types").ColorInput) => string;
    getGradientBackground: (color: string) => string;
    getTextColor: (color: import("colortranslator/dist/@types").ColorInput, darkColor?: string, lightColor?: string) => string;
    shiftHSLAColor: (color: import("colortranslator/dist/@types").ColorInput, offset: {
        h?: number | undefined;
        s?: number | undefined;
        l?: number | undefined;
        a?: number | undefined;
    }) => string;
    setHSLAColor: (color: import("colortranslator/dist/@types").ColorInput, newColor: {
        h?: number | undefined;
        s?: number | undefined;
        l?: number | undefined;
        a?: number | undefined;
    }) => string;
    colorsToCSSVariable: (colors: {
        [colorName: string]: string;
    }, prefix?: string) => {};
};
