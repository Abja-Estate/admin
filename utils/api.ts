// utils/api.ts

interface FetchResponse {
    statusCode: number;
    data?: any;
    error?: string;
  }
  
  export async function fetchAdminRequests(url: string): Promise<FetchResponse> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return { statusCode: response.status, data };
      } else {
        const errorText = await response.text();
        return { statusCode: response.status, error: errorText };
      }
    } catch (error) {
      console.error("Error fetching admin requests:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  }
  