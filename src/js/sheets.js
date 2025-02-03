import {config} from "./config.js";

// Configuration for Google Sheets API
const API_KEY = config.API_KEY;
const InteralARsheetID = config.internalARsheetID;
const discoveryDocs = config.discoveryDocs;


class SheetsAPI {
    constructor() {
        this.isInitialized = false;
    }

    async initialize() {
        try {
            await new Promise((resolve, reject) => {
                gapi.load('client', {
                    callback: resolve,
                    onerror: reject
                });
            });

            await gapi.client.init({
                apiKey: API_KEY,
                discoveryDocs: discoveryDocs
            });

            this.isInitialized = true;
        } catch (error) {
            console.error('Error initializing Google Sheets API:', error);
            throw error;
        }
    }

    async readSheet() {
        if (!this.isInitialized) {
            await this.initialize();
        }

        try {
            const response = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: InteralARsheetID,
                range: "Ranking!A1:B10",
            });

            return response.result.values;
        } catch (error) {
            console.error('Error reading spreadsheet:', error);
            throw error;
        }
    }
}

export default SheetsAPI;
