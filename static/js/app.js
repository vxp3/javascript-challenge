// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(AddR);

function AddR (item){
    var row = tbody.append("tr");
    var row_data = Object.values(item);

    row_data.forEach(data=>{
        row.append('td').text(data);
    })
}

var button = d3.select('#filter-btn');
button.on('click', function(){
    tbody.html("");

    var fDate = d3.select('#datetime').property('value');
    console.log(fDate);

    var inputDate = tableData.filter( x => x.datetime === fDate);
    console.log(inputDate);

    inputDate.forEach(AddR);

});

// // /from data.js
// var tableData = data;
// // YOUR CODE HERE!
// var tbody = d3.select('tbody');

// tableData.forEach(addRow);

// function addRow(item){
//     var row = tbody.append('tr');
//     var sightings = Object.values(item);
//     sightings.forEach(data => {
//         row.append('td').text(data);
//     })
// }

// // Select the filter button
// var button = d3.select('#filter-btn');
// button.on('click', function() {
// tbody.html("");
//     // Select the input element and get the raw HTML node
// var inputElement = d3.select('#datetime');
//     // Get the value property of the input element
// var inputValue = inputElement.property('value');
// console.log(inputValue);
// var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     console.log(filteredData);
// filteredData.forEach(addRow);
// });