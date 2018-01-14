const jwt = require('jsonwebtoken')

const isLogin = (req,res,next) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.json({success: false, message: 'Token Required'})
  }
  jwt.verify(token, process.env.KATASANDI, (err, decoded) => {
    if (err) {
      return res.json({success: false, message: 'Problem With Token'})
    } else {
      req.decoded = decoded
      req.userId = decoded.userId
      next()
    }
  })
}

module.exports = {
  isLogin
}
