import { get,post } from '../utils/decors'


const users=[
    {name:'tom'}
]

export default class User{
    
    // 注册路由
    @get('/users')
    public list(ctx){
       ctx.body={ok:1,data:users}
    }

    @post('/users',{
        middlewares:[
            async function validation(ctx,next){
                // 参数校验
                const name=ctx.request.body.name;
                if(!name){
                    throw '请输入用户名'
                }
                await next()
            }
        ]
    })
    public add(ctx){
        // 参数校验 =》装饰器实现AOP
        users.push(ctx.request.body)
        ctx.body={ok:1}
    }
}

// 加载器
// 完成路由注册