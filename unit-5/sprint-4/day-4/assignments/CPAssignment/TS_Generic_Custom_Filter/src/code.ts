function Filter<Type>(
  arr: Type[],
  callback: (item: Type, index: number) => boolean
) {
  return arr.filter((item, index) => callback(item, index));
}
export default Filter;
