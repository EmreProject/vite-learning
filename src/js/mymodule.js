 class Person{

#passwd;
name;
age;

constructor(name,age,passwd){
this.#passwd=passwd;
this.name=name;
this.age=age;
}

info(passwd){

console.log(`Name: ${this.name}, Age: ${this.age}`);
if(passwd==this.#passwd) console.log("passwd is correct");

}
}

export {Person};