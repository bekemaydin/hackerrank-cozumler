// burada kopya cektim. Cozum yolunu hala anlamaya calisiyorum.
// kendi kodlarim asagida

function getSecondLargest(nums) {
    // my codes
    //nums = [2,3,6,6,5];
    //let orderedNums = nums.sort();
    //console.log(orderedNums);
    //let numsmax = Math.max(orderedNums)
    //let numsmax1 = numsmax.splice();
    //console.log(Math.max(numsmax1));
    let first = nums[0]; let second = -1;
    for (let i = 0; i < nums.length; i++) {


    if (nums[i] > first) {
        second = first;
        first = nums[i]
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
    }
}