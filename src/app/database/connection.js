import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'db_copa',
})

connection.connect()

/**
 * 
 * @param {string} sql Instruções sql a serem executadas
 * @param {string=id | [selecao, id]} value a serem passados para o sql
 * @param {string} messageReject mensagem a ser exibida
 * @returns Objeto Promise
 */

export const queries = (sql, value ='', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, value, (error, results) => {
            if (error) return reject(messageReject)
            const rows = JSON.parse(JSON.stringify(results))
            return resolve(rows)
        })
    })
}

export default connection