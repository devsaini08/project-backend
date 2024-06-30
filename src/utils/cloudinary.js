import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import dotenv from 'dotenv';
dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localPathFile) => {
    try {

        if (!localPathFile) return null

        //upload file on cluodinary
        const response = await cloudinary.uploader.upload(localPathFile, {
            resource_type: "auto"
        })
        //file upload success
        console.log("file uploaded on cloudinary", response.url)
        return response

    } catch (error) {
        fs.unlink(localPathFile) // for remove locally saved temporary file
        return null
    }
}

export {uploadOnCloudinary}
