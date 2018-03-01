import { Child } from './Child';
import { Meta } from './UX';

export interface Artboard {
    children?: Child[];
    meta?: Meta;
    ref?: string;
}
