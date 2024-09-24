var list1 = ['a', 'b', 'c'];
var list2 = [1, 2, 3];
function zipList(data1, data2) {
    var anyArr = [];
    for (var i = 0; i < data1.length; i++) {
        anyArr.push(data1[i]);
        anyArr.push(data2[i]);
    }
    return anyArr;
}
console.log(zipList(list1, list2));
function zipListTheFunctionalWay(data1, data2) {
    return data1.reduce(function (acc, item, index) {
        acc.push(item);
        acc.push(data2[index]);
        return acc;
    }, []);
}
console.log(zipListTheFunctionalWay(list1, list2));
