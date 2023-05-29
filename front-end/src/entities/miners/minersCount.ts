import { GpuDynamic } from "entities/gpu";

 export default function minersCount(gpusDynamic: GpuDynamic[]): number { 
  const minersCount = gpusDynamic.reduce((acc, gpu) => {
    if (gpu.miner && typeof gpu.miner === 'string' && gpu.miner === null) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return minersCount;
}