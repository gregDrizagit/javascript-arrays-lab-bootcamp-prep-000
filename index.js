const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name)
{
  kittens.push(name);
  //expects : "Milo", "Otis", "Garfield", "Ralph"
}

function destructivelyPrependKitten(name)
{
  //expects: ["Bob", "Milo", "Otis", "Garfield"]
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  //expects ["Milo", "Otis"]
}


function destructivelyRemoveFirstKitten()
{
  kittens.shift(); 

}

function appendKitten(name)
{
  return [kittens][...name];
}

function prependKitten(name)
{

}

function removeLastKitten()
{

}

function removeFirstKitten()
{

}
