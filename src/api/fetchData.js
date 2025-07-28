function fetchData(url, dataSetter) {

    fetch(url)

        .then(response => {

            if (!response.ok) {

                throw new Error(`Server responded with ${response.status} status code.`);

            }

            return response.json();

        })

        .then(data => {

            dataSetter([...data]);

        })

        .catch(error => {

            console.error(error.message);

        });

}



export default fetchData;