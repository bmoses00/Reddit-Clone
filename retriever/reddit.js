const snoowrap = require('snoowrap');
const shuffle = require('array-shuffle');
// const express = require('express');
// const app = express();
const lodash = require('lodash');
const { Post } = require('../server/models/Post.js');
const db = require('../server/db.js');
const sha1 = require('sha1');

(async () => {
    const connection = await db;
    await Post.deleteMany({});
    const subreddits = processSubreddits(['askmen']);
    const desiredProperties = getDesiredProperties();
    const posts = await getPosts(subreddits, desiredProperties, false);
    // for testing purposes and avoiding the ratelimit, only add comments to the first 4 posts
    for (let i = 0; i < 3; i++) {
        let comments = await posts[i].comments.fetchMore({amount: 20});
        posts[i].comments = deepPick(comments, ['ups', 'author', 'body', 'replies']);
    }
    await insertPosts(posts);
    connection.disconnect();

    // app.get('/', (req, res) => res.send(posts[0]));
    // app.listen(3000, () => console.log('Listening...'));
})();

function processSubreddits(subreddits) {
    const r = new snoowrap({
        userAgent: 'Agent',
        clientId: 'hIHjDbuurmmDQw',
        clientSecret: 'T4D2XYupX-ki6-YBhtR3NDlRgzsTlQ',
        refreshToken: '72337007647-MeCoSjT5K5XPaCzWdK-cMxXKi5odrA'
    });
    return subreddits.map((sub) => r.getSubreddit(sub));
};
function getDesiredProperties() {
    return [
        'subreddit',
        'selftext',
        'author',
        'title',
        'downs',
        'name',
        'quarantine',
        'upvote_ratio',
        'ups',
        'total_awards_received',
        'link_flair_text',
        'score',
        'is_created_from_ads_ui',
        'gildings',
        'pinned',
        'over_18',
        'all_awardings',
        'locked',
        'id',
        'author',
        'num_comments',
        'comments'
    ];
};
async function getPosts(subreddits, desiredProperties, production) {
    let postsToSend = [];
    for (const sub of subreddits) {
        const posts = await sub.getHot();
        for (let post of posts) {
            if (post['subreddit'] === undefined) continue;
            post['subreddit'] = post['subreddit']['display_name'];
            post['author'] = post['author']['name']
            postsToSend.push(lodash.pick(post, desiredProperties));
        }
    }
    if (production) return shuffle(postsToSend);
    else return postsToSend;
};
async function insertPosts(posts) {
    return Post.insertMany(posts);
};
function deepPick(comments, postProperties) {
    for (let i = 0; i < comments.length; i++) {
        comments[i] = lodash.pick(comments[i], postProperties);
        comments[i].author = comments[i].author.name;
        comments[i]._id = sha1(comments[i].body);
        if (comments[i].replies.length !== 0)
            deepPick(comments[i].replies, postProperties);
    }
    return comments;
}