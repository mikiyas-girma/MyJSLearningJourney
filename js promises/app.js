
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];


// Utilizing js promises

function createPost(post) {

  return new Promise(function(resolve, reject) {
    
    setTimeout(function() {
      posts.push(post);
      //incase if error occured 
      const error = false;
      if(!error) {
        resolve();
      } else {
        reject('something went wrong');
      }

      
    }, 2000);
  });


}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err) {
  document.body.innerHTML = err;
});