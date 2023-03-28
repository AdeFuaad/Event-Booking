const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now },
  // Add any other fields you need for your application
});

// You can add instance methods or static methods to the schema if needed
// For example, a static method to fetch all comments for a specific post
CommentSchema.statics.findByPost = function (postId, callback) {
  return this.find({ post: postId }, callback);
};

module.exports = mongoose.model('Comment', CommentSchema);
