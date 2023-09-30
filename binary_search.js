// Sorted array
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// Element to search for
const target = 19;

// Binary search 
let low = 0;
let high = sortedArray.length - 1;
let found = false;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  const midValue = sortedArray[mid];

  if (midValue === target) {
    found = true;
    break;
  } else if (midValue < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (found) {
  console.log(`Found ${target} at index ${low}`);
} else {
  console.log(`${target} not found in the array`);
}
