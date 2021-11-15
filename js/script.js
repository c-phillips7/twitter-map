var trendsDiv = document.querySelector(".trends-div")

// lines 4-16 are just test data to see if func will run properly
let testTrend = []
testTrend.push({
    name: "#atrend"
})
testTrend.push({
    name: "#another-trend"
})
testTrend.push({
    name: "#one-more-trend"
})
localStorage.setItem("trend", JSON.stringify(testTrend))
var myTrend = JSON.parse(localStorage.getItem('trend'))
console.log(myTrend)


// function to generate li for each trend
generateTrendingList = (trend) => {
    var trendsUl = document.createElement("ul")
    trendsUl.classList= ("trends-ul")
    trendsDiv.append(trendsUl)

    //  pull #s from locally stored data
    for (var i = 0; i<trend.length; i++) {
        var trendItem= document.createElement("li")
        trendItem.classList= ("trend-item slide-right")
        trendItem.textContent = (trend[i].name)
        trendsUl.append(trendItem)
    }
}
generateTrendingList(myTrend)