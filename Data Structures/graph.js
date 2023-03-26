// has vertices lines and edges(xazi)
// we have directed and non-directed graphs
// in non-directional graph  we can traverse in both ways
// Adjacency matrix: matrix that shows if I and J vertexes ar connected. if yes matrix[I][J] equals to 1, if no then 0.

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

//     B
//   /  \
//  A    C

// Adjacency list: list that shows which edges are connected:
// A ---> B
// B ---> A,C
// C ---> B

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    // check if vertexes exist, if no create them
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    // add edges bidirectionally
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-> " + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

console.log("--------");
// console.log('graph.hasEdge("A","B")', graph.hasEdge("A", "B"));
// graph.removeEdge("A", "B");
// console.log('graph.hasEdge("A","B")', graph.hasEdge("A", "B"));

graph.removeVertex("A");
graph.display();
