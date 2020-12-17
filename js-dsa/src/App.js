import logo from './logo.svg';
import './App.css';
import {quickSort} from './dsa/Sorting/QuickSort'
import {mergeSort} from './dsa/Sorting/MergeSort'
import {radixSort} from './dsa/Sorting/RadixSort'

console.log('sort: ', quickSort([1,3,2,7,4,8,9]))
console.log('merge: ', mergeSort([2,3,9,7,1,4]));
console.log('radix: ', radixSort([2,3,9,7,1,4]));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
