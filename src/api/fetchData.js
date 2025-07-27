function fetchData(url) {

    return new Promise(promiseResolve => {

        fetch(url)

            .then(response => {

                if (!response.ok) {

                    throw new Error(`Server responded with ${response.status} status code.`);

                }

                return response.json();

            })

            .then(data => {

                promiseResolve(data);

            })

            .catch(error => {

                console.error(error.message);

            });

    });

}



export default fetchData;