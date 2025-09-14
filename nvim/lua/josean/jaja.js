
const biba = {
name: "hello",
world: "world"
}

console.log(`Here is a : ${biba.name} and ${biba.world}`)
const are = ["hello", "world", "ziza"];
const reddue = are.reduce((acc, curr) => {
  return acc.concat(' ').concat(curr);
}, 'initial');

console.log(reddue)


