import { cpuDynamicReducer } from "./dynamic/cpuDynamicSlice";
import { cpuStaticReducer } from "./static/cpuStaticSlice";

export const cpuReducers = {
    cpuDynamicReducer,
    cpuStaticReducer
}

export { CpuDynamic } from "./dynamic/types"
export { CpuStatic } from "./static/types"