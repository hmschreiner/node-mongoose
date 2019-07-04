import UserModel from '../models/users'

const userRoute = (app) => {
    
    app.route('/users/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const users = await UserModel.find(query)
                res.send({ users })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find user' })
            }
        })
        .post(async (req, res) => {

            try {
                const user = new UserModel(req.body)
                await user.save()

                res.status(201).send('OK')
            } catch (error) {
                res.send(error)   
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatedUser)

                if (updatedUser) {
                    return res.status(200).send('OK')
                }


                res.status(400).send({ error: 'Could not update the user' })

                
            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {

            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const deletedUser = await UserModel.deleteOne({ _id: id })

                if (deletedUser.deletedCount) {
                    return res.send('OK')
                }

                res.status(400).send({ error: 'Could not delete the user' })

            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = userRoute