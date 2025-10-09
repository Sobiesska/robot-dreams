function sendGitHubRequest(nonExistingResource, existingResource) {
    let response;
    try {
        response = sendRequest(nonExistingResource);
    } catch (error) {
        console.log(error.message);
        if (error.message.includes(`No resource response for ${nonExistingResource}. Please try again or contact support.`)) {
            response = sendNewRequest(existingResource);
        } else {
            throw error;
        }
    }

    console.log(response);
}

function sendRequest(resource) {
    throw new Error(`No resource response for ${resource}. Please try again or contact support.`);
}

function sendNewRequest(resource) {
    return {
        url: resource,
        result: 'success',
        status: 200
    };
}

sendGitHubRequest('https://api.githubbb.com/', 'https://api.github.com/');

