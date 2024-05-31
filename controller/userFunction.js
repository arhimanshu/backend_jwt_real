const {v4:uuidv4}=require("uuid")
const User = require("../models/userSchema");
const {setUsers} = require("../service/auth");


const handleUserSignUp=async (req,res)=>{
  const  {name,password,email}= req.body;
   const users= await User.create({
        name,email,password}
      )
      console.log(users)
    //   function setUsers(user){
    //     payload={...user}                   ye kaam kiya hua h hmne setUsers m-
    //     jwt.sign(payload,secretkey)         reference k liye yhi paste kr diya
    // }
    const token =setUsers(users)
    const z =res.set('Authorization',`Bearer ${token}`)
    console.log(`handleusersignupTOKEN ${JSON.stringify(token)} and ${users}`)
    console.log(z.authorization.split(" ")[1])
    return res.redirect("/")
    
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



const handleUserLogin=async (req,res)=>{
  const  {password,email}= req.body;
    const users=await User.findOne({
        email,password})
if(!users)
return res.render("/login",{ error:"invalid user or psk"})


const token =setUsers(users)
// const z=res.set('Authorization',`Bearer ${token}`)
// res.cookie("uid",sessionId)
//ye sessiom id setUser and cookie m daali h becoz ,,jb login krenge tab user k sath 
//ek id set krdenge taki pta lge baad m ki user konsa h ye and cookie m isiliye daali taki 
//middleware use kr ske ie ki konse user ko kis cheez ka access h
console.log(`handleLOginuser${JSON.stringify(token)} and ${users}`)
      // console.log(z)
      res.header('Authorization', `Bearer ${token}`);
      res.cookie("uid",token)
      console.log(`userFunction res.cookie is ${token}`)
      const z=token.split(' ')[1]
      res.render("home")
      // res.status(200).json({ message: 'Login successful', z });
    // return res.json(token)
    // .redirect("/")
}
    
module.exports={handleUserSignUp,handleUserLogin}