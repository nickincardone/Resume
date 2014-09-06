(function(angular) {

  var
    definitions;

  definitions = [
    createCourt
  ];

  angular.module('ni.Shotchart').directive('createCourt', definitions);

  function createCourt() {

    return {
      restrict: 'A',
      replace: false,
      link: drawCourt
    }

    function drawCourt(scope, elm, attrs) {
      var width = 500,
        height = 430;

      var chart = d3.select(elm[0])
        .attr("width", width)
        .attr("height", height);
      chart.append("rect")
        .attr("x", "190")
        .attr("y", "0")
        .attr("width", "120")
        .attr("height", "190")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      chart.append("circle")
        .attr("cx", "250")
        .attr("cy", "190")
        .attr("r", "60")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      chart.append("path")
        .attr("d", "M30,0 l0,141")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      chart.append("path")
        .attr("d", "M470,0 l0,141")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      chart.append("path")
        .attr("d", "M30,141 A237,237 0 0,0 250,287 A237,237 0 0,0 470,141")
        .attr("stroke", "#ccc")
        .attr("fill", "none")
        .attr("stroke-width", "4");
      chart.append("rect")
        .attr("width", "500")
        .attr("height", "470")
        .attr("stroke", "#777")
        .attr("fill", "none")
        .attr("stroke-width", "1");
      chart.append("rect")
        .attr("x", "220")
        .attr("y", "35")
        .attr("width", "60")
        .attr("height", "5");
    }
  }

})(angular);