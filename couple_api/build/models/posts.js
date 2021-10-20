"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: 'users' },
    caption: { type: String, required: false },
    photoPath: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
