const app = require('../api/index');
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
