import logo from './logo.svg';
import './App.css';
import {quickSort} from './dsa/Sorting/QuickSort'
import {mergeSort} from './dsa/Sorting/MergeSort'
import {radixSort} from './dsa/Sorting/RadixSort'

// import {palindrome} from './dsa/Other/Palindrome';
// import {adjacentElementsProduct} from './dsa/Other/LargestAdjacentNumbers';
import {makeArrayConsecutive2} from './dsa/Other/Statues'


// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 2, 3, 6, 8
// console.log(makeArrayConsecutive2([0, 9]));
// console.log(makeArrayConsecutive2([1,2, 7, 9]));
// console.log(makeArrayConsecutive2([6, 5, 2, 1]));
// console.log(makeArrayConsecutive2([7, 8, 2, 0]));
// console.log(makeArrayConsecutive2([0, 3]));
// console.log(makeArrayConsecutive2([1,2,3,4,5,6,7,8,9]));
console.log(makeArrayConsecutive2([4, 2, 7, 18]));
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
