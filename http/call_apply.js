// var pet = {
//     word: '...',
//     speack: function() {
//         console.log(this.word)
//         console.log(this === pet)
//     }
// }
// // pet.speack()

// var dog = {
//     word: 'wangwang'
// }

// pet.speack.call(dog)



// 利用call/apply实现继承
function pet(word) {
    this.word = word;
    this.speack = function() {
        console.log(this.word)
    }
}

function dog(word) {
    // pet.call(this, word)
    pet.apply(this, arguments)
}

var dogObj = new dog('wang')
dogObj.speack()