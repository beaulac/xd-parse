'use strict';
const _ = require('lodash');
const prettyjson = require('prettyjson');

const fs = require('fs');
const artboardData = fs.readFileSync(__dirname + '/data/artwork/artboard-1ab58054-0b04-499d-80c3-1ac57b6cee5f/graphics/graphicContent.agc');
let artboardObj = JSON.parse(artboardData);

console.log(Object.keys(artboardObj));

const renderOpts = {
    inlineArrays: true
};

function describe(artboardObj) {
    const { children } = artboardObj;
    if (children) {
        console.log(`${children.length} children\n`);

        const [first] = children;
        console.log('First Child', first);

        const gridStyle = _.get(first, 'meta.ux.gridStyle');
        if (gridStyle) {
            console.log(`\nGrid Style\n`, gridStyle, '\n');
        }

        if (first.type === 'artboard' && first.artboard) {
            describe(first.artboard);
        } else {
            children.forEach(describe);
        }

    } else {

        if (artboardObj.group) {
            console.log(`\nGroup node ${artboardObj.id}`);
            describe(artboardObj.group);

        } else {
            console.log(
                `\nLeaf node ${artboardObj.id}`,
                prettyjson.render(transformChild(artboardObj), renderOpts),
                '\n'
            );
        }


    }
}

function transformChild(child) {
    const { style: { fill, stroke, opacity } = {} } = child;

    if (fill) {
        if (fill.type !== 'solid') {
            console.log('!!! Special type ' + fill.type);
        } else {
            const { value: { r, g, b } } = fill.color;
            child.fill = `rgba(${r},${g},${b},${opacity})`;
        }
    }

    return _.omit(child, ['id', 'style.fill', 'style.stroke', 'style.opacity']);
}

