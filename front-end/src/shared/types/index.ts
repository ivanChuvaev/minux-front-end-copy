import { useStateObj } from "@shared/lib";

export type TStateObj<T> = ReturnType<typeof useStateObj<T>>
