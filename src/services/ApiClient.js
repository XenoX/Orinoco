export default class ApiClient {
    static async get(uri) {
        try {
            const response = await fetch(`${process.env.API_ENDPOINT}/${uri}`);
            if (response.status !== 200) {
                console.error('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            return await response.json();
        } catch (err) {
            console.error('Fetch Error :-S', err);
            return;
        }
    }

    static async post(uri, data) {
        try {
            const response = await fetch(`${process.env.API_ENDPOINT}/${uri}`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status !== 201) {
                console.error('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            return await response.json();
        } catch (err) {
            console.error('Fetch Error :-S', err);
            return;
        }
    }
}