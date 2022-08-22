function graphJSON(url, property, title){

    function json_read(){
      let dataJSON = [];
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send();
  
      let obj = JSON.parse(xhr.response);
      for(let i = 0; i < obj.length; i++){
          dataJSON.push(obj[i][property]);
      }
      return dataJSON;
    }
  
    function createArray(){
      let arr = [[title, property]];
      let data = json_read();
      var arr2=[];
        for(i in data){
            if (arr2[data[i]]!=undefined) {
                (arr2[data[i]]++)
            }
            else {
                (arr2[data[i]]=1)
            }
        }
      for(let key in arr2){
          arr.push([key, arr2[key]]);
      }
      return arr;
    }
  
    function getGraph(){
      let arr = createArray();
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = {
          title: title,
          is3D: true,
        };
        var chart = new google.visualization.PieChart(document.getElementById(property));
        chart.draw(data, options);
      }
    }
    
    return getGraph();
}