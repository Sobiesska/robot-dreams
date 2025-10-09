function fetchData() {
    return fetch('https://api.github.com/').then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch data for ${response.url}; status: ${response.status}; ${response.statusText}`);
        return response.json();
    });
}

function processJson(json) {
    console.log('Github JSON:', json);
    return json;
}

fetchData()
    .then((json) => {
        return processJson(json);
    })
    .catch((error) => {
        console.error(error);
    });
