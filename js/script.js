var url = "https://api.twitter.com/1.1/trends/place.json?id=1";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAA8wHxH8demaHjZcCj3C0u0OV2vFU%3DmFDiUgXrLHx2RE6NilkjLDVnQPtEs3uOIJIB4GdryML1TVA9KA");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
   }};

   console.log(data);

// xhr.send(); 

// return this._http.get(`api/data`)
//   .map((response: Response) => {
//     var result = response.json();
//     console.log(result);
//     return result;
//    });