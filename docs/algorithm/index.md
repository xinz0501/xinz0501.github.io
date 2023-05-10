# 算法

## 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。  

输入：nums = [2,7,11,15], target = 9  

输出：[0,1]  

我的解法  

两个for循环  

官方解法
```js{4}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0;i < nums.length;i++) {
        let curNum = nums[i]
        let preNum = target - curNum
        if (obj[preNum] != null) {
            return [obj[preNum], i]
        } else {
            obj[curNum] = i
        }
    }
};
```
## 字母异位词分组
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。  

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]  

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]  

我的解法  

没写出来  

官方解法
```js{4}
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};
```
## 最长连续序列
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。  

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。  

输入：nums = [100,4,200,1,3,2]  

输出：4  

解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。 

我的解法
```js{4}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let sortNums = [...new Set(nums)].sort((a, b) => a - b)
    let count = 0
    let maxLength = 0
    for(let i = 0;i < sortNums.length;i++) {
        if(sortNums[i] + 1 !== sortNums[i + 1]) {
            maxLength = Math.max(maxLength, count + 1)
            count = 0
        } else {
            count++
        }
    }
    return maxLength
};
```
官方解法
```js{4}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0
    let set = new Set()
    for (let i of nums) {
        set.add(i)
    }
    for (let i of set) {
        if (!set.has(i - 1)) {
            let currentLongest = 1
            let current = i
            while (set.has(current+1)) {
                currentLongest++
                current++
            }
            longest = Math.max(currentLongest, longest)
        }
    }
    return longest
};
```
## 测试提交