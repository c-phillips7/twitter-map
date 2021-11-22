
var trendsDiv = document.querySelector(".trends-div")


// lines 4-16 are just test data to see if func will run properly
// let testTrend = []
// testTrend.push({
//     name: "#atrend"
// })
// testTrend.push({
//     name: "#another-trend"
// })
// testTrend.push({
//     name: "#one-more-trend"
// })
// localStorage.setItem("trend", JSON.stringify(testTrend))
// var myTrend = JSON.parse(localStorage.getItem('trend'))
// console.log(myTrend)


// function to generate li for each trend
generateTrendingList = (trends) => {
    var trendsUl = document.createElement("ul")
    trendsUl.classList= ("trends-ul")
    trendsDiv.append(trendsUl)
    

    //  pull #s from locally stored data
    for (var i = 0; i<trends.length; i++) {
        var trendItem= document.createElement("li")
        trendItem.classList= ("trend-item")
        trendItem.textContent = (trends[i].name)
        trendsUl.append(trendItem)
    }
}
// commented out cities because they are from the same state already listed
var cityObjects = [{
        name: "Alabama",
        code: "2364559"
    },
    {
        name: "Arizona",
        code: "2449808"
    },
    {
        name: "California",
        code: "2442047"
    },
    {
        name: "Colorado",
        code: "2383489"
    },
    {
        name: "Connecticut",
        code: "2458410"
    },
    {
        name: "Florida",
        code: "2428344"
    },
    {
        name: "Georgia",
        code: "2357024"
    },
    {
        name: "Hawaii",
        code: "2423945"
    },
    {
        name: "Illinois",
        code: "2379574"
    },
    {
        name: "Indiana",
        code: "2427032"
    },
    {
        name: "Louisiana",
        code: "2359991"
    },
    {
        name: "Kentucky",
        code: "2442327"
    },
    {
        name: "Maryland",
        code: "22358820"
    },
    {
        name: "Massachusetts",
        code: "2367105"
    },
    {
        name: "Michigan",
        code: "2391585"
    },
    {
        name: "Minnesota",
        code: "2452078"
    },
    {
        name: "Mississippi",
        code: "2428184"
    },
    {
        name: "Missouri",
        code: "2430683"
    },
    {
        name: "Nebraska",
        code: "2465512"
    },
    {
        name: "New Mexico",
        code: "2352824"
    },
    {
        name: "New York",
        code: "2459115"
    },
    {
        name: "Nevada",
        code: "2436704"
    },
    {
        name: "North Carolina",
        code: "2378426"
    },
    {
        name: "Ohio",
        code: "2380358"
    },
    {
        name: "Oklahoma",
        code: "2464592"
    },
    {
        name: "Oregon",
        code: "2475687"
    },
    {
        name: "Pennsylvania",
        code: "2418046"
    },
    {
        name: "Rhode Island",
        code: "2477058"
    },
    {
        name: "Tennessee",
        code: "2449323"
    },
    {
        name: "Texas",
        code: "2357536"
    },
    {
        name: "Utah",
        code: "2487610"
    },
    {
        name: "Virginia",
        code: "2460389"
    },
    {
        name: "Washington State",
        code: "2490383"
    },
    {
        name: "Wisconsin",
        code: "2451822"
    }
// {
//     name: "Cleveland",
//     code: "2381475"
// },
// {
//     name: "Columbus",
//     code: "2383660"
// },
// {
//     name: "Dallas-Ft. Worth",
//     code: "2388929"
// },
// {
//     name: "Denver",
//     code: "2391279"
// },
// {
//     name: "Greensboro",
//     code: "2414469"
// },
// {
//     name: "Houston",
//     code: "2424766"
// },
// {
//     name: "Long Beach",
//     code: "2441472"
// },
// {
//     name: "Miami",
//     code: "2450022"
// },
// {
//     name: "Nashville",
//     code: "2457170"
// },
// {
//     name: "New Orleans",
//     code: "2458833"
// },
// {
//     name: "Orlando",
//     code: "2466256"
// },
// {
//     name: "Philadelphia",
//     code: "2471217"
// },
// {
//     name: "Phoenix",
//     code: "2471390"
// },
// {
//     name: "Pittsburgh",
//     code: "2473224"
// },
// {
//     name: "Raleigh",
//     code: "2478307"
// },
// {
//     name: "Richmond",
//     code: "2480894"
// },
// {
//     name: "Sacramento",
//     code: "2486340"
// },
// {
//     name: "San Antonio",
//     code: "2487796"
// },
// {
//     name: "San Diego",
//     code: "2487889"
// },
// {
//     name: "San Francisco",
//     code: "2487956"
// },
// {
//     name: "San Jose",
//     code: "2488042"
// },
// {
//     name: "St. Louis",
//     code: "2486982"
// },
// {
//     name: "Tallahassee",
//     code: "2503713"
// },
// {
//     name: "Tampa",
//     code: "2503863"
// },
// {
//     name: "Tucson",
//     code: "2508428"
// },
// {
//     name: "Virginia Beach",
//     code: "2512636"
// },
// {
//     name: "Washington",
//     code: "2514815"
// }
]
// generateTrendingList(myTrend)



const selectMenu = $('#city-select')

//Create an element with display name and value = code
for (let i = 0; i < cityObjects.length; i++) {

    const optionItem = $('<option>').attr('value', cityObjects[i].code).text(cityObjects[i].name)

    selectMenu.append(optionItem)
}

selectMenu.on('change', function () {
    const cityName = $("#city-select option:selected").text()
    const code = this.value
    
    console.log('city', cityName)
    console.log(this.value)
    getTwitterData(cityName, code)
    
})


var getTwitterData = async function (city, code) {
    var url = "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=" + code;
    var response = await fetch(url, {
        headers: {
            "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAAbefMCya8TAn%2FFqsCu1x%2F%2Fwn5zqk%3DZqyvGwPneBRzfIYnZz3fNMMjxMobWKHZjkbmlJVq63q6kwZjLE",
            "Accept": "application/json"
        }

    });

    Promise.resolve(response).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);


        var cityData = {name: city, trends: []}
        for (var i = 0; i < 10; i++) {
            cityData.trends.push(data[0].trends[i].name)
        }
        console.log('city data', cityData)
        localStorage.setItem('Points of Interest', JSON.stringify(cityData))

    }).catch(function (error) {
        if (error) {
        }
    });

}

