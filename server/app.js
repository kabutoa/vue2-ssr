const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()
app.use(router.routes())

router.get('/', ctx => {
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>test</title>
      </head>
      <body>
        <div>This is a server rendering page</div>
      </body>
    </html>
  `
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
