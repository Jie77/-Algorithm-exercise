/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length,
        len2 = nums2.length
    let len = len1 + len2
    let index = null
    if (len%2 == 0){
        index = [len/2-1, len/2]
    }else{
        index = [(len-1)/2, (len-1)/2]
    }
    let res = [],
        i = 0,
        j = 0
    while (i<len1 && j<len2) {
        if (nums1[i] < nums2[j]){
            res.push(nums1[i])
            i += 1
        }else{
            res.push(nums2[j])
            j += 1
        }
    }
    res = res.concat(nums1.slice(i), nums2.slice(j))
    return (res[index[0]] + res[index[1]]) / 2
};

console.log(findMedianSortedArrays([1,1],[1,2]))