const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    profileImage: { type: String },
    walletAddress: { type: String },
    earnings: { type: Number, default: 0 },
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscriber' }]
}, { timestamps: true });

const Creator = mongoose.model('Creator', creatorSchema);

module.exports = Creator;