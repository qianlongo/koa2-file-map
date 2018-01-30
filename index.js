const fs = require('fs')
let mappingFile = {}
const readFileSync = (filePath) => {
  if (fs.existsSync(filePath)) {
    mappingFile = JSON.parse(fs.readFileSync(filePath) || '{}')
  }
}
const watchFile = (filePath) => {
  fs.watchFile(filePath, () => {
    mappingFile = readFileSync(filePath)
  })
}

module.exports = ({ mappingFilePath } = {}) => {
  readFileSync(mappingFilePath)
  watchFile(mappingFilePath)

  return async (ctx, next) => {
    if (!ctx.state.scope) {
      ctx.state.scope = {}
    }

    ctx.state.scope.bundle = mappingFile

    return next()
  }
}
