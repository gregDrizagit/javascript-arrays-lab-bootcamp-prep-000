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
  //expects ["Milo", "Otis"]
}


function destructivelyRemoveFirstKitten()
{


}

function appendKitten(name)
{

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
