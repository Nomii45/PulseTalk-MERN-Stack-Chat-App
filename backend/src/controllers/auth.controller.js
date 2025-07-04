import { upsertStreamUser } from "../lib/stream.js"
import User from "../models/User.js"
import jwt from "jsonwebtoken"

// SIGNUP CONTROLLER
//we got email, password , name from user
export async function signup(req, res) {
    const { email, password, fullName } = req.body

    //some validation to check eveything is provided
    try {

        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }


        //if email is already existed
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists, please use a different one" })
        }

        //create a random avatar
        const idx = Math.floor(Math.random() * 100) + 1; // generate a number between 1 to 100
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        //create the user in MongoDB
        const newUser = await User.create({
            email,
            fullName,
            password,
            profilePic: randomAvatar,
        })

        // Create user in Stream
        try {
            await upsertStreamUser({
                id: newUser._id.toString(),
                name: newUser.fullName,
                image: newUser.profilePic || "",
            })
            console.log(`Stream user created for ${newUser.fullName}`);
        } catch (error) {
            console.log("Error creating Stream user : ", error.message);
        }

        //TODO : CREATE THE USER IN STREAM AS WELL
        //create a token for authentication
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })

        //add token into the response or set cookie
        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })
        //send response back to the user
        res.status(201).json({ success: true, user: newUser })
    } catch (error) {
        console.log("Error in signup controller", error);
        res.status(500).json({ message: "Internal server error" })

    }

}
//  LOGIN CONTROLLER
// Placeholder login route
export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ message: "Invalid email or password" })
        const isPasswordCorrect = await user.matchPassword(password)
        if (!isPasswordCorrect) return res.status(401).json({ message: "Invalid email or password" })

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })
        //add token into the response or set cookie
        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })
        res.status(200).json({ success: true, user })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}
// LOGOUT CONTROLLER
// Placeholder login route
export function logout(req, res) {
    res.clearCookie("token")
    res.status(200).json({ success: true, message: "Logout successful" })
}
