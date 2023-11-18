/* eslint-disable @typescript-eslint/no-explicit-any */
export function customSort(arr: any, target: any) {
  // Проверяем, есть ли целевой элемент в массиве
  console.log(arr);

  const index = arr.findIndex((item: { Id: any; }) => item.Id === target.Id);
  if (index === -1) {
    console.log("Целевой элемент не найден в массиве");
    return arr;
  }

  // Перемещаем целевой элемент на нулевую позицию
  arr.splice(index, 1);
  arr.unshift(target);

  return arr;
}
