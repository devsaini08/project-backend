import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"





const registerUser = asyncHandler(async (req, res) => {

    // get user details from frontend
    const { fullName, email, username, password } = req.body;


    // chek the all details in correct format and not empty
    if (fullName === "") {
        throw new ApiError(404, "fullname is required")
    }
    if (email === "") {
        throw new ApiError(404, "email is required")
    }
    if (username === "") {
        throw new ApiError(404, "username is required")
    }
    if (password === "") {
        throw new ApiError(404, "password is required")
    }


    // chek if user already exists
    const existingUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (existingUser) {
        throw new ApiError(409, "user is already exist")
    }

    //chek the img in server (avtar and cover img)
    const avatarLocalPath = req.fles?.avatar[0]?.path
    const coverImgLocalPath = req.fles?.coverImg[0]?.path

    if (!avatarLocalPath) {
        throw new ApiError(404, "avtar is required")
    }


    //upload them on cloudinary chek avtar is uploded
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImg = await uploadOnCloudinary(coverImgLocalPath);

    if (!avatar) {
        throw new ApiError(404, "avtar is required")
    }


    //create a user obj and --create entry in db
    const user = User.create({
        fullName,
        avatar: avatar.url,
        coverImg: coverImg?.url || "",
        password,
        email,
        username: username.toLowerCase()
    })

    const createedUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createedUser) {
        throw new ApiError(500,"somthing went wrong while register user")
    }

    //remove pasword and refresh token filed from response



    //return res.


})

export { registerUser }

