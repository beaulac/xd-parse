import { Child } from './Child';
import { RangedStyle } from './RangedStyle';
import { Color, Stroke } from './Style';
import { Transform } from './Transform';
import { AspectLock } from './VisualBounds';

export interface Meta {
    ux?: UX;
}

export interface UX {
    nameL10N?: string;
    hrefLastModifiedDate?: number;
    scaleBehavior?: string;
    uid?: string;
    aspectLock?: AspectLock;
    hasCustomName?: boolean;
    rangedStyles?: RangedStyle[];
    singleTextObject?: boolean;
    symbolId?: string;
    path?: string;
    gridStyle?: GridStyle;
    colorSwatches?: Color[];
    documentLibrary?: DocumentLibrary;
    symbols?: Symbol[];
    hasNameFromExternalSource?: boolean;
}

export interface GridStyle {
    columnSpacing?: number;
    columnStroke?: Stroke;
    columns?: number;
    defaultLayoutWidth?: number;
    gutter?: number;
    layoutColumnStroke?: Stroke;
    layoutRowStroke?: Stroke;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    rowSpacing?: number;
    rowStroke?: Stroke;
    type?: string;
    visible?: boolean;
}

export interface DocumentLibrary {
    elements?: any[];
    version?: number;
}

export interface Symbol {
    group?: SymbolGroup;
    id?: string;
    meta?: Meta;
    name?: string;
    transform?: Transform;
    type?: string;
}

export interface SymbolGroup {
    children?: Child[];
}