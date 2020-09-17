// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function createtable(data){
    console.log(data);
    tbody.html("");
    data.forEach((rowdata)=> {
    var row = tbody.append("tr");
    Object.values(rowdata).forEach((value)=>{
    var cell = row.append("td");
    cell.text(value);

    });
    });
}

createtable (tableData);

function filterclick(){
   var date = d3.select ("#datetime").property("value");
   var filterdata = tableData;
   filterdata = filterdata.filter(row=> row.datetime=== date);
   console.log(filterdata);
   createtable(filterdata);
}
d3.selectAll("#filter-btn").on("click",filterclick);

    