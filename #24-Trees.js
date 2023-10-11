// Trees are hierarchical data structures. They consist of nodes connected by edgesm, with a root node at the top and child nodes branching out from the root. Each node in a tree can have zero or more chld nodes, nodes that have no children are called leaves

// In this module we will mostly try to learn about Binary Search trees

// Lets try to create a BST

//----------------------------------------------------------------

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    // node = node.data, node.left, node.right
}

class Tree{
    constructor(){
        this.root = null
    }
    
    appendChild(data){

        let newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return
        }

        
        function traverse(newNode , current){
            if(newNode.data < current.data){
                if(!current.left){
                    current.left = newNode
                    return
                }
                current = current.left
                return traverse (newNode, current)
            }else{ //(current.data < data)
                if(!current.right){
                    current.right = newNode
                    return
                }
                current = current.right
                return traverse (newNode, current)
            }
        }
        let current = this.root // Initial position
        traverse(newNode,current)
    }

    print(){
        if(!this.root){
            console.log('Tree is Empty');
            return
        }

        function traverse(root){
            if(root){
                traverse(root.left)

                console.log(root.data);

                traverse(root.right)
            }
        }
        let current = this.root
        traverse(current)
    }

    search(data){
        if(!this.root){
            console.log('The Tree is Empty');
            return
        }
        function traverse(data, current){
            if(!current.left && !current.right && current.data!=data){
                console.log('Not found :(');
                return
            }
            else if(current.left.data==data){
                console.log('Found :-');
                console.log('Parent : '+current.data);
                console.log('Left Child : '+current.left.data);
                return
            }
            else if(current.right.data==data){
                console.log('Found :-');
                console.log('Parent : '+current.data);
                console.log('Right Child : '+current.right.data);
                return
            }
            else{
                if(current.data > data){
                    current = current.left
                    return traverse(data, current)
                }else{
                    current = current.right
                    return traverse(data, current)
                }
            }
        }
        let current = this.root
        traverse(data, current)
    }


    depthFirstSearch(){
        let current = this.root
        
        function traverse(current){
            if(current){
                console.log(current.data);

                traverse(current.left)

                traverse(current.right)
            }
        }

        traverse(current)
    }
    breadthFirstSearch(){

        if(!this.root){
            console.log('Tree is empty');
            return
        }
        
        let current = this.root
        let currentQueue = [current]

        while(currentQueue.length > 0){
            let printValue = currentQueue.shift()
            console.log(printValue.data)
            if(printValue.left){
                currentQueue.push(printValue.left)
            }
            if(printValue.right){
                currentQueue.push(printValue.right)
            }
        }
    }

    minAndMax(){

        if(!this.root){
            console.log('The Tree is empty');
            return
        }
        
        function traverse(current){
            if(current){
                if(current.data<min){
                    min = current.data
                }
                if(current.data>max){
                    max = current.data
                }
                traverse(current.left)
                traverse(current.right)
            }
        }
        
        let current = this.root
        let min = current.data
        let max = current.data
        traverse(current)
        console.log('Minimum : '+min);
        console.log('Maximum : '+max);
        // Till here we can get both values and function ends here
    }

    deleteNode(value){
        if(!this.root){
            console.log('The Tree is Empty');
            return
        }

        function minValue(current){
            while(current.left){
                current = current.left
            }
            return current
        }

        function traverse(current, value){
            if(current.data > value){
                current.left = traverse(current.left, value)
            }else if(current.data < value){
                current.right = traverse(current.right, value)
            }else{
                if(!current.left && !current.right){
                    current = null
                    return
                }
                else{
                    if(!current.left && current.right){
                        return current.right
                    }else if(!current.right && current.left){
                        return current.left
                    }
                    let temp = minValue(current.right)
                    current.data = temp.data
                    current.right = traverse(current.right, temp.data)
                }
            }
            return current
        }
        let current = this.root
        traverse(current,value)
    }

}

let newTree = new Tree()


newTree.appendChild(10)
newTree.appendChild(5)
newTree.appendChild(25)

newTree.appendChild(2)
newTree.appendChild(7)
newTree.appendChild(15)
newTree.appendChild(35)

newTree.deleteNode(5)

newTree.print()