function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function displayData() {
    console.log("⏳ Fetching data...");
    const result = await getData(); // waits here
    console.log('just check');
    console.log(result); //Data received!
}

displayData();
console.log('another check');

// asynce
async function greet() {
    return "Hello"; // Automatically becomes: Promise.resolve("Hello")
}

greet().then(console.log); // Output: Hello


// await 

async function getValue() {
    let result = await Promise.resolve("Done!");
    console.log(result);
}


// with try() catch()
async function fetchData() {
    try {
        let data = await fetch("");
        let json = await data.json();
        console.log(json);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
