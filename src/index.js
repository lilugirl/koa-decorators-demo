import {load} from './utils/decors'

class Log{
    name='liuyi'
    print(msg){
        console.log(this.name+"say: "+msg)
    }
}


const log=new Log();
log.print('Hello');