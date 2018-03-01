'use strict';
const _ = require('lodash');

const Multimap = require('mnemonist').MultiMap;
let artboardObj = require('./load-artboard');


const varianceByPath = new Multimap(Set);


function _variant(value) {
    switch (typeof value) {
    case 'string':
        return value;
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
            const keyPath = path ? `${path}.${key}` : key;

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

describeVariance(artboardObj);

console.log(varianceByPath.toJSON());
