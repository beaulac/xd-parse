'use strict';
const readts = require('readts');
const _ = require('lodash');

const parser = new readts.Parser();
const config = parser.parseConfig('tsconfig.json');
const tree = parser.parse(config);


let interfaces = _.reduce(tree, (acc, { interfaceList: [_iface] }) => _iface ? [...acc, _iface] : acc, []);
console.log(interfaces.length);

function _hashProp(prop) {
    return prop.name + ':' + prop.type.format();
}


const ifaceSet = {};

function _hashPropList(propList) {
    const sortedProps = _.sortBy(propList, 'name');

    return sortedProps.map(prop => {
        return _hashProp(prop);
    });
}

function _hashSpec(spec) {
    const { name, propertyList } = spec;

    if (!propertyList) {
        return console.warn('NO PROP LIST', name);
    }

    const plHash = _hashPropList(propertyList);

    const existing = ifaceSet[plHash];
    if (existing) {
        console.log(name, 'Duplicates', existing);
    } else {
        ifaceSet[plHash] = name;
    }
}

function collapse(interfaceList) {
    interfaceList.forEach(ifaceSpec => _hashSpec(ifaceSpec));
}

collapse(interfaces);
