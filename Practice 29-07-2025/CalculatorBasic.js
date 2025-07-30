import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Welcome to Calculator");
console.log("Type 'exit' to quit.\n");

let input = prompt("Enter starting number: ");
let current = Number(input);

if (isNaN(current)) {
    console.log("Invalid starting number. Exiting.");
} else {
    while (true) {
        let operator = prompt("Enter operator (+, -, *, /, % or exit): ");
        if (operator.toLowerCase() === 'exit') break;

        let nextInput = prompt("Enter next number: ");
        let next = Number(nextInput);

        if (isNaN(next)) {
            console.log("Invalid number. Try again.\n");
            continue;
        }

        switch (operator) {
            case '+':
                current += next;
                break;
            case '-':
                current -= next;
                break;
            case '*':
                current *= next;
                break;
            case '/':
                if (next === 0) {
                    console.log("Cannot divide by 0.");
                    continue;
                }
                current /= next;
                break;
            case '%':
                current %= next;
                break;
            default:
                console.log("Invalid operator. Use +, -, *, /, %, or exit.");
                continue;
        }

        console.log(`Result: ${current}\n`);
    }

    console.log(`Calculator exited. Final result: ${current}`);
}
