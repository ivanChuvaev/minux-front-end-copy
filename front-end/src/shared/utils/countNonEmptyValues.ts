export default function countNonEmptyValues<T>(objects: T[], key: keyof T) {
    const count: number = objects.reduce((acc, objects) => {
        const isСontains = objects[key];
        const isString = objects[key] === 'string';
        const isNull = objects[key] === null;

        if (isСontains && isString && !isNull) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      return count;
}