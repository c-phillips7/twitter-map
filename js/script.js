var stateCodes = [2352824, 2357024, 2357536, 2358820, 2359991, 2364559, 2367105, 2378426, 2379574, 2380358, 2381475, 2383489, 2383660, 2388929, 2391279, 2391585, 2407517, 2414469, 2418046, 2423945, 2424766, 2427032, 2428184, 2428344, 2430683, 2436704, 2441472, 2442047, 2442327, 2449323, 2449808, 2450022, 2451822, 2452078, 2457170, 2458410, 2458833, 2459115, 2460389, 2464592, 2465512, 2466256, 2471217, 2471390, 2473224, 2475687, 2477058, 2478307, 2480894, 2486340, 2487610, 2487796, 2487889, 2487956, 2488042, 2490383, 2486982, 2503713, 2503863, 2508428, 2512636, 2514815]

// let url = "https://api.twitter.com/1.1/trends/place.json?id=" + stateCodes;

var getTwitterData = async function(){
    var response = await fetch(url, {
        headers: {
        "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAMUBVwEAAAAAu0LoMLXa0mWHNfU0gIp856SisvM%3D15mPjdrx8zarF789lq8PxPqVkOYWbzMQvSuPVXjy1ThLJVFDqy",
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

for (var i = 0; i < stateCodes.length; i++){
    var url = "https://api.twitter.com/1.1/trends/place.json?id=" + stateCodes[i];
    getTwitterData();
}


