function formatData() {
// let taxiPickups;
// d3.json("/data/taxi_zones.geojson").then(res => taxiZones = res);

return d3.json("/data/taxi_data.json").then(data => {
    let options = {};
    // let percent = 1/data.length;
    data.forEach(datum => {
        let time = datum.tpep_pickup_datetime.split(" "); //
        let hour = time[1].split(":")[0];
        let amPm = time[2];
        options[datum.pu_location_id] = options[datum.pu_location_id] || 0;
        options[datum.pu_location_id] += 1
    });
    debugger
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

