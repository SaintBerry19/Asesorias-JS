const myPromise = new Promise((succeed, fail) => {
  const condition = 0; // Example condition

  // evaluacion truthy, que no sea 0,nulo, o false
  if (condition) {
    succeed("Promise is fulfilled successfully!");
  } else {
    fail("Promise is rejected!");
  }
});

myPromise
  .then((value) => {
    console.log(value); // Logs "Promise is fulfilled successfully!" if condition is true
  })
  .catch((error) => {
    console.log(error); // Logs "Promise is rejected!" if condition is false
  })
  .finally(() => {
    console.log("This will run regardless of the promise state.");
  });

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        reject("Failed to fetch data.");
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData("https://api.example.com/data")
  .then((data) => {
    console.log("Data loaded successfully", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Otra forma de utilizar el .then es utilizar await que da una mejor legibilidad al codigo
// Example must be wrapped in an async function to use 'await'
async function example() {
  const myPromise = new Promise((succeed, fail) => {
    const condition = 0; // Example condition

    if (condition) {
      succeed("Promise is fulfilled successfully!");
    } else {
      fail("Promise is rejected!");
    }
  });

  let resultado;
  try {
    resultado = await myPromise;
    console.log(resultado); // This will not run due to the condition being false
  } catch (e) {
    console.log(e); // This will log "Promise is rejected!"
  } finally {
    console.log("Promise is cool!"); // Always logged
  }
}

example();

async function fetchData(url) {
  try {
    const response = await fetch(url); // Wait for the fetch to resolve.
    if (!response.ok) {
      throw new Error("Failed to fetch data."); // Throw an error if response is not OK.
    }
    const data = await response.json(); // Wait for the response to be converted to JSON.
    return data; // Return the JSON data.
  } catch (error) {
    // If an error occurs, rethrow it to be caught by the caller of fetchData.
    throw error;
  }
}

// Example usage:
async function loadData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log("Data loaded successfully", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

loadData();
