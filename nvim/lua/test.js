const a = [1, 2, 4, 5]
const b = 'hello world'

function aloha(one, two){
  return ((one, two) => {
    return `here is ${a} and ${b}`
  })
}

console.log(aloha(a, b))

throw new Error('message', {
  details: 'here we go again'
})

