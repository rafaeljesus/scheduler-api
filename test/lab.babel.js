const Babel = require('babel-core')

module.exports = [{
  ext: '.js',
  transform: (content, filename) => {
    if (filename.indexOf('node_modules') === -1) {
      const res = Babel.transform(content, {
        sourceMap: 'inline',
        filename: filename,
        sourceFileName: filename
      })
      return res.code
    }
    return content
  }
}]
