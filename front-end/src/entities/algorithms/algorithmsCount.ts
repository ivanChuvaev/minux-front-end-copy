import { GpuDynamic } from "entities/gpu";

export default function algorithmCount(gpusDynamic: GpuDynamic[]) {
    const algorithmCount: number = gpusDynamic.reduce((acc, gpu) => {
        const isСontains = gpu.algorithm;
        const isString = typeof gpu.algorithm === 'string';
        const isNull = gpu.miner === null;

        if (isСontains && isString && !isNull) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      return algorithmCount;
}