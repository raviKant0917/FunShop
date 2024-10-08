import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "A user must have a name"],
    },
    email: {
        type: String,
        // required: [true, "Please provide your email"],
        unique: true,
        lowecase: true,
        validate: [validator.isEmail, "Please Provide a valid email"],
    },
    photo: {
        default:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fuser-profile&psig=AOvVaw16it1Tkc_wE2iPhQWSIt0H&ust=1720787707223000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjH4_H_nocDFQAAAAAdAAAAABAE",
        type: String,
    },
    password: {
        type: String,
        // required: [true, "Please provide a password"],
        minlength: [8, "Your password must contain 8 characters"],
    },
    cart: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product",
                },
                quantity: Number,
            },
        ],
        default: [],
    },
    orders: {
        type: [
            {
                product: {
                    type: [mongoose.Schema.ObjectId],
                    ref: "Product",
                },
                order: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Order",
                },
            },
        ],
        default: [],
    },
});


const User = mongoose.model("User", userSchema);

export default User;
