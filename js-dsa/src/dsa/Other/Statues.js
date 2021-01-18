/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
 */


export function makeArrayConsecutive2(statues) {
  const { length } = statues;
  const sortedStatues = statues.sort((a, b) => a - b);
  const biggestNumber = sortedStatues[length - 1];
  let neededElements = 0;
  sortedStatues.map((el, id) => {
    let prev = id > 0 ? sortedStatues[id -1] : null;
    if (prev != null) {
      let difference = el - prev;
      if (difference > 1) {
        neededElements += difference - 1;
      }
    }
    
  });
  return neededElements;
}