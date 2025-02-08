import {config} from "./config.js";

// Configuration for Google Sheets API
const API_KEY = config.API_KEY;
const SHEET_ID = config.SHEET_ID;
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
            });

            this.isInitialized = true;
        } catch (error) {
            console.error('Error initializing Google Sheets API:', error);
            throw error;
        }
    }

    async readSheet(range) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        try {
            const response = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: range,
            });

            return response.result.values;
        } catch (error) {
            console.error(`range: ${range}`)
            console.error('Error reading spreadsheet:', error);
            throw error;
        }
    }
}

// Export SheetsAPI object to common.js to get data by getData()
export const sheets = new SheetsAPI();

