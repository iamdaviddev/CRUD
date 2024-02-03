import SelectRepository from "../repositories/SelectRepository.js"

class SelectController {

    async index(req, res){
        const rows = await SelectRepository.findAll()
        res.json(rows)
    }

    async show(req, res){
        const id = req.params.id
        const rows = await SelectRepository.findById(id)
        res.json(rows)
    }

    async create(req, res){
        const selecao = req.body
        const rows = await SelectRepository.create(selecao)
        res.json(rows)
    }

    async update(req, res){
        const id = req.params.id
        const selecao = req.body
        const rows = await SelectRepository.update(selecao, id)
        res.json(rows)
    }

    async delete(req, res){
        const id = req.params.id
        const rows = await SelectRepository.delete(id)
        res.json(rows)
    }

}

export default new SelectController()