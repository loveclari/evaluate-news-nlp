function checkForUrl(url) {
    let check = url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if (check === null){
        alert("Please enter a valid URL beginning with http:// or https://")
    } else {
    return true }

    // let checkurl = new RegExp(/^(http|https):\/\/[^ "]+$/);
    // return checkurl.test(url);

 
}

export { checkForUrl }
