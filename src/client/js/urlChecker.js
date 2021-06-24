function checkForUrl(url) {
    console.log("::: Running checkForUrl :::", url);
    let urlnames = [
        "https://jestjs.io/",

    ]
    if(urlnames.includes(url)) {
        alert("Welcome, Captain!")
    }

    let checkurl = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return checkurl.test(url);

 
}

export { checkForUrl }
