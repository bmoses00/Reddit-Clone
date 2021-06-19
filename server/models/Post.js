const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    subreddit:                  { type: String,  required: true },
    selftext:                   { type: String,  required: false},
    author:                     { type: String,  required: true },
    title:                      { type: String,  required: true },
    downs:                      { type: Number,  required: true },
    name:                       { type: String,  required: true },
    quarantine:                 { type: Boolean, required: true },
    upvote_ratio:               { type: Number,  required: true },
    ups:                        { type: Number,  required: true },
    total_awards_received:      { type: Number,  required: true },
    link_flair_text:            { type: String,  required: false},
    score:                      { type: Number,  required: true },
    is_created_from_ads_ui:     { type: Boolean, required: true },
    gildings:      { type: Schema.Types.Mixed,   required: true },
    pinned:                     { type: Boolean, required: true },
    over_18:                    { type: Boolean, required: true },
    all_awardings: { type: Schema.Types.Mixed,   required: true },
    locked:                     { type: Boolean, required: true },
    id:                         { type: String,  required: true },
    num_comments:               { type: Number,  required: true },
    comments:      { type: Schema.Types.Mixed,   required: false}

});

module.exports.Post =  mongoose.model('Post', postSchema);
