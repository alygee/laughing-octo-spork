import { ColorInput } from 'colortranslator/dist/@types';
export declare const colorToRgba: (color: ColorInput, opacity: number) => string;
export declare const getTextColor: (color: ColorInput, darkColor?: string, lightColor?: string) => string;
export declare const getBoxShadowColor: (color: ColorInput) => string;
export declare const getHoverColor: (color: ColorInput) => string;
export declare const getFocusColor: (color: ColorInput) => string;
export declare const shiftHSLAColor: (color: ColorInput, offset: {
    h?: number;
    s?: number;
    l?: number;
    a?: number;
}) => string;
export declare const setHSLAColor: (color: ColorInput, newColor: {
    h?: number;
    s?: number;
    l?: number;
    a?: number;
}) => string;
/**
 * This method guesses second color for gradient based on first one.
 * Calculation method should differ for different colors, so we split color circle
 * in zones.
 *
 * @param color
 */
export declare const shiftGradientColor: (color: ColorInput) => string;
export declare const getGradientBackground: (color: string) => string;
/**
 * Check if color is valid hsl, hsla, rga, rgba or hex color
 * Taken from https://www.regextester.com/103656
 * @param strColor
 */
export declare const isColor: (strColor: string) => boolean;
