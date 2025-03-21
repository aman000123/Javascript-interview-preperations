
// 1. Fetching Data from a Public API (Example: GitHub Users)
// Here’s how you can make an API call to fetch user details from GitHub:

async function fetchGitHubUser(username) {
    try {
        console.log("Fetching user data...");

        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
}

fetchGitHubUser("aman000123");
console.log("API request sent...");




async function fetchMultipleUsers() {
    try {
        const users = ["aman000123", "octocat", "torvalds", "mojombo"];

        console.log("Fetching multiple users...");

        const responses = await Promise.all(
            users.map(user => fetch(`https://api.github.com/users/${user}`).then(res => res.json()))
        );

        console.log("User data:", responses);
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
}

fetchMultipleUsers();
console.log("API request sent...");


// Why Use Promise.all()?
// Instead of waiting for each API call one by one, all requests are sent simultaneously.
// This makes it much faster than calling await multiple times in a loop.


// Why Do Results Still Appear One by One?
// Even though Promise.all() executes requests in parallel, the API server processes each request separately.

// Each request might take a different amount of time depending on network speed, server load, and caching.
// Even though all requests start at the same time, their responses might not arrive at the exact same time.
// The console.log(responses) prints the entire array at once, but your browser may display logs one by one as each API call completes.



// 🚀 Promise.all() makes multiple API requests in parallel, but the responses arrive at different times.The API server processes each request independently, which is why results appear one by one in the console.