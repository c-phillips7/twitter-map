var trendsPlaceholder = [
   [
      {
      "trends": [
         {
            "name": "Yankees",
            "url": "http:\/\/twitter.com\/search?q=Yankees",
            "promoted_content": null,
            "query": "Yankees",
            "tweet_volume": 15799
         },
         {
            "name": "deGrom",
            "url": "http:\/\/twitter.com\/search?q=deGrom",
            "promoted_content": null,
            "query": "deGrom",
            "tweet_volume": null
         },
         {
            "name": "Kenosha",
            "url": "http:\/\/twitter.com\/search?q=Kenosha",
            "promoted_content": null,
            "query": "Kenosha",
            "tweet_volume": 163346
         },

      ],
      "as_of": "2021-11-16T20:53:14Z",
      "created_at": "2021-11-16T01:53:01Z",
      "locations": [{
         "name": "New York",
         "woeid": 2459115
      }]
   }],
   [{
      "trends": [{
            "name": "Thanksgiving",
            "url": "http:\/\/twitter.com\/search?q=Thanksgiving",
            "promoted_content": null,
            "query": "Thanksgiving",
            "tweet_volume": 150666
         },
         {
            "name": "Kenosha",
            "url": "http:\/\/twitter.com\/search?q=Kenosha",
            "promoted_content": null,
            "query": "Kenosha",
            "tweet_volume": 153107
         },
         {
            "name": "#IAAPAExpo",
            "url": "http:\/\/twitter.com\/search?q=%23IAAPAExpo",
            "promoted_content": null,
            "query": "%23IAAPAExpo",
            "tweet_volume": null
         },
      ],
      "as_of": "2021-11-16T21:03:05Z",
      "created_at": "2021-11-16T01:53:01Z",
      "locations": [{
         "name": "Miami",
         "woeid": 2450022
      }]
   }]
];

// const map 

// console.log(trendsPlaceholder);

// console.log(trendsPlaceholder[0]);

var stateEl = document.getElementsByClassName("state");
// console.log(stateEl);

$(".state").on('click', function handleClick () {
   
   var idCode = $(this).attr('id')

   getTwitterMapData(idCode);

   // Change css to show which have been clicked
   $(this).css('fill', 'red');
   
});

// code for GET request
var getTwitterMapData = async function (idCode) {
   var url = "https://api.twitter.com/1.1/trends/place.json?id=" + idCode;
   var response = await fetch(url, {
       headers: {
           "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAJGvVgEAAAAAvr%2BMhJK9GoRizhT2IoB4CUA33hQ%3DcVzgRYRpQnWphilbufXbtfKqMenK6qccgJWrBE8P0E5Ft8bxAm",
           "Accept": "application/json"
       }
   });

   
   Promise.resolve(response).then(function (response) {


      return response.json()
  }).then(function (data) {
    var mapJSON = JSON.stringify(data)

   
      // console.log(mapJSON);
   
   // Use data to populate modal to display data on click
      let cityName = data[0].locations[0].name
      let topTrend = data[0].trends[0].name
      let link = data[0].trends[0].url

     
      addHashtag = function (mapJSON) {
         // mapJSON not being passed, undefined in console
         // console.log(mapJSON);
      };
      addHashtag ();

      $("#modal-header-text").text("Top Trending!")
      $("#city-name").text("City: " + cityName)
      $("#top-trend").text("Trend: " + topTrend)
      $("#link").text(link)
      $("#link").attr("href", link);
      
      
      
      $(".modal").modal('show');

});}

   // Only some trends start with hashtages, add logic to check if starts with 

   

   



// function generateMapElementFromTrendsResponse(trendsPlaceholder) {

   // iterate over data

   // build itme element
   // append to container





   // $("path, circle").hover(function(e) {
//    $('#info-box').css('display','block');
//    $('#info-box').html($(this).data('info'));
//  });
 
//  $("path, circle").mouseleave(function(e) {
//    $('#info-box').css('display','none');
//  });
 
//  $(document).mousemove(function(e) {
//    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
//    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
//  }).mouseover();