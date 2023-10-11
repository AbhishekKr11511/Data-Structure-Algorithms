// Lets create this following graph
// A---B
// | / |
// C   D

// Create a matrix for this connection, 0 means not connected and 1 means connected

/*
    A   B   C   D
A   0   1   1   0
B   1   0   1   1
C   1   1   0   0
D   0   1   0   0

Creating the above matrix into a 4x4 array we get
*/

/*

We just create the same thing in a different form

'a' : [b, c]
'b' : [a, c, d]
'c' : [a, b]
'd' : [b]

*/

// let adjList = {
//     'a' : ['b', 'c'],
//     'b' : ['a', 'c', 'd'],
//     'c' : ['a', 'b'],
//     'd' : ['b']
// }

// console.log(adjList);
// console.log();
// console.log(adjList.a);
// console.log(adjList.b);
// console.log(adjList.c);
// console.log(adjList.d);

//----------------------------------------------------------------

class Graph{
    constructor(){
        this.nodes = new Map()
    }

    addNode(key){
        if(!this.nodes.has(key)){

            // If a node with passed key doesn't exit then I will create this node.
            // But since it won't be pointing
            // towards any other node, the array of pointed nodes is empty
            this.nodes.set(key, [])
            console.log('Vertex added : '+key)
        }
    }

    addEdge(node1, node2){
        if(this.nodes.has(node1) && this.nodes.has(node2)){
            this.nodes.get(node1).push(node2)
            this.nodes.get(node2).push(node1) // If the graph is undirected
            console.log('Edge added for : '+node1+' & '+node2)
            return
        }
        console.log('These nodes dont exist... ');
        return
    }

    getNeighbors(node){
        if(!this.nodes.has(node)){
            console.log('Cant find any such node');
            return
        }
        console.log(this.nodes.get(node));
        return
    }

    printGraph(){
        if(!this.nodes){
            console.log('The graph is empty');
            return
        }
        this.nodes.forEach((value, key)=>console.log(`[${ value }] => ${ key }`))
        return
    }

    deleteEdge(node1, node2){
        if(!this.nodes.has(node1) || !this.nodes.has(node2)){
            console.log('Sorry these vertices dont exist');
            return
        }else if(this.nodes.has(node1) && this.nodes.has(node2)){
            let array1 = this.nodes.get(node1)
            let array2 = this.nodes.get(node2)

            let index1 = array1.indexOf(node2)
            let index2 = array2.indexOf(node1)

            array1.splice(index1,1)
            array2.splice(index2,1)
            console.log(`Deleted Edges between ${node1} and ${node2}`)
            return
        }
    }

    deleteVertex(node){
        if(!this.nodes.has(node)){
            console.log('This Vertex does not exist !');
            return
        }
        else{
            this.nodes.delete(node)
            this.nodes.forEach(item => {
                let indexofNode = item.indexOf(node)
                item.splice(indexofNode, 1)
            })
            return
        }
    }

}


let newGraph = new Graph()
newGraph.addNode(11)
newGraph.addNode(22)
newGraph.addNode(33)
newGraph.addNode(44)
newGraph.addEdge(11, 22)
newGraph.addEdge(22, 33)
newGraph.addEdge(22, 44)
newGraph.addEdge(33, 44)
newGraph.addEdge(55, 66)

console.log();

// console.log(newGraph);
newGraph.printGraph()

console.log();

newGraph.deleteVertex(22)

newGraph.printGraph()