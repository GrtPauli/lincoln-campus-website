import { BASE_API_URL } from "../constants";

export class AboutUsService { 
    static async getAboutUs() {
        return fetch(`${BASE_API_URL}/about_lincoln/display/all`);
    }
}