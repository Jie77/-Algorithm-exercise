/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


var twoSum = function(nums, target) {
    //1.不能改变顺序
    // var left = 0,
    //     right = nums.length - 1,
    //     sum = 0
    // nums.sort(function(a,b){
    //     return a - b
    // })
    // while (left <= right){
    //     sum = nums[left] + nums[right]
    //     if (sum == target){
    //         return [left, right]
    //     }else if (sum > target){
    //         right -= 1
    //     }else{
    //         left += 1
    //     }
    // }

    //2.算法复杂度过高O(n^2)
    // for (let i=0; i<nums.length; i++){
    //     for (let j=i+1; j<nums.length; j++){
    //         if (nums[i] + nums[j] == target){
    //             return [i,j]
    //         }
    //     }
    // }
    
    //O(n)
    dict = {}
    for (let i=0; i<nums.length; i++){
        if (nums[i] in dict){
            return [dict[nums[i]], i] 
        }else{
            dict[target - nums[i]] = i
        }
    }
}

console.log(twoSum([3,2,4], 6))