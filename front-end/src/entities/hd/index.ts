import { hdDynamicReducer } from "./dynamic/hdDynamicSlice";
import { hdStaticReducer } from "./static/hdStaticSlice";

export const hdReducers = {
    hdDynamicReducer,
    hdStaticReducer
}

export { hdDynamicAction } from "./dynamic/hdDynamicSlice";
export { hdStaticAction } from "./static/hdStaticSlice";
export { HdStatic } from "./static/types"
export { HdDynamic } from "./dynamic/types" 