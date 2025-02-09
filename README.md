# GameSheet

A retro Game-Boy styled web interface that displays data from a Google Sheets backend.

## Preview
|                                               |                                               |
| --------------------------------------------- | --------------------------------------------- |
| ![GameBoy Interface 1](https://github.com/user-attachments/assets/a52e6b1c-57c6-43ad-a825-58353b274330) | ![GameBoy Interface 2](https://github.com/user-attachments/assets/eb70ed95-4f3e-4fb7-8016-aed1cd14016a) |


## Features

- 🎮 Retro Game Boy-inspired UI design
- 📊 Real-time leaderboard with sorting functionality
- 📱 Responsive navigation system
- 🔄 Loading animations
- 📈 Google Sheets integration for dynamic data

## Technical Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Google Sheets API
- **Dependencies**: Google API Client Library (gapi)

## Setup

1. Set up environment variables for your Google Sheets API credentials:

   - Create a `.env` file in your project root
   - Add the following variables:

   ```
   GSHEET_API_KEY=your-api-key
   GSHEET_ID=your-sheet-id
   ```

   - Make sure to add `.env` to your `.gitignore` file

2. The server endpoint will automatically use these environment variables to provide the configuration to the frontend securely.

3. Host the files on a web server or use a local development

## Design Credit
- Design: Zoe Ma @UCLPASS 
- Drawings: Alyssa Wong @UCLPASS, Arielle Kwok @UCLPASS
