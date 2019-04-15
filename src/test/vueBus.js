/**
 * Created by win10 on 2019/4/3.
 */
//js中常用的订阅发布模型的定义
class eventEmitter{
  constructor(){
    this._events = {}
  }
  //监听事件
  on(eventName,func){
    this._events[eventName]?this._events[eventName].push(func):this._events[eventName] = [func]
    console.log('this._events',this._events)
  }
  //触发事件
  emit(eventName, ...params) {
    this._events[eventName] && this._events[eventName].forEach((fn) => fn(...params))
    /*const eventsgu = this._events[eventName]
    if (eventsgu) {
      eventsgu.forEach((event)=>{
        event.apply(this,...params)
      })
    }*/
  }
  //停止监听某个事件
  off(eventName,func){
    if(this._events[eventName]){
      if(!func){
        this._events[eventName] = []
      } else {
        this._events[eventName].splice(this._events[eventName].indexOf(func), 1)
      }
    }
  }
  once(eventName,handler){
    let fired = false
    function magic(){
      this.off(eventName,magic)
      if(!fired){
        fired = true
        handler.apply(this,arguments)
      }
    }
    this.on(eventName, magic)
  }
}
export default new eventEmitter()
