const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;
const ans = batteryBatches.reduce((acc, item) =>{
    totalBatteries += item
    return totalBatteries
},0);

