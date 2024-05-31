

const { getUser } = require("../service/auth");

const restrictedToLoggedInUserOnly = (req, res, next) => {
     const userId = req.cookies.uid;
    //--> const token=req.headers.authorization.split(' ')[1]
     
        // return res.redirect("/user/login");
    

    const user = getUser(userId); // Assuming getUser is synchronous
//we are using getuser otherwise someone will just put any number by going in browser and putting a random number in cookie ,thats why we r verifying that there is a user present with that cookie
    if (!user) {

        res.redirect("/",404)
        // return res.redirect(",/user/login");
    }
    // console.log(`decode is ${decoded} and the re.user is ${req.user}`)
  
    req.user = user;
    next();
};

module.exports = restrictedToLoggedInUserOnly;
