const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()
app.use(router.routes())

const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const vueInstance = new Vue({
  template: `<div>{{ msg }}</div>`,
  data() {
    return {
      msg: `This is renderred by vue-server-renderer`
    }
  }
})

router.get('/', ctx => {
  renderer.renderToString(vueInstance, (err, html) => {
    ctx.body = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>test</title>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `
  })
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
