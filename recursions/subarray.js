// Given an integer array nums, return all possible subsets

function subsets(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }

  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
