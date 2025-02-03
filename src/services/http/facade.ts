import { AlovaService } from "./alova"
import { HttpService } from "./types"

export class HttpFacade {
    static instance: HttpService
    static setLoading: (loading: boolean) => void

    static async getOne<T = any>(uri: string): Promise<T> {
        return await this.getInstance().getOne(uri)
    }

    static async getPaginate<P = any, T = any>(uri: string, params: P): Promise<T> {
        return await this.getInstance().getPaginate(uri, params)
    }

    private static getInstance(): HttpService {
        if (!this.instance) {
            const driver = process.env.REACT_APP_HTTP_DRIVER || 'alova'

            const handlers: Record<string, () => HttpService> = {
                'alova': () => new AlovaService(this.setLoading)
            }
    
            const handler = handlers[driver]
    
            if (!handler) throw new Error('http_driver_not_implemented')
    
            this.instance = handler()
        }

        return this.instance
    }
}