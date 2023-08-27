

// async and await usage in modern js

function answer() {
  return new Promise(() => {
    setTimeout(() => {
      console.log('Hello');
    }, 3000);
  })
}

async function asyncCall() {
  console.log('calling')
  const response = await answer();
  console.log(response);
  }

  asyncCall();