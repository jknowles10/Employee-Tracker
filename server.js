const inquirer = require('inquirer');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const pool = new Pool(
    {
        user: 'your_database_user',
        host: 'localhost',
        database: 'employeetracker_db',
        password: 'prince'
        
    },
console.log('Connected to the employeetracker_db database'))
    
pool.connect();



app.use((req, res) => {
        res.status(404).end();
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

