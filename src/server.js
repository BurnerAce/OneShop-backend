const app = require('../api/index');
const cors = require('cors');
const corsOptions = {
    origin: 'https://one-shop-burnerace.vercel.app',
    credentials: true
};
console.log("Reached");
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
