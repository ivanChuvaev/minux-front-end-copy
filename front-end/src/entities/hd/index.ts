import { hdDynamicReducer } from "./dynamic/hdDynamicSlice";
import { hdStaticReducer } from "./static/hdStaticSlice";

export const hdReducers = {
    hdDynamicReducer,
    hdStaticReducer
}

export { HdStatic } from "./static/types"
export { HdDynamic } from "./dynamic/types" 