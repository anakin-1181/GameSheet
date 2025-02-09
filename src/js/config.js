async function fetchData() {
    try {
        const response = await fetch('/api/getData');
        if (!response.ok) {
            throw new Error('Network response error');
        }
        const data = await response.json();
        console.log('Received data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const config = {
    API_KEY: (await fetchData()).API_KEY,
    SHEET_ID: (await fetchData()).SHEET_ID
}