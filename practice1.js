(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        if (json.userId == 1) {
            json.completed == false;
        } else {
            json.completed == true;
        }
        console.log(json);
    } catch (error) {
        console.log(error);
    }
})();

