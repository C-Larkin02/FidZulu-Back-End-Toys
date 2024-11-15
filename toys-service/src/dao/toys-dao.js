const oracle = require('oracledb');

class ToysDao {
    async fetchToysFromDB() {
        let connection;

        try {
            connection = await oracle.getConnection({
                user: '',
                password: '',
                connectString: ''
            });

            console.log('Connection established');
            const result = await connection.execute('SELECT * FROM Toys');
            console.log('Query executed, result:', result);
            return result.rows.map(row => ({
                id: row[0],
                name: row[1],
                brand: row[2],
                age_group: row[3],
                price: row[4]
            }));
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}

module.exports = ToysDao;