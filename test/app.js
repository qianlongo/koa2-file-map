const Koa = require('koa')
const KoaRouter = require('koa-router')
const routes = require('./routes')
const fileMapping = require('../index')
const app = new Koa()
const PORT = 3000
const path = require('path')

app.use(fileMapping({
  mappingFilePath: path.resolve(__dirname, './mapFile.json')
}))
app.use(routes(KoaRouter))
app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
