import { BASE_API_URL } from "../constants";

export class HomeService { 
    static async getNews() {
        const res = await fetch(`${BASE_API_URL}/news/display/batch/News/0/4`);
        return await res.json()
    }

    static async getEvents() {
        const res = await fetch(`${BASE_API_URL}/news/display/batch/Event/0/4`);
        return await res.json()
    }

    static async getSliders() {
        const res = await fetch(`${BASE_API_URL}/sliders/display/all`);
        return await res.json()
    }
}