// In this list you insert the elements but they get sorted automatically

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head

        // If the inserted is smaller than the smallest element in the list
        if(newNode.data < current.data){
            newNode.next = current
            this.head = newNode
            return
        }
        
        // OtherWise the inserted element will compare from the beginning
        while(current.next){
            if(newNode.data < current.next.data){
                newNode.next = current.next
                current.next = newNode
                return
            }
            current = current.next
        }
        current.next = newNode
    }
    print(){
        if(!this.head){
            console.log('Empty list, so length : 0');
            return
        }

        let current = this.head
        while(current){
            console.log(`Data: ${current.data}`)
            current = current.next
        }
    }
}

const myList = new LinkedList()

myList.append(5)
myList.append(10)
myList.append(2)
myList.append(3)
myList.append(6)
myList.append(11)
myList.append(20)
myList.append(15)
myList.append(16)
myList.append(4)



myList.print()