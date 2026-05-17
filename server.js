require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve landing page assets from root
app.use(express.static('.'));

// Serve invoice generator from /invoice_generator/
app.use('/invoice_generator', express.static('invoice_generator'));

app.listen(PORT, () => {
    console.log(`ExportHub running at http://localhost:${PORT}`);
});