function findMod(num, mod){
    return num % mod === 0
}

const findBuzz = [...Array(100)].map((_, i)=>{
      const num = i+1
      switch(true){
          case findMod(num, 15) : console.log("FizzBuzz") 
          case findMod(num, 5) : return console.log("Buzz")
          case findMod(num, 3) : return console.log("Fizz")
          default : console.log(num)
      }
}).join("\n")