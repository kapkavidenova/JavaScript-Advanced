class List{
    constructor(){
        this.numbers = [];
        this.size = this.numbers.length;
    }

    add(element){
        if(isNaN(element))
        {
            throw new Error;
        }
            this.numbers.push(Number(element));
            this.numbers.sort((a,b)=>a-b);
            this.size++; 
            return this;      
    }

    remove (index){
        if(index>=this.size|| index<0){
            throw new Error;
        }else{
            this.numbers.splice(index,1);
            this.size--;
        }
        return this;
    }

    get(index){
        if(index>=this.numbers.size){
            throw new Error;
        }else{
            return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

