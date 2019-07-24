function Post(id, title) {
  this.id = id;
  this.title = title;
}

function Comment(id, Comment) {
  this.id = id;
  this.Comment = Comment;
}

function Like(id, like) {
  this.id = id;
  this.like = like;
}

var posts = [
  new Post(1, "first post"),
  new Post(2, "second post"),
  new Post(3, "third post")
];

var comments = { id: 1, Comment: "first post is now on" };

function postForComment(posts, comments) {
  return posts.find(function(post) {
    return post.id === comments.id;
  });
}

var z = [];
posts.forEach(function(post) {
  z.push(post.id);
});

console.log(z);
console.log(postForComment(posts, comments));
