import { gpuDynamicReducer } from "./dynamic/gpuDynamicSlice";
import { gpuStaticReducer } from "./static/gpuStaticSlice";

export const gpuReducers = {
    gpuDynamicReducer,
    gpuStaticReducer
}

export { gpuDynamicAction } from "./dynamic/gpuDynamicSlice";
export { gpuStaticAction } from "./static/gpuStaticSlice";
export { GpuDynamic } from "./dynamic/types";
export { GpuStatic } from "./static/types"; 