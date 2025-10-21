// phishnet-api.js
const API_URL = 'https://api.phish.net/v3/songs/harryhood'; // Phish.net API endpoint for Harry Hood statistics

/**
 * Fetches real-time Phish statistics from the Phish.net API.
 * @returns {Promise<Object>} A promise that resolves to an object containing the last performance date, location, and show gap.
 */
export async function fetchPhishData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract relevant data from the API response
        const lastPerformance = data.data[0]; // Assuming the first entry is the latest performance
        const lastHoodDate = lastPerformance.date; // Format: YYYY-MM-DD
        const lastHoodLocation = `${lastPerformance.venue}, ${lastPerformance.city}, ${lastPerformance.state}`;
        const showsSinceLastPerformance = lastPerformance.shows_since_last; // Number of shows since last performance
        const expectedRate = 4.7; // Average expected rate of performances

        return {
            lastHoodDate,
            lastHoodLocation,
            showsSinceLastPerformance,
            expectedRate
        };
    } catch (error) {
        console.error("Failed to fetch Phish data:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
}