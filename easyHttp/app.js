
const http = new easyHTTP;

// get posts

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});


// create posts


// update post


// delete posts