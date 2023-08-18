
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

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// create posts

const mypost = {
  title: " Custom post one",
  body: "this is custom post one created by post request"
};


http.post('https://jsonplaceholder.typicode.com/posts', mypost, function (err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});


// update post


// delete posts