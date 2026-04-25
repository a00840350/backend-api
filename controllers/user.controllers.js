    import User from '../models/user.model.js'
    
    export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}
    
    export const getUser = async (req, res) => {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    export const postUser = async (req, res) => {
        const { name, username, password } = req.body;
        const user = new User({name, username, password})
        await user.save()
        res.status(201).json(user)
    }
    export const putUser = async (req, res) => {
        const { name, username, password } = req.body
        const user = await User.findByIdAndUpdate(req.params.id, {name, username, password}, {new: true})
        res.status(200).json(user)
    }
    export const deleteUser = async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'User deleted', user})
    }