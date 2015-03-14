(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    shotchartController
  ];

  angular.module('ni.Shotchart')
    .controller('shotchartController', definitions);

  function shotchartController($scope) {
    $scope.drawChart = function() {
      var chart = d3.select(angular.element(document.querySelector('#shotchart'))[0]),
      width = 500,
      height = 430;

      chart.selectAll("circle").remove()

      chart.append("circle")
        .attr("cx", "250")
        .attr("cy", "190")
        .attr("r", "60")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      var $temp = angular.element(document.querySelector('#playerPicker')).children(":selected");
      var player = $temp.data("id");
      var team = $temp.data("team");
      //console.log("hehah");

      d3.json("shots/" + player + ".json", function(error, json) {
        if (error) return console.warn(error);
        var data = json;
        var dataCopy = data.slice();
        var $temp2 = angular.element(document.querySelector('#playerPicker2')).children(":selected");
        var player2 = $temp2.data("id");
        var team2 = $temp2.data("team");
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
  }

})(angular);