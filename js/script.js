// need real url to fetch to get check validity
fetch("https://api.twitter.com/1.1/trends/newyork.json?id=1").then(function(response){
    if(response.ok){
        response.json().then(function(myData){
            generateTrends(myData)
        })
    }
})

// function to generate li for each trend
generateTrends = (data) => {
    var trendsUl = $("<ul>").addClass("trends-ul")
    $("trends-div").append(trendsUl)
    // func to pull #s from data
    for (var i = 0; i<data.trends; i++) {
        var trendItem= $("<li>").addClass("trend-item").text(data.trends[i].name)
        $(trendsUl).append(trendItem)
    }
}