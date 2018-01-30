## koa2-file-map

> 一个将文件内容挂载到koa当前执行环境的中间件

## 使用方式

``` javascript
const Koa = require('koa')
const app = new Koa()
const fileMapping = require('koa2-file-map')
const PORT = 3000

app.use(fileMapping({
  mappingFilePath: path.resolve(__dirname, './mapFile.json') // 需要映射的文件，以.json文件结尾，具体路径根据自己的需要传递
}))

app.use(async (ctx, next) => {
  // koa2-file-map中间件执行之后，会将文件以对象形式挂载到当前执行环境的scope上，并通过bundle对象获取
  const { bundle } = ctx.state.scope
  ctx.body = bundle
})

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})

```
