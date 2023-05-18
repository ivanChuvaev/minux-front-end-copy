import { ramDynamicReducer } from "./dynamic/ramDynamicSlice";
import { ramStaticReducer } from "./static/ramStaticSlice";

export const ramReducers = {
    ramDynamicReducer,
    ramStaticReducer
}

export { ramDynamicAction } from "./dynamic/ramDynamicSlice";
export { ramStaticAction } from "./static/ramStaticSlice";
export { RamStatic } from "./static/types"
export { RamDynamic } from "./dynamic/types" 