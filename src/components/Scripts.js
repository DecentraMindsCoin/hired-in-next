// simple fromise if a == 2 success else reject

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

//  id resolve success use this to execute the callback
p.then((message) => {
  console.log('This is in the then' + message)
}).catch((message) => {
  console.log('This is in the catch' + message)
})


// another promise example that calls all promises 
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

// gte all 
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (result) => {
    console.log(result)
  }
)
