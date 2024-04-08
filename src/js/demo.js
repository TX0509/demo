'use strict'
/*
const MYAPP = {};    // 自定义一个全局变量,其他变量绑定后防止不同JS文件中同名全局变量冲突
MYAPP.a1 = 'hello, javascript!';
const PI = '3.14';
let b1 = 'first js!';
const C = "can't change!"
let arr_1 = [1, 2, true, 'hello', [4, 5]];
let arr_2 = [3, 1, 7, 10, 5]
MYAPP.c = `one  
two
three
`; // 多行字符串
window.alert(a);
document.write(let arr_1[3]);
console.log(b1.length);
console.log(MYAPP.a1.split(','));
arr_2.pop();
arr_2.pop();
console.log(arr_2);
if (obj.hasOwnProperty('toString')) {
    console.log(obj['middle-school']);
}
else {
    console.log(obj.h)
}

let i;
for (i = 0; i < arr_1.length; i++){
    console.log(arr_1[i])
}
for(let a of map_1){
    //console.log(a);
}
for (let b of arr_1){
    //console.log(b);
}
arr_1.forEach(function(element, index, array){
    console.log(element + ', index = ' + index);
});

MYAPP.abs = function(a, b){
    if (typeof a !== 'number'){
        throw `${a} not a number!`
    }
    if (a > 1){
        return a + arguments.length;
    } else {
        return arguments[0];
    }
};
function test(a) {
    for (let i = 0; i < a.length; i++){
        console.log(i)
    }
}
console.log(map_1)
console.log(PI);
// 解构赋值
let [x, y, z] = [1, 2, 3];
let [, n] = [arr_1[0], arr_1[0]];
console.log(n);

let obj_1 = {
    a: 'hello',
    b: {c: 1}
};
let {a:d, e=3, b} = obj_1;
console.log(b);
let obj_2 = {
    name: 'tom',
    age: '10',
    skill: function (){  // 对象方法
        console.log('hello, jerry');
    }
};
obj_2.skill()
// 箭头函数
let obj_3 = {
    language: x => ({num: x})
}
console.log(obj_3.language(1))
//排序
console.log(arr_2.sort((a, b) => a - b))
//标签函数
let email = 'test2qq.com';
let password = '123456';
function sql(strings, ...exps){
    console.log(`SQL: ${strings.join('?')}`);
    console.log(`SQL parameters: ${JSON.stringify(exps)}`);
    return {
        name: '小明',
        age: 20
    };
}
let result = sql`SELECT * FROM users WHERE email=${email} AND password=${password}`;
console.log(JSON.stringify(result));
// 生成器
function* generator(x){
    yield x + 1;
    yield x + 2;
    return x + 3;
}
let now = new Date();
console.log(now);
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }

    say (){
        return `Hello, ${this.name}!`
    }
}
// 浏览器
let li = document.getElementById('test-list');
let arr = ['Swift', 'ANSI C', 'DirectX'];
for (let i = 0; i < li.children.length; i ++) {
    if (arr.includes(li.children[i].innerHTML)){
        // console.log(li.children[i]);
        li.children[i].remove();
    }
}
 */
//表单操作
let username = document.getElementById('username');
