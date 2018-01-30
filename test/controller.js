let count = 0
module.exports = {
  async index (ctx, next) {
    const { bundle } = ctx.state.scope
    ctx.body = bundle
  },
  async list (ctx, next) {
    ctx.body = `list ${count++}`
  }
}
