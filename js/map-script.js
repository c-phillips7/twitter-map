// Code from https://github.com/Rob--W/cors-anywhere/ to solve CORS error (used in fetch request)
(function() {
   var cors_api_host = 'cors-anywhere.herokuapp.com';
   var cors_api_url = 'https://' + cors_api_host + '/';
   var slice = [].slice;
   var origin = window.location.protocol + '//' + window.location.host;
   var open = XMLHttpRequest.prototype.open;
   XMLHttpRequest.prototype.open = function() {
       var args = slice.call(arguments);
       var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
       if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
           targetOrigin[1] !== cors_api_host) {
           args[1] = cors_api_url + args[1];
       }
       return open.apply(this, args);
   };
})();



var stateEl = document.getElementsByClassName("state");

// console.log(stateEl);

// on click, run GET request for state, then once finished, use data to display info via modal
$(".state").on('click', async function handleClick() {

   var idCode = $(this).attr('id')

   console.log("testing function", await getTwitterMapData(idCode));

   await getTwitterMapData(idCode).then(function (mapJSON) {
      // console.log("Fetch initiated");
      displayResults(mapJSON)
   });


   // Change css to show which have been clicked
   $(this).css('fill', 'red');
});

// code for GET request
var getTwitterMapData = async function (idCode) {
   var url = "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=" + idCode;
   var response = await fetch(url, {
      headers: {
         "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAJGvVgEAAAAAvr%2BMhJK9GoRizhT2IoB4CUA33hQ%3DcVzgRYRpQnWphilbufXbtfKqMenK6qccgJWrBE8P0E5Ft8bxAm",
         "Accept": "application/json"
      }
   });


   return Promise.resolve(response).then(function (response) {
      if (!response.ok) {
         console.log("no response, display error");

         // // update text of modal to display error
         $("#modal-header-text").text("No Trends Available")
         $("#city-name").text("No data availble from Twitter for this state")
         $("#top-trend").text(" ")
         $("#link").text(" ")
         $("#link").attr(" ");

         // // display modal with updated text
         $(".modal").modal('show');

         return
      }
      console.log("200, good response");
      return response.json()
   })
};

// Function to display modal with data from GET request
function displayResults(mapJSON) {
   // console.log("displayResults", mapJSON);
   let cityName = mapJSON[0].locations[0].name
   let topTrend = mapJSON[0].trends[0].name
   let link = mapJSON[0].trends[0].url


   // Maybe add hashtag to trend to make it look better
   // char at index 0 if it = # then return 


   // update text of modal to clicked state
   $("#modal-header-text").text("Top Trending!")
   $("#city-name").text("City: " + cityName)
   $("#top-trend").text("Trend: " + topTrend)
   $("#link").text(link)
   $("#link").attr("href", link);

   // display modal with updated text
   $(".modal").modal('show');
};