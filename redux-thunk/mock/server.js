const jsonServer = require('json-server')
//创建 Json-server 服务器
const server = jsonServer.create()
//加载服务器配置文件
const config = require('./config')
//加载模拟数据文件
const data=require('./db/index')
//数据文件中的数据放入到json-server中
const router= jsonServer.router(data)
//申明中间件
const middlewares = jsonServer.defaults()

const rules = require('./routes')

//     |------------|
//     |模拟登录 占位 |
// |------------|
//

//自定义路由
server.use(jsonServer.rewriter(rules));

//数据在被前端接收到之前，统一包一下，使之符合约定的数据格式
router.render = (req, res) => {
    //模拟网络延时
    setTimeout(function(){
        res.jsonp({
            success:true,
            msg:"请求成功",
            obj: res.locals.data
        })
    },config.DELAY)
}
//使用默认的中间件
server.use(middlewares)

//使用配置好的数据路由
server.use(router)

//开启服务器监听
server.listen({
    host:config.SERVER,
    port:config.PORT
}, () => {
    console.log('JSON Server is running')
})