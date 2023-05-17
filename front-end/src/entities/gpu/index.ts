import { gpuDynamicReducer } from "./dynamic/gpuDynamicSlice";
import { gpuStaticReducer } from "./static/gpuStaticSlice";

export const gpuReducers = {
    gpuDynamicReducer,
    gpuStaticReducer
}

export { GpuDynamic } from "./dynamic/types";
export { GpuStatic } from "./static/types"; 