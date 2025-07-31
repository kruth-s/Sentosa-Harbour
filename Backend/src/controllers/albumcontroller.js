import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {
    try {
        const { name, desc, bgColour } = req.body;
        const imageFile = req.file;  // since multer uses .single()

        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        };

        const album = new albumModel(albumData);
        await album.save();

        res.status(201).json({ success: true, message: "Album added successfully", album });

    } catch (error) {
        console.error("Error adding album:", error);
        res.status(500).json({ success: false, message: "Failed to add album", error: error.message });
    }
};


const listAlbum = async (req, res) => {
    try {
        const allAlbums = await albumModel.find({});
        console.log("Albums retrieved:", allAlbums); // optional debug log
        res.status(200).json({ success: true, albums: allAlbums });
    } catch (error) {
        console.error("Error retrieving albums:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve albums", error: error.message });
    }
};


const removeAlbum = async (req, res) => {
    try {
        const { albumId } = req.body;

        if (!albumId) {
            return res.status(400).json({
                success: false,
                message: "Album ID is required"
            });
        }

        const deletedAlbum = await albumModel.findByIdAndDelete(albumId);

        if (!deletedAlbum) {
            return res.status(404).json({
                success: false,
                message: "Album not found"
            });
        }

        console.log("Deleted album:", deletedAlbum);

        res.status(200).json({
            success: true,
            message: "Album removed successfully",
            album: deletedAlbum
        });

    } catch (error) {
        console.error("Error removing album:", error);
        res.status(500).json({
            success: false,
            message: "Failed to remove album",
            error: error.message
        });
    }
};


export { addAlbum, listAlbum, removeAlbum };