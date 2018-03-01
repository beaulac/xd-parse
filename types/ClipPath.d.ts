import { Shape } from './Shape';
import { Style } from './Style';
import { Transform } from './Transform';
import { Meta } from './UX';

export interface ClipPathValue {
    children?: ClipPathChild[];
    type?: string;
}

export interface ClipPathChild {
    id?: string;
    meta?: Meta;
    name?: string;
    shape?: Shape;
    style?: Style;
    transform?: Transform;
    type?: string;
}
