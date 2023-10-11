class Queue{
    constructor(capacity){
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(item){
        if(this.isFull()){
            console.log('Queue is full, Cannot Enqueue');
            return;
        }
        this.queue[this.rear] = item;
        this.rear = (this.rear + 1) % this.capacity; // WrapAround
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is already empty, cannot delete further');
            return null
        }
        const item = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity; // WrapAround
        this.size--;
        return item;
    }

    peek(){
        if(this.isEmpty()){
            console.log('Queue is already empty, cannot delete further');
        }
        return this.queue[this.front]
    }
    
    isEmpty(){
        return this.size===0;
    }
    
    isFull(){
        return this.size === this.capacity
    }
}



const circularQueue = new Queue(5)

console.log(circularQueue)

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.enqueue(60)

circularQueue.queue.rear
console.log('queue : '+circularQueue.queue[circularQueue.rear]);


console.log('Front Element : '+ circularQueue.peek());

console.log(circularQueue)

