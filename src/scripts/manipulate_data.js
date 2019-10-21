function formatData(time, type, car) {
    let vehicleType;
    let tripLocation;
    let locationId;
    let tripTime;
      if (type === "Pick Ups") {
        tripLocation = "pu_location_id";
        tripTime = car === "Taxi" ? "tpep_pickup_datetime": "pickup_datetime";
    } else {
        tripLocation = "do_location_id";
        tripTime = car === "Taxi" ? "tpep_dropoff_datetime" : "dropoff_datetime";
    }

    vehicleType = car === "Taxi" ? "../../data/taxi_data.json" : "../../data/fhv_data.json";
// let taxiPickups;
// d3.json("/data/taxi_zones.geojson").then(res => taxiZones = res);
return d3.json(vehicleType).then(data => {
    let options = {};
    // let percent = 1/data.length;
    // if ((typeof(time) === "undefined")) {
    //     data.forEach(datum => {
    //         locationId = datum[tripLocation];
    //         options[locationId] = options[locationId || 0;
    //         options[locationId] += 1;
    //     });
    // } else {
    if (parseInt(time) === 24) {
        data.forEach(datum => {
            locationId = datum[tripLocation];
            options[locationId] = options[locationId] || 0;
            options[locationId] += 1;
        });
    }else {
        data.forEach(datum => {
            locationId = datum[tripLocation];
            let date = new Date(datum[tripTime]);
            let hour = date.getHours();
            if (hour === parseInt(time)) {
        // let time = datum.tpep_pickup_datetime.split(" "); //
        // let hour = time[1].split(":")[0];
        // let amPm = time[2];
                options[locationId] = options[locationId] || 0;
                options[locationId] += 1;
            }
    });
    // }
    }
    return options;
});

// if (taxiPickups) {
//     percentage = 1.0/taxiPickups.count;
//     let options = {};
//     taxiPickups.forEach(datum => {
//         let time = datum.tpep_pickup_datetime.split(" "); //
//         let hour = time[1].split(":")[0];
//         let amPm = time[2];
//         options[datum.pu_location_id] += percentage;
//     });
//     return options;
// }
}

