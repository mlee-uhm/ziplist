const list1: string[] = ['a', 'b', 'c'];
const list2: number[] = [1, 2, 3];

function zipList(data1: string[], data2: number[]): (string | number)[] {
  const anyArr: (string | number)[] = [];
  for (let i = 0; i < data1.length; i++) {
    anyArr.push(data1[i]);
    anyArr.push(data2[i]);
  }
  return anyArr;
}
console.log(zipList(list1, list2));

function zipListTheFunctionalWay(data1: string[], data2: number[]): (string | number)[] {
  return data1.reduce((acc: (string | number)[], item, index) => {
    acc.push(item);
    acc.push(data2[index]);
    return acc;
  }, []);
}
console.log(zipListTheFunctionalWay(list1, list2));
