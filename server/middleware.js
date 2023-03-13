import jwt from 'jsonwebtoken';

export const middlewareAuth = (req, res, next) => {
    try {
        const getToken = req.headers.authorization.split(' ')[1]
        
        console.log(getToken)
        // const verifiedToken = jwt.verify(token, process.env.SECRET_KEY)
        // const userId = verifiedToken.userId;
        // if (req.body.userId && req.body.userId !== userId) {
        //     throw 'Invalid user ID';
        // } 
        // else {
            next();
        // }
    } catch {
        res.status(401).json({
        msg: new Error('Invalid request!')
        });
    }
}