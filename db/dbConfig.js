const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:@localhost:5432/StudentsDB';

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}