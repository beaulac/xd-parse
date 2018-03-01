import { Child } from './Child';
import { Meta } from './UX';

export interface Artboard {
    children?: Child[];
    meta?: Meta;

    /**
     * UID Used to identify this Artboard in graphicResources.
     */
    ref?: string;
}
