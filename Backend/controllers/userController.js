const Fellow = require('../models/Fellow');

const loginController = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        // Find user by email and password
        const user = await Fellow.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        
        res.status(200).json({
            success: true,
            user,
        });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during login',
            error: err.message || 'Unknown error',
        });
    }
};
const getFellow = async (req,res) =>{
    try{
      console.log("get-fellow");
      const {_id} = req.body;
      const fellow = await Fellow.findById({_id});
      console.log(fellow);
      res.status(200).json(fellow);
    }catch(err){
      console.error('Error during fetching students:', err);
        res.status(500).json({
          success: false,
          message: 'An error occurred during fetching students',
          error: err.message || 'Unknown error',
        });   // meri sister to kh rhi hai aisa kuch nhi hota girls really like it when they are 
    }
  }
const registerController = async (req, res) => {
    try {
        const { name, email, password , profilepic } = req.body;

        // Check if the email already exists
        const existingUser = await Fellow.findOne({ password });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already in use',
            });
        }

        // Create a new user
        const user = new Fellow({ name, email, password ,profilepic});
        await user.save();
        console.log(user);

        res.status(200).json({
            success: true,
            user,
        });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during registration',
            error: err.message || 'Unknown error',
        });
    }
};

module.exports = { loginController, registerController,getFellow };
