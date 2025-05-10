function fizzBuzz (): number {
    let x = 1
    while (x <= 100) {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("fizzBuzz")
        }
        else if (x % 3 === 0) {
            console.log("FIZZ")

        }
        else if (x % 5 === 0 ) {
            console.log("BUZZ")
        } else {
            console.log(x)
        }
        x+=1
    }
    return x
}

function fizzBuzz2 (): void {
    for (let x = 1; x <= 100; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("fizzBuzz")
        }
        else if (x % 3 === 0) {
            console.log("FIZZ")
        }
        else if (x % 5 === 0 ) {
            console.log("BUZZ")
        } else {
            console.log(x)
        }
    }
}

function fizzBuzz3 (): void {
    for (let x = 1; x <= 100; x++) {
        let output: (string | number)  = ""
        
        if (x % 3 === 0) { output += "fizz"}
        if (x % 5 === 0) { output += "buzz"}
        
        if (output == "") {
            output = x;
        }
        console.log(output)
    }
}
console.log("fizzBuzz 1 activating")
fizzBuzz()
console.log("fizzBuzz 2 activating")
fizzBuzz2()
console.log("fizzBuzz 3 activating")
fizzBuzz3()
