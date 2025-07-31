import { v2 as cloudinary } from 'cloudinary';
import Song from '../models/songModel.js';
import Cloudinary from '../config/cloudinary.js';
import songModel from '../models/songModel.js';
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

        // console.log(name, desc, album, audioUpload, imageUpload);
        

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
    try {
        
        const allSongs = await songModel.find({});
        res.status(200).json({success: true, songs: allSongs});

    } catch (error) {

        console.error("Error listing songs:", error);
        res.status(500).json({success: false, message: "Failed to retrieve songs"});
        
    }
    
}

const removeSong = async (req, res) => {
    try {
        console.log("req.body", req.body); // Add this line to confirm

        const { id } = req.body;
        const song = await songModel.findByIdAndDelete(id);

        if (!song) {
            return res.status(404).json({ success: false, message: "Song not found" });
        }

        res.status(200).json({ success: true, message: "Song removed successfully" });
    } catch (error) {
        console.error("Error removing song:", error);
        res.status(500).json({ success: false, message: "Failed to remove song" });
    }
};



export { addSong, listSong, removeSong };   