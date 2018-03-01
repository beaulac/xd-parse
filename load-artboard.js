'use strict';
const fs = require('fs');
const path = require('path');
const artboardData = fs.readFileSync(path.join(__dirname,
                                               '/data/artwork/artboard-1ab58054-0b04-499d-80c3-1ac57b6cee5f/graphics/graphicContent.agc'
));

exports.single = JSON.parse(artboardData);

const agcDir = path.join(__dirname, '/agc');

const jsonFiles = fs.readdirSync(agcDir)
                    .filter(fn => fn.endsWith('json'))
                    .map(fn => fs.readFileSync(path.join(agcDir, fn)));

exports.all = jsonFiles.map(JSON.parse);
