import { ramDynamicReducer } from "./dynamic/ramDynamicSlice";
import { ramStaticReducer } from "./static/ramStaticSlice";

export const ramReducers = {
    ramDynamicReducer,
    ramStaticReducer
}

export { RamStatic } from "./static/types"
export { RamDynamic } from "./dynamic/types" 