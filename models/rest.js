// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let restSchema = new Schema(
    {
        prodId: {
            type: String,
            unique: true,
            default: 0
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        },
        currency: {
            type: String,
            default: 0
        },
        inStock: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: ''
        },
        seller: {
            type: String,
            default: ''
        },

        created: {
            type: Date,
            default: Date.now
        }, 
        lastReviewed: {
            type: Date,
            default: Date.now
        },
        cart: {
            type: Boolean,
            default:false
        }
    }
)


mongoose.model('rest', restSchema);