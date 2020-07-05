const connection = require ('../database/connection')

module.exports = {
    async index(req, res) {
        const plan = await connection('plan').select('*')
        return res.json(plan)
    },

    async create(req, res) {
        const {tittle, price} = req.body
        await connection('plan').insert({
        tittle,
        price
    })
    return res.json({ tittle })
    },

    async remove(req, res) {
        const { id } = req.params
        const plan = await connection('plan')
            .where('id', id).delete()

        return res.status(204).send()
    }
}