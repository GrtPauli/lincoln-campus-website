// import { BASE_API_URL } from "../constants";

// export class PSAService {
//   static async submitPSA(formData) {
//     try {
//       const res = await fetch(`${BASE_API_URL}/psa/add`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       console.log("Server response:", data);

//       if (!res.ok) {
//         throw new Error(
//           data.message || `Failed to submit PSA Report, Try Again!`
//         );
//       }

//       return data;
//     } catch (error) {
//       console.error("Failed to submit PSA:", error);
//       throw error;
//     }
//   }

//   static async getPSASubmissions() {
//     try {
//       const res = await fetch(`${BASE_API_URL}/psa/all`);
//       if (!res.ok) {
//         throw new Error(
//           `Failed to fetch PSA Report submissions: ${res.status}`
//         );
//       }
//       return await res.json();
//     } catch (error) {
//       console.error("Failed to fetch PSA submissions:", error);
//       throw error;
//     }
//   }
// }

import { BASE_API_URL } from "../constants";

export class PSAService {
  static async getPSASubmissions() {
    try {
      const res = await fetch(`${BASE_API_URL}/psa/all`);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch PSA Report submissions: ${res.status}`
        );
      }

      const json = await res.json();
      console.log("Fetched PSA data:", json);

      // ✅ Return the full json object, not just json.data
      return json;
    } catch (error) {
      console.error("Failed to fetch PSA submissions:", error);
      throw error;
    }
  }

  static async submitPSA(formData) {
    try {
      const res = await fetch(`${BASE_API_URL}/psa/add`, {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      console.log("PSA submission response:", json);

      if (!res.ok) {
        throw new Error(
          json.message || "Failed to submit PSA Report, Try Again!"
        );
      }

      return json;
    } catch (error) {
      console.error("Failed to submit PSA:", error);
      throw error;
    }
  }
}
