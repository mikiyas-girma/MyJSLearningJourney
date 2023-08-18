
const http = new easyHTTP;

// get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// get a single post

http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});


// create posts


// update post


// delete posts