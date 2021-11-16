// var cityObjects = [{
//     name: "Albuquerque",
//     code: "2352824"
// },
// {
//     name: "Atlanta",
//     code: "2357024"
// },
// {
//     name: "Austin",
//     code: "2357536"
// },
// {
//     name: "Baltimore",
//     code: "22358820"
// },
// ]
// const selectMenu = $('#city-select')

// //Create an element with display name and value = code
// for (let i = 0; i < cityObjects.length; i++) {

//     const optionItem = $('<option>').attr('value', cityObjects[i].code).text(cityObjects[i].name)

//     selectMenu.append(optionItem)
// }

// selectMenu.on('change', function () {
//     const cityName = $("#city-select option:selected").text()
//     const code = this.value

//     console.log('city', cityName)
//     console.log(this.value)
//     getTwitterData(cityName, code)

// })


// var getTwitterData = async function (city, code) {
//     var url = "https://api.twitter.com/1.1/trends/place.json?id=" + code;
//     var response = await fetch(url, {
//         headers: {
//             "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAAbefMCya8TAn%2FFqsCu1x%2F%2Fwn5zqk%3DZqyvGwPneBRzfIYnZz3fNMMjxMobWKHZjkbmlJVq63q6kwZjLE",
//             "Accept": "application/json"
//         }

//     });

//     Promise.resolve(response).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log(data);


//         var cityData = {name: city, trends: []}
//         for (var i = 0; i < 10; i++) {
//             cityData.trends.push(data[0].trends[i].name)
//         }
//         console.log('city data', cityData)
//         localStorage.setItem('Points of Interest', JSON.stringify(cityData))

//     }).catch(function (error) {
//         if (error) {
//         }
//     });

// }
