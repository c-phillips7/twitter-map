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


// console.log(trendsPlaceholder);

// console.log(trendsPlaceholder[0]);

let 


var getTwitterMapData = async function (city, idCode) {
   var url = "https://api.twitter.com/1.1/trends/place.json?id=" + idCode;
   var response = await fetch(url, {
       headers: {
           "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAJGvVgEAAAAAvr%2BMhJK9GoRizhT2IoB4CUA33hQ%3DcVzgRYRpQnWphilbufXbtfKqMenK6qccgJWrBE8P0E5Ft8bxAm",
           "Accept": "application/json"
       }

// function generateMapElementFromTrendsResponse(trendsPlaceholder) {

   // iterate over data

   // build itme element
   // append to container

