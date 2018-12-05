// EventEmitter 类
var EventEmitter = require('events').EventEmitter

// 创建一个实例
var life = new EventEmitter()

// 注册一个事件 类似与addEventListener, 但是注册的同一事件不要超过10个
function aa(data) {
    console.log('哈哈' + data)
}
life.on('aa', aa)
// 派发这个事件, 会返回一个boolean值，看事件是否监听
var hasaaListener = life.emit('aa', '不开森')
var hasbbListener = life.emit('bb', 'aaaaaa')
console.log(hasaaListener) // true
console.log(hasbbListener) // false

// 移除事件(切记移除的第二个参数需要是一个具名函数)
life.removeListener('aa', aa)

// 查看监听特定的事件还有多少个
console.log(life.listeners('aa').length)
console.log(EventEmitter.listenerCount('life', 'aa'))