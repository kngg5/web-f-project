
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let firstInt = getRandomNumber(3,10);
var f =Math.round(firstInt);

let secondInt = getRandomNumber(2,6);
var s = Math.round(secondInt);

let thirdInt = getRandomNumber(2,5);
var t =Math.round(thirdInt);

var numColors = t;
var colors = d3.scaleOrdinal()
  .range(d3.schemeCategory10.slice(0, numColors));

var numColumns = f;
var numRows = s;

const grid = d3.select(".pixels").append("div")
    .attr("class", "grid")
    .style("display", "grid")
    .style("grid-template-columns", `repeat(${numColumns}, 9%)`)
    .style("grid-template-rows", `repeat(${numRows}, 9%)`)
    .style("grid-gap", "9px");

const cells = grid.selectAll(".cell")
    .data(d3.range(numColumns * numRows))
    .enter().append("div")
    .attr("class", "cell")
    .style("background-color", function(d, i) {
        return colors(Math.floor(Math.random() * numColors));
      });

const txt = d3.select('.l').append("h3")
      .attr("class","bits")
      .text("Сколько будет в битах : ")
      .style("margin","10px 100px")
      .style("font-size","30px")
    


const inp = d3.select('.l').append("input")
    .attr("type","text")
    .attr("class","inpt")
    .style("font-size","30px")
    .style("margin","10px 100px")
    .on("change",d3.select(".inpt").property("value"))

const changeclr = d3.select('.inpt')
      .style("border-color","green")
const br = d3.select('.left').append("br")

var fNum = f * 2;
var numBits = fNum * s;
console.log(numBits);

const button = d3.select('.l').append("button")
    .attr("id","checkInpValue")  
    .text("Проверить")
    .style("background-color","black")
    .style("color","white")
    .style("margin","10px 100px")
    .style("font-size","30px")
    .on("click", function() {
        console.log("checked");
        var xx = d3.select('.inpt').property("value");
        if(xx == numBits) {
            d3.select(".bits").text("Ваш ответ "+xx+" верный!")
            d3.select('.checkInpValue').style("background-color","green")
        } else {
            d3.select(".bits").text("Ваш ответ "+xx+" не верный! Верный "+ numBits)
            d3.select('.checkInpValue').style("background-color","red")
        }
        setTimeout(refresh,3000);
        function refresh() {
            let firstInt = getRandomNumber(3,10);
            var f = Math.round(firstInt);
            let secondInt = getRandomNumber(2,6);
            var s =Math.round(secondInt);
            let thirdInt = getRandomNumber(2,5);
            var t = Math.round(thirdInt);
            location.reload();
        }
    })



