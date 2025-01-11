let hello = (name) => console.log("Hello brother", name);

// hello("Avinash")

let welcome = (name="avin") =>{
    console.log(name)
}

let x = {
    name:"avinash",
    description:"good in css",
    details:function(){
        console.log(`name is ${this.name} and description is ${this.description}`)
    }
}

console.log(x.details())
// welcome()

