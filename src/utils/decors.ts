import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'
import * as glob from 'glob'


// 装饰器注册路由
const router =new KoaRouter()
const createMethod=router=>method=>(path:string)=>{
    return (target,property)=>{
        // 路由注册
        router[method](path,target[property])
    }
}
const method=createMethod(router)
export const get=method('get')
export const post=method('post')

export const load=(folder:string):KoaRouter=>{
    const extname='.{js,ts}'
    glob.sync(require('path').join(folder,`/**/*${extname}`)).forEach(item=>require(item))
    return router;
}