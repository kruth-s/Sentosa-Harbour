import { v2 as cloudinary } from 'cloudinary';
import Song from '../models/songModel.js';
import Cloudinary from '../config/cloudinary.js';
// import connectCloudinary from './src/config/cloudinary.js';
// connectCloudinary();


const addSong = async (req,res) => {
    try {
        // Removed redundant connectCloudinary call here
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        // console.log("Image File →", imageFile);
        // console.log("Audio File →", audioFile);

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`

        console.log(name, desc, album, audioUpload, imageUpload);
        

        const songData = new Song({
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        });
        
        await songData.save();

        res.status(201).json({success: true, message: "Song added successfully", song: songData});

    } catch (error) {
        console.error("Error adding song:", error);
        res.status(500).json({success: false, message: "Failed to add song"});
    }
}

const listSong = async (req,res) => {
    
}

export { addSong, listSong };