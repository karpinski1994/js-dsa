export default class Graph {
  constructor() {
    this.adjacentList = {}
  }

  addVertex = (vertex) => {
    if(!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }

  addEdge = (firstVertex, secondVertex) => {
    this.adjacentList[firstVertex].push(secondVertex);
    this.adjacentList[secondVertex].push(firstVertex);
  }


  DFS = (start) => {
    let result = [];
    let visited = {};

    const dfs = (vertex) => {
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacentList.forEach(neighbour => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      })
    }
    dfs(start);

    return result;
  }
  
  
};
