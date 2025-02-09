function fetchData() {
    return fetch('/api/getData')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(config => {
            console.log('Received data:', config);
            console.log("Data fetched")
            return config;
        })
}

export const config = {
    API_KEY: fetchData().API_KEY,
    SHEET_ID: fetchData().SHEET_ID
}