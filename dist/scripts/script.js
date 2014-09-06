var width = 500,
  height = 430;




function blah2() {
  chart.selectAll("circle").remove()

  chart.append("circle")
    .attr("cx", "250")
    .attr("cy", "190")
    .attr("r", "60")
    .attr("stroke", "#ccc")
    .attr("fill", "none")
    .attr("stroke-width", "4");
  var $temp = $("#playerPicker").children(":selected");
  var player = $temp.data("id");
  var team = $temp.data("team");
  //console.log("hehah");

  d3.json("shots/" + player + ".json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    //console.log(""+data.length);
    dataCopy = data.slice();
    var $temp2 = $("#playerPicker2").children(":selected");
    var player2 = $temp2.data("id");
    var team2 = $temp2.data("team");
    //console.log(player2)
    //console.log(player)

    var arrayLength = data.length;
    if (player2 != "0") {
      var sliceCount = 0

      for (var i = 0; i < arrayLength; i++) {
        var onCourt = 0;
        //see if defender on court
        //Do something
        for (var j = 0; j < 5; j++) {
          //console.log(data)

          if (data[i].opponents[j].id == player2)
            onCourt = 1;
        }
        //console.log(""+player2)
        if (onCourt == 0) {

          dataCopy.splice(i - sliceCount, i - sliceCount);
          sliceCount = sliceCount + 1;
          //console.log("splicing");
        }
      }

    }
    data = dataCopy;
    //console.log(dataCopy);
    var circles = chart.selectAll("circle")
      .data(data)
      .enter().append("circle")
      .attr("cx", function(d) {
        blah = (250 - d.shot.xCord)
        if (blah > 490) {
          return 490;
        }
        if (blah < 9) {
          return 9;
        } else {
          return blah;
        }
      })
      .attr("cy", function(d) {
        blah = (d.shot.yCord + 18);

        if (blah < 9) {
          return 9;
        } else {
          return blah;
        }
      })
      .attr("r", "8")
      .attr("stroke", "black")
      .attr("stroke-width", "2")
      .attr("fill", function(d) {
        if (d.shot.result == 0) {
          return "none";

        } else {
          if (d.shot.result == 3) {
            return "red";
          } else {
            return "blue";
          }
        }
      })
      .attr("fill-opacity", ".3");

  });

  return true;
};


;;


$("#playerPicker").change(function() {
  var val = $(this).val();
  $("#playerPicker2").html(options[val]);
});


var options = [" <option selected='selected' value='0' data-team='0' data-id='0'>All Defenders</option><option value='1' data-team='1' data-id='237675'>Paul Millsap</option>             <option value='1' data-team='1' data-id='3306'>Elton Brand</option>             <option value='1' data-team='1' data-id='477669'>Shelvin Mack</option>              <option value='1' data-team='1' data-id='229758'>Cartier Martin</option>            <option value='1' data-team='1' data-id='398043'>Jeff Teague</option>           <option value='1' data-team='1' data-id='398034'>Mike Scott</option>            <option value='1' data-team='1' data-id='520388'>Mike Muscala</option>              <option value='1' data-team='1' data-id='739958'>Dennis Schroeder</option>              <option value='1' data-team='1' data-id='746146'>Pero Antic</option>            <option value='1' data-team='1' data-id='58293'>Kyle Korver</option>            <option value='1' data-team='1' data-id='292401'>Lou Williams</option>              <option value='1' data-team='1' data-id='262890'>DeMare Carroll</option>", "<option selected='selected' value='0' data-team='0' data-id='0'>All Defenders</option><option value='0' data-team='11' data-id='174025'>C.J. Watson</option>            <option value='0' data-team='11' data-id='402984'>Lavoy Allen</option>              <option value='0' data-team='11' data-id='266369'>Roy Hibbert</option>              <option value='0' data-team='11' data-id='277552'>George Hill</option>              <option value='0' data-team='11' data-id='469218'>Paul George</option>              <option value='0' data-team='11' data-id='398068'>Evan Turner</option>              <option value='0' data-team='11' data-id='174092'>Chris Copeland</option>           <option value='0' data-team='11' data-id='168058'>Rasual Butler</option>            <option value='0' data-team='11' data-id='168061'>Luis Scola</option>           <option value='0' data-team='11' data-id='57934'>David West</option>            <option value='0' data-team='11' data-id='292393'>Ian Mahimi</option>"];