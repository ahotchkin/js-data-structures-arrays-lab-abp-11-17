// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(){
  return drivers.concat("Broom")
}

function prependDriver(){
  return drivers.concat(0, "Arnold")
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
