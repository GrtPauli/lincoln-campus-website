import { BASE_API_URL } from "../constants";

export class GeneralService { 
    static async getRecognitions() {
        const res = await fetch(`${BASE_API_URL}/recognition/display/all`)
        return await res.json()
    }

    static async getTestimonials() {
        const res = await fetch(`${BASE_API_URL}/testimonial/display/all`)
        return await res.json()
    }

    static async getVideos() {
        const res = await fetch(`${BASE_API_URL}/videos/display/all`)
        return await res.json()
    }

    static async getAllNews() {
        const res = await fetch(`${BASE_API_URL}/news/display/News/all`);
        return await res.json()
    }

    static async getAllEvents() {
        const res = await fetch(`${BASE_API_URL}/news/display/Event/all`);
        return await res.json()
    }

    static async getShortNotice() {
        const res = await fetch(`${BASE_API_URL}/shortnotice/all`);
        return await res.json()
    }
}