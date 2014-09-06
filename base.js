var url = "http://api.openweathermap.org/data/2.5/history/station?id=5091&type=day"
var dataset = [];

function httpGet(url) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    var data = xmlHttp.responseText;
    data = (JSON.parse(data));
    var dataset = [];
    data.list.forEach(function(object) {
    	dataset.push(object.temp.c);
    });
    
    d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
    	var barHeight = d * 2
    	return barHeight + "px"
    });
};

httpGet(url)


  