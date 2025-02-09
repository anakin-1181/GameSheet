// This function runs on the server (Node.js environment) on Vercel
module.exports = async (req, res) => {
    try {
        const config = {
            API_KEY: process.env.GSHEET_API_KEY,
            SHEET_ID: process.env.GSHEET_ID
        }
        res.status(200).json(config);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
