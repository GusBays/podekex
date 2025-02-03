import { Alova, AlovaGenerics, createAlova } from "alova";
import adapterFetch from 'alova/fetch'
import { HttpService } from "./types";

export class AlovaService implements HttpService {
    private alova: Alova<AlovaGenerics>

    constructor(private setLoading: (loading: boolean) => void) {
        this.alova = createAlova({
            requestAdapter: adapterFetch(),
            beforeRequest: () => this.setLoading(true)
            ,
            responded: {
                onComplete: () => this.setLoading(false),
                onSuccess: async (response) => await response.json()
            }
        })
    }

    async getOne<T = any>(uri: string): Promise<T> {
        return await this.alova.Get<T>(uri)
    }

    async getPaginate<P = any, T = any>(uri: string, params?: P): Promise<T> {
        return await this.alova.Get<T>(uri, { params })
    }
}

const api = createAlova({ baseURL: process.env.REACT_APP_POKE_API_BASE_URL, requestAdapter: adapterFetch() });
export default api