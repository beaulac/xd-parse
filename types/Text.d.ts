import { Line } from './Shape';

export interface Text {
    frame?: Frame;
    paragraphs?: Paragraph[];
    rawText?: string;
}

export interface Paragraph {
    lines?: Array<Line[]>;
}

export interface Frame {
    height?: number;
    type?: string;
    width?: number;
}