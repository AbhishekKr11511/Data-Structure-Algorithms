// Graphs :- Its a non-linear data structure that consists of a collection of nodes
// connected by edges. Graphs are used to represent relationships betwern various
// entities. They are a powerfull tool in computer science for modeling and solving
// problems that involve connections, networks, dependencies and more.

// Each node can contains some data or information, and each edge represents a 
// relationship between nodes. Depending on the nature of these relationships and the
// properties of the graph, they can be categorized into various types

// 1. Directed Graph :- Edges have a specific direction. This means that the
// relationship between nodes is one-way, and an edges from node A to node B does
// not necessarily imply an edges from node B to node A.

// 2. Undirected Graph :- In a undirected graph, edges do not have a direction. The
// relationship between nodes is bidirectional, and if there's an edges between node A
// and node B, it implies an edge between node B and node A


// 3. Weighted Graph :- Here each edge has a weight or cost associated
// with it. This weight can represent various quantities, such as direction, cost, time etc

// 4. Unweighted Graph :- Here all edges are considered equal, and no specific weight is
// associated with them.

// 5. Cyclic graph :- A cyclic graph contains at least one cycle, which is path that
// starts and ends at the same node.

// 6. Acyclic graph :- It does not contain an cycles. Trees are a special case of acyclic graphs

// Connected graph :- It is one in which there is a path between any two nodes. in other
// words, you can reach any node from any other node in graph

// Disconnected graph :- A disconnected graph is composed of multiple connected
// components, where each components is a subgraph of nodes that are not directly
// reachable from nodes in other components.

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


let arr = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
]

console.log(arr); // All array
console.log(arr[1]); // 2nd Element which is the B's array
console.log(arr[1][2]) // 3rd element of the B's array

