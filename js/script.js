var url = "https://cors-anywhere.herokuapp.com/corsdemo/https://api.twitter.com/1.1/trends/place.json?id=1";

var getTwitterData = async function(){
    var response = await fetch(url, {
        headers: {
        "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAAX7Yjlyjv%2FdDMdRnWD8mbimpbdik%3DC8CmtYdNt3mqULn0CPJ1fRRGFnqOYyPBEGWL07lJHDyrlHukBr",
        "Accept": "application/json"
    }

    }); 

    Promise.resolve(response).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        if (error){
            console.log(error);
        }
    });

}

getTwitterData();

// var xhr = new XMLHttpsRequest();
// xhr.open("GET", url);

// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAA8wHxH8demaHjZcCj3C0u0OV2vFU%3DmFDiUgXrLHx2RE6NilkjLDVnQPtEs3uOIJIB4GdryML1TVA9KA");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//     console.log(xhr.status);
//     console.log(xhr.responseText);
//    }};

// xhr.send(); 
