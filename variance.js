'use strict';
const _ = require('lodash');

const Multimap = require('mnemonist').MultiMap;


const varianceByPath = new Multimap(Set);

const isNumeric = str => /^[0-9].*/.test(`${str}`);


const isUid = str => /^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i.test(str);
const isResourceRef = str => /^\/resources\/graphics\/.+/.test(str);
const isSvgPath = str => /^M [0-9]/.test(str);

function _classifyString(str) {
    if (isUid(str)) {
        return '_UID_';
    }
    if (isResourceRef(str)) {
        return '_RESOURCE_REF_';
    }

    if (isSvgPath(str)) {
        return '_SVG_PATH_';
    }

    return str;
}

function _variant(value) {
    switch (typeof value) {
    case 'string':
        return _classifyString(value);
    case 'boolean':
        return '_Boolean_';
    case 'number':
        return '_Numeric_';
    default:
        throw Error('Unexpected value ' + JSON.stringify(value));
    }
}

function describeVariance(artboardObj, path = '') {
    if (typeof artboardObj !== 'object') {
        return varianceByPath.set(`${path}`, _variant(artboardObj));
    }

    _.forOwn(
        artboardObj,
        (value, key) => {

            let keyPath = path;
            if (!isNumeric(key)) {
                keyPath += `${path ? '.' : ''}${key}`;
            }

            function describeVariantAtPath(val) {
                if (_.isPlainObject(val)) {
                    return describeVariance(val, keyPath);
                } else if (_.isArray(val)) {
                    val.forEach(sv => describeVariance(sv, `${keyPath}[]`));
                } else {
                    varianceByPath.set(keyPath, _variant(val));
                }
            }

            if (key === 'children') {
                // Reset path.
                return value.forEach(c => describeVariance(c, ''));
            } else {
                describeVariantAtPath(value);
            }
        }
    );
}

const artboards = require('./load-artboard');
// let artboardObj = artboards.single;
// describeVariance(artboardObj);

artboards.all.forEach(board => describeVariance(board));

const variance = [...varianceByPath.associations()];

variance.forEach(([path, valueSet]) => {
    const values = [...valueSet];

    let output;
    if (values.length === 1) {
        output = `Always ${values[0]}`;
    } else if (values.length > 10) {
        output = 'Arbitrary String';
    } else {
        output = values.join(', ');
    }

    console.log(path, ':', output);
});

