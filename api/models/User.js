import mongoose,{Schema} from "mongoose";
const userSchema=new Schema(
    
    {
        name:String,
        email:String,
        password:String,
        

    }
)
const UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;