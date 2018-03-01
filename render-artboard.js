'use strict';

const JSDOM = require('jsdom').JSDOM;

const fakeDom = new JSDOM();
// Snap expects a window; so we pollute global :c
global.window = fakeDom.window;

const Snap = require('snapsvg');

/**
 * @param {Artboard} artboard
 */
function _findBoundingShape(artboard) {


}

/**
 * @param {Fill} fill
 * @private
 */
function _fillToStyle(fill) {
    if (fill.color) {
        const { color: { value }, type } = fill;
        return `${type} rgb(${value.r},${value.g},${value.b})`;
    } else {
        console.warn('Unsupported fill', fill.type);
    }
}

/**
 * @param {ArtboardChild} artboardChild
 * @param {ArtboardValue} artboardData
 */
function renderArtboard(artboardChild, artboardData) {
    const artboard = artboardChild.artboard;

    console.log(artboardData);
    const { width, height, x: xOffset, y: yOffset } = artboardData;

    const paper = Snap();
    const svgRoot = paper.svg(0, 0, width, height, xOffset, yOffset, width, height);

    artboard.children.forEach(child => {
        _childToShape(child);
    });


    function _childToShape(child) {
        const { type } = child;

        switch (type) {
        case 'shape':
            return _shapeChildToShape(child);
        case 'group':
            const { group } = child;

            return group.children.map(gc => _childToShape(gc));
        default:
            console.warn('Unsupported CHILD type', type);
        }
    }

    function _buildTransformAttr(child) {
        const { transform } = child;
        if (transform) {
            let { a, b, c, d, tx, ty } = transform;

            return `matrix(${a} ${b} ${c} ${d} ${tx} ${ty})`;
        } else {
            return '';
        }
    }

    function _shapeChildToShape(child) {
        const { shape = {}, style } = child;

        switch (shape.type) {
        case 'rect':
            const elem = svgRoot.rect(shape.x, shape.y, shape.width, shape.height);
            elem.attr('transform', _buildTransformAttr(child));
            elem.attr('fill', _fillToStyle(style.fill));

            return elem;
        case 'compound':
            console.log('COMPOUND', child.id);
            return shape.children.map(cc => _childToShape(cc));
        default:
            console.warn('Unsupported SHAPE type', shape.type);
        }
    }

    return paper.outerSVG();
}

const loadArtboard = require('./load-artboard');

const artboard = loadArtboard.single;
/**
 * @type {Root}
 */
const root = loadArtboard.root;

const [artboardChild] = artboard.children;
const ref = artboardChild.artboard.ref;
const artboardData = root.artboards[ref];

const svgValue = renderArtboard(artboardChild, artboardData);
console.log(svgValue);
require('fs').writeFileSync('./test.svg', svgValue);

// Needs to be called to prevent hang.
fakeDom.window.close();
