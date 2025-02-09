function fetchData() {
    return fetch('/api/getData')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(config => {
            console.log("from cjs, config: ", config)
            console.log("from cjs, config.API_KEY: ", config.API_KEY)
            console.log("from cjs, config: ", config.SHEET_ID)
            return config;
        })
}

const data = fetchData();

export const config = {
    API_KEY: data.API_KEY,
    SHEET_ID: data.SHEET_ID
}