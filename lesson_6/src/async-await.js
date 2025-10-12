async function fetchData() {
    const response = await fetch('https://api.github.com/');
    if (!response.ok) throw new Error(`Failed to fetch data for ${response.url}; status: ${response.status}; ${response.statusText}`);
    const json = await response.json();
    return json;
}

const data = await fetchData();
returnData(data);

function returnData(data) {
    console.log('Github JSON: ', data);
}
