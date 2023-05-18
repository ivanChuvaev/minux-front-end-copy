import { cpuDynamicReducer } from "./dynamic/cpuDynamicSlice";
import { cpuStaticReducer } from "./static/cpuStaticSlice";

export const cpuReducers = {
    cpuDynamicReducer,
    cpuStaticReducer
}

export { cpuDynamicAction } from "./dynamic/cpuDynamicSlice";
export { cpuStaticAction } from "./static/cpuStaticSlice";
export { CpuDynamic } from "./dynamic/types"
export { CpuStatic } from "./static/types"