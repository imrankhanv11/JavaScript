// Map.groupBy
let arr = [1,2,3,4,5,6,7,8,9,10];
let gp = Map.groupBy(arr, (x=> x%2=== 0 ? 'even' : 'odd'));

console.log(gp);

// 