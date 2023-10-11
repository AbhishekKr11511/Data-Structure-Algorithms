
// First In First Out

// We will learn about Enqueue(Push) and Dequeue(pop) in queue

const queue = []


//----------------------------------------------------------------

const enqueue = (array, value) => {
    array[array.length] = value
    console.log(array);
}
const dequeue = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i+1]
    }
    array.length -= 1 
    console.log(array)
}

const peak = (array) => {
    if(array.length!=0){
        console.log(array[0]);
    }else{
        console.log('queue Empty');
    }
}
const rear = (array) => {
    if(array.length!=0){
        console.log(array[array.length-1]);
    }else{
        console.log('queue Empty');
    }
}

console.log('Enqueing');
enqueue(queue,2)
enqueue(queue,3)
enqueue(queue,4)
enqueue(queue,5)
enqueue(queue,6)
peak(queue)


console.log();

console.log('Dequeing');
dequeue(queue)
dequeue(queue)
peak(queue)
dequeue(queue)
peak(queue)

//----------------------------------------------------------------
