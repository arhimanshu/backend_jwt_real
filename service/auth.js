const jwt = require("jsonwebtoken")
const secretkey="ojefbfbifebifb"
function setUsers(user){
    payload={...user}

   return jwt.sign(payload,secretkey)
}

function getUser(token){
    if(!token){ return res.status(401).json({error:"unauthorized"})}
    try{
    const decoded= jwt.verify(token,secretkey)
    return decoded
    // req.user=decoded
    // console.log(`decode is ${decoded} and the re.user is ${req.user}`)
    //   next()
    }catch{(error)
    console.log(error)}
    res.status(401).json({error:"invalid token"})
}

module.exports={setUsers,getUser}