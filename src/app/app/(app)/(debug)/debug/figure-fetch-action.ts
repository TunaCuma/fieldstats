export async function fetchJson({ url }: { url: string }): Promise<any> {
  try {
    // Fetch the data from the provided URL
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the JSON data
    return data;
  } catch (error) {
    // Log and rethrow the error
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error(`Unable to fetch data: ${error.message}`);
  }
}
