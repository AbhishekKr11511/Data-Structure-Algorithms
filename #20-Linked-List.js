// A linked list is a data structure used for organizing and storing a collection of elelments called nodes. Each node has 2 main components. A value and the reference to the next node. Last node points to Null. 

// Common Operations :- Insertion, Deletion, Traversal, Search, Length, Reversal

// Let's create a linked list


class Node{
    constructor(value){
        this.value = value
        this.next = null // Reference to the next node
        console.log('added : '+this.value);
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    //Insert a new node at the end of the list
    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return;
        }
        
        let current = this.head;
        
        // This mean (current.next != null), traverse the list
        while(current.next){
            current = current.next;
        }
        current.next = newNode
    }

    // Print the elements of the list
    print(){
        if(!this.head){
            console.log('List is Empty');
            return;
        }
        let current = this.head;

        // This mean while (current!= null), traverse the list.
        while(current){
            console.log(`Data : ${current.value}, Pointer : ${current.next}`)
            current = current.next
        }
    }

    // Delete an element from the list

    delete(data){
        let current = this.head
        if(!current){
            console.log('List is empty');
            return
        }
        while(current.next){
            if(current.next.value == data){
                console.log('Deleted : ' +data);
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }

    // This method will give the current length of the list, whenever you call it
    length(){
        let count = 0
        let current = this.head
        if(!current){
            console.log('Empty List hence length = 0');
            return
        }
        while(current){
            current = current.next
            count++
        }
        console.log('Length : '+count);
    }
}

const myList = new LinkedList()

myList.length()

myList.append(11)
myList.append(22)
myList.append(33)
myList.append(44)
myList.append(55)

myList.length()

myList.delete(22)
myList.print()

myList.length()

myList.append(66)
myList.append(77)

myList.length()
myList.print()
myList.delete(77)

myList.length()

myList.print()

