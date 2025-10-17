import { BASE_API_URL } from "../constants";

export class PSAService {
  static async submitPSA(formData) {
    try {
      const res = await fetch(`${BASE_API_URL}/psa/all`, {
        method: 'POST',
        body: formData,  
      });

      if (!res.ok) {
        throw new Error(`Failed to submit PSA Report, Try Again!`);
      }

      return await res.json();
    } catch (error) {
      console.error('Failed to submit PSA:', error);
      throw error;
    }
  }

  static async getPSASubmissions() {
    try {
      const res = await fetch(`${BASE_API_URL}/psa/all`);
      if (!res.ok) {
        throw new Error(`Failed to fetch PSA Report submissions: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error('Failed to fetch PSA submissions:', error);
      throw error;
    }
  }
}