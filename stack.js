class stack{
    constructor(){
    this.arr = []
    this.stacktop = 0
    }
     push(e){
        this.arr[this.stacktop] = e;
        this.stacktop+=1;
         console.log(this.arr)
    }
     pop(){
    if(this.stacktop === 0)
        return "stack is empty";
    else{
        --this.stacktop
        console.log(this.stacktop)
        console.log(this.arr[this.stacktop]);
        return this.arr[this.stacktop];

    }
    }
}

const Stack = new stack()

Stack.push(100)
Stack.push(200)
Stack.pop()
console.log(Stack.pop())
console.log(Stack.pop())



