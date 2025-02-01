import { Alova, AlovaGenerics, createAlova } from "alova";
import adapterFetch from 'alova/fetch'
import { HttpService } from "./types";

export class AlovaService implements HttpService {
    private alova: Alova<AlovaGenerics>

    constructor() {
        this.alova = createAlova({
            requestAdapter: adapterFetch()
        })
    }

    async getOne<T = any>(uri: string): Promise<T> {
        const response = await this.alova.Get<Response>(uri)
        return await response.json()
    }

    async getPaginate<P = any, T = any>(uri: string, params?: P): Promise<T> {
        const response = await this.alova.Get<Response>(uri, { params })
        return await response.json()
    }
}

const api = createAlova({ baseURL: process.env.REACT_APP_POKE_API_BASE_URL, requestAdapter: adapterFetch() });
export default api