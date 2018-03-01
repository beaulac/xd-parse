import { Meta } from './UX';

export interface Style {
    clipPath?: StyleClipPath;
    fill?: Fill;
    filters?: Filter[];
    font?: Font;
    opacity?: number;
    stroke?: Stroke;
    textAttributes?: TextAttributes;
}

export interface TextAttributes {
    lineHeight?: number;
    paragraphAlign?: string;
}


export interface Font {
    family?: string;
    postscriptName?: string;
    size?: number;
    style?: string;
}

export interface StyleClipPath {
    ref?: string;
}

export interface Stroke {
    align?: string;
    cap?: string;
    color?: Color;
    join?: string;
    miterLimit?: number;
    type?: string;
    width?: number;
}

export interface Filter {
    global?: boolean;
    params?: FilterParams;
    type?: string;
    visible?: boolean;
}

export interface FilterParams {
    backgroundEffect?: boolean;
    blurAmount?: number;
    brightnessAmount?: number;
    dropShadows?: DropShadow[];
    fillOpacity?: number;
}

export interface DropShadow {
    color?: Color;
    dx?: number;
    dy?: number;
    r?: number;
}

export interface Value {
    b?: number;
    g?: number;
    r?: number;
}

export interface Fill {
    color?: Color;
    pattern?: Pattern;
    type?: string;
}

export interface Color {
    alpha?: number;
    mode?: string;
    value?: Value;
}

export interface Pattern {
    height?: number;
    href?: string;
    meta?: Meta;
    width?: number;
}
