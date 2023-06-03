export default function countNonEmptyValues<T>(objects: T[], key: keyof T) {
    const count: number = objects.reduce((acc, object) => {
        const isСontains = object[key];
        const isString = object[key] === 'string';
        const isNull = object[key] === null;

        if (isСontains && isString && !isNull) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      return count;
}