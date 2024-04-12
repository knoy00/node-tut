const { log } = require('console')
const path = require('path')

console.log(path.sep)

const filePath =path.join('/content', 'subfolder', 'test.txt')
log(filePath)

const base = path.basename(filePath)
log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
log(absolute)