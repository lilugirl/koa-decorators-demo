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

    @post('/users')
    public add(ctx){
        users.push(ctx.request.body)
        ctx.body={ok:1}
    }
}

// 加载器
// 完成路由注册