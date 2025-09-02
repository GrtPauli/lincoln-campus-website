import { BASE_API_URL } from "../constants";

export class ProgrammesService { 
    static async getProgrammes() {
        const res = await fetch(`${BASE_API_URL}/programs/display/all`)

        return await res.json()
    }

    static async getProgramme(code) {
        const res = await fetch(`${BASE_API_URL}/program/display/one/${code}`)

        return await res.json()
    }
}