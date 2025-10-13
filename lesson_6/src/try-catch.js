function sendGitHubRequest(resource) {
    let response;
    try {
        response = fetch(resource);
        if (!response.ok) {
            throw new Error(`No resource response for ${resource}. Please try again or contact support.`);
        }
        return response.json();
    } catch (error) {
        console.log(error.message);
        if (error.message.includes('No resource response')) {
            response = sendRequest(resource);
        } else {
            throw error;
        }
    }

    console.log(response);
}

function sendRequest(resource) {
    return {
        url: resource,
        result: 'success',
        status: 200
    };
}

sendGitHubRequest('https://api.github.com/');

