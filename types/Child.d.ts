import { Group } from './Group';
import { Shape } from './Shape';
import { Style } from './Style';
import { Text } from './Text';
import { Transform } from './Transform';
import { Meta } from './UX';
import { VisualBounds } from './VisualBounds';

export interface Child {
    group?: Group;
    id?: string;
    meta?: Meta;
    name?: string;
    shape?: Shape;
    style?: Style;
    text?: Text;
    transform?: Transform;
    type?: string;
    visible?: boolean;
    visualBounds?: VisualBounds;
}
