import { Artboard } from './Artboard';
import { ClipPathValue } from './ClipPath';
import { Style } from './Style';
import { Meta } from './UX';

export interface Root {
    artboards?: { [key: string]: ArtboardValue };
    children?: any[];
    resources?: Resources;
    version?: string;
}

export interface Resources {
    clipPaths?: { [key: string]: ClipPathValue };
    gradients?: { [key: string]: GradientValue };
    meta?: Meta;
}

export interface ArtboardRoot {
    version?: string;
    children?: [ArtboardChild];
    artboards?: Reference;
    resources?: Reference;
}

export interface Reference {
    href?: string;
}

// Tendency to have [type] as key containing data.
export interface ArtboardChild {
    type?: 'artboard';
    artboard?: Artboard;
    id?: string;
    meta?: Meta;
    style?: Style;
}

export interface ArtboardValue {
    height?: number;
    name?: string;
    viewportHeight?: number;
    width?: number;
    x?: number;
    y?: number;
}


export interface GradientValue {
    // Todo find example with gradient.
}
