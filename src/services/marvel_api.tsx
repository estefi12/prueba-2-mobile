import axios, {AxiosResponse} from "axios";

const API_KEY = "fc384ecc2ce139116fa185d094cd8cdb"
const API_URL = "https://gateway.marvel.com"

export const characters = async (): Promise<AxiosResponse> => {
    const query: string = `/v1/public/characters?apikey=${API_KEY}`
    return await axios.get(API_URL.concat(query))
}

export const series = async (): Promise<AxiosResponse> => {
    const query: string = `/v1/public/series?apikey=${API_KEY}`
    return await axios.get(API_URL.concat(query))
}

export const characterComics = async (characterId: number): Promise<AxiosResponse> => {
    const query: string = `/v1/public/characters/${characterId}/comics?apikey=${API_KEY}`
    return await axios.get(API_URL.concat(query))
}