async function fetchData() {
    const response = await fetch('https://api.github.com/');
    if (!response.ok) throw new Error(`Failed to fetch data for ${response.url}; status: ${response.status}; ${response.statusText}`);
    const json = await response.json();
    return json;
}

fetchData()
    .then((json) => {
        returnData(json);
        console.log('Github JSON: ', json);
    })
    .catch((error) => {
        console.error(error);
    });

function returnData() {}
