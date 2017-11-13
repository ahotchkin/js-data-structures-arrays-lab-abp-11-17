// Write your solution here!
{const drivers = ["Milo", "Otis", "Garfield"]
  function destructivelyAppendDriver(){
    drivers.push("Ralph")
  }
}

{const drivers = ["Milo", "Otis", "Garfield"]
  function destructivelyPrependDriver(){
    drivers.unshift("Bob")
  }
}

{const drivers = ["Milo", "Otis", "Garfield"]
  function destructivelyRemoveLastDriver(){
    drivers.pop()
  }
}

{const drivers = ["Milo", "Otis", "Garfield"]
  function destructivelyRemoveFirstDriver(){
    drivers.shift()
  }
}

{const drivers = ["Milo", "Otis", "Garfield"]
  function appendDriver(){
    drivers.slice(3, 0, "Broom")
  } 
}