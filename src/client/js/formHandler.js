let model = document.getElementById('model');
let score = document.getElementById('score');
const confidence = document.getElementById('confidence');
const subjectivity = document.getElementById('subjectivity');
const agreement = document.getElementById('agreement');


const handleSubmit = (event) => {
    event.preventDefault();

    // check what text was put into the form field
    let enteredUrl = document.getElementById('url').value;
    const data =  {enteredUrl};
    if (Client.checkForUrl(enteredUrl)) {
        console.log('::: Url entered :::');
        fetch('http://localhost:8081/languageprocess', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then(() => updateUI(response));
    } else {
        console.log("Error entered URL")

    }

    // const getData = async(url = '') => {
    //     const request = await fetch(url);
    //     console.log(request);
    //     try {
    //         const allData = await request.json();
    //         console.log(allData);
    //     } catch (error) {
    //         console.log('The API is getting an error', error);
    //     }
    // };

    const updateUI =  (response) => {
        try {
            model.innerHTML = `Model: ${response.model}`;
            score.innerHTML = `Score: ${response.score}`;
            confidence.innerHTML = `Confidence: ${response.confidence}%`;
            subjectivity.innerHTML = `Subjectivity: ${response.subjectivity}`;
            agreement.innerHTML = `Agreement: ${response.agreement}`;
        } catch (error) {
            console.log('error', error);
        }
    };




}

export { handleSubmit };