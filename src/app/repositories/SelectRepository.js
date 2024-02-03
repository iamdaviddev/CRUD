import { queries } from "../database/connection.js"  

class SelectRepository {

    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?;'
        return queries(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = 'SELECT * FROM selecoes;'
        return queries(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id =?;'
        return queries(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?;'
        return queries(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id =?;'
        return queries(sql, id, 'Não foi possível deletar!')
    }
}

export default new SelectRepository()