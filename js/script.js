var trendsDiv = document.querySelector(".trends-div")
trendsDiv.classList= "trends-div"
var trendsPlaceholder = document.createElement("p")
trendsPlaceholder.classList = ("placeholder")
trendsPlaceholder.innerHTML = "Top 10 trends..."
trendsDiv.append(trendsPlaceholder)

// if any previous selection has been made, clear list before generating a new one
var clearTrendsList = function() {
    while (trendsDiv.firstChild) {
        trendsDiv.removeChild(trendsDiv.firstChild)
    }
}
// function to generate list of trends
var generateTrendingList = function(trendData) {
    //  create a li for each trend
    var trendsUl = document.createElement("ul")
    trendsUl.classList= ("trends-ul")
    trendsDiv.append(trendsUl)
    for (var i = 0; i<trendData.length; i++) {
        var trendItem= document.createElement("li")
        trendItem.classList= ("trend-item slide-right")
        trendItem.innerHTML= ("<a href=" + trendData[i].url + " target=_blank>" + trendData[i].name + "</a>")
        trendsUl.append(trendItem)
    }
}

var cityObjects = [{
    name: "Albuquerque",
    code: "2352824"
},
{
    name: "Atlanta",
    code: "2357024"
},
{
    name: "Austin",
    code: "2357536"
},
{
    name: "Baltimore",
    code: "22358820"
},
]
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
            cityData.trends.push(data[0].trends[i])
        }
        localStorage.setItem('Points of Interest', JSON.stringify(cityData))

        clearTrendsList()
        generateTrendingList(cityData.trends)
        console.log(cityData.trends[0].url)
      

    }).catch(function (error) {
        if (error) {
        }
    });

}