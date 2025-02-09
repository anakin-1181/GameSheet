function fetchData() {
    return fetch('/api/getData')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(config => {
            return config;
        })
}

export const config = {
    API_KEY: await fetchData().API_KEY,
    SHEET_ID: await fetchData().SHEET_ID
}