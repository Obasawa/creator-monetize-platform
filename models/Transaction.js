const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    fanId: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    blockchainHash: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;