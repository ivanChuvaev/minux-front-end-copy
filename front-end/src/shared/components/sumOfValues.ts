export default function sumOfValues<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  objects: T[], 
  key1: K1, 
  key2?: K2
): number {
  const count: number = objects.reduce((acc, object) => { 
    const valueWithK1 = object[key1] 
    const valueWithK2 = key2 && object[key1] && object[key1][key2] 
    const isNumberK1: boolean = !isNaN(Number(valueWithK1)) 
    const isNumberK2: boolean = !isNaN(Number(valueWithK2)) 

      if (isNumberK1) { 
        return acc + Number(valueWithK1); 
      } 
      if (isNumberK2) {
        return acc + Number(valueWithK2); 
      } 
      
      return acc;  
}, 0); 

  return count;
}
