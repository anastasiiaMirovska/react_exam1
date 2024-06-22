import {AxiosResponse} from "axios";

export type RespType<T> = Promise<AxiosResponse<T>>

