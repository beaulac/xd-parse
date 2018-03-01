'use strict';
const fs = require('fs');
const artboardData = fs.readFileSync(__dirname + '/data/artwork/artboard-1ab58054-0b04-499d-80c3-1ac57b6cee5f/graphics/graphicContent.agc');

module.exports = JSON.parse(artboardData);
