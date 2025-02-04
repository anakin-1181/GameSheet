// import {config} from "./config.js";

// Configuration for Google Sheets API
const API_KEY = config.API_KEY;
const InternalARsheetID = config.internalARsheetID;
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';


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
                discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                scope: SCOPE
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
                spreadsheetId: InternalARsheetID,
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
