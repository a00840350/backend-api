import crypto from 'crypto'

export const getSalt = () => {
    const size = process.env.SALT_SIZE
    return crypto.randomBytes(5*size).toString('base64url').substring(0, size)
}

export const hash= (password, salt) => {
    const hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    return hash.digest('hex')
}