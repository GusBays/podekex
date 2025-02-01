export interface HttpService {
    getOne<T = any>(uri: string): Promise<T>
    getPaginate<P = any, T = any>(uri: string, params: P): Promise<T>
}