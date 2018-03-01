import { Style } from './Style';
import { Transform } from './Transform';
import { Meta } from './UX';

export interface ShapeChild {
    id?:        string;
    meta?:      Meta;
    name?:      string;
    shape?:     Shape;
    style?:     Style;
    transform?: Transform;
    type?:      string;
}

export interface Shape {
    children?:  ShapeChild[];
    height?:    number;
    operation?: string;
    path?:      string;
    r?:         number[];
    type?:      string;
    width?:     number;
    x?:         number;
    y?:         number;
}
export interface Shape {
    height?: number;
    type?:   string;
    width?:  number;
    x?:      number;
    y?:      number;
}
export interface Shape {
    path?: string;
    type?: string;
    x1?:   number;
    x2?:   number;
    y1?:   number;
    y2?:   number;
}
export interface Shape {
    children?:  ShapeChild[];
    cx?:        number;
    cy?:        number;
    height?:    number;
    operation?: string;
    path?:      string;
    r?:         number[] | number;
    rx?:        number;
    ry?:        number;
    type?:      string;
    width?:     number;
    x?:         number;
    y?:         number;
}
export interface Shape {
    height?: number;
    path?:   string;
    type?:   string;
    width?:  number;
    x?:      number;
    x1?:     number;
    x2?:     number;
    y?:      number;
    y1?:     number;
    y2?:     number;
}
export interface Shape {
    path?: string;
    type?: string;
}
export interface Shape {
    cx?:     number;
    cy?:     number;
    height?: number;
    path?:   string;
    type?:   string;
    width?:  number;
    x?:      number;
    x1?:     number;
    x2?:     number;
    y?:      number;
    y1?:     number;
    y2?:     number;
}
export interface Shape {
    height?: number;
    path?:   string;
    r?:      number[];
    type?:   string;
    width?:  number;
    x?:      number;
    x1?:     number;
    x2?:     number;
    y?:      number;
    y1?:     number;
    y2?:     number;
}
export interface Shape {
    height?: number;
    path?:   string;
    type?:   string;
    width?:  number;
    x?:      number;
    y?:      number;
}
export interface Shape {
    height?: number;
    path?:   string;
    r?:      number[];
    type?:   string;
    width?:  number;
    x?:      number;
    x1?:     number;
    x2?:     number;
    y?:      number;
    y1?:     number;
    y2?:     number;
}
export interface Shape {
    height?: number;
    path?:   string;
    r?:      number[];
    type?:   string;
    width?:  number;
    x?:      number;
    y?:      number;
}
export interface Shape {
    children?:  ShapeChild[];
    cx?:        number;
    cy?:        number;
    height?:    number;
    operation?: string;
    path?:      string;
    r?:         number[];
    rx?:        number;
    ry?:        number;
    type?:      string;
    width?:     number;
    x?:         number;
    y?:         number;
}
export interface Shape {
    height?: number;
    path?:   string;
    type?:   string;
    width?:  number;
    x?:      number;
    x1?:     number;
    x2?:     number;
    y?:      number;
    y1?:     number;
    y2?:     number;
}

export interface Line {
    from?: number;
    style?: Style;
    to?: number;
    x?: number;
    y?: number;
}