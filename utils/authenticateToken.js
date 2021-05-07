const jwt = require('jsonwebtoken')

module.exports = {
    authenticateToken: (req, res, next) => {
        const apptoken = process.env.JWT || 'randomsecretkey'
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        if (token == null) return res.sendStatus(401)
        
        jwt.verify(token, apptoken, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    },
    generateAccessToken: (username) => {
        const apptoken = process.env.JWT || 'randomsecretkey'
        return jwt.sign({username: username}, apptoken, { expiresIn: '1800s' });
    }
};
 