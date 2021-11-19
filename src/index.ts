import * as Koa from 'koa' 
import * as bodify from 'koa-body';
import { resolve } from 'path';
import {load} from './utils/decors';
const app = new Koa();

app.use(
    bodify({
        multipart:true,
        // 使用非严格模式，解析delete请求的请求体
        strict:false
    })
);

const router = load(resolve(__dirname,'./routes'))
app.use(router.routes())

app.listen(3000,()=>{
  console.log('服务器启动成功')
})