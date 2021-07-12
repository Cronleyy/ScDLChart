$(document).ready(function ()
{
	   google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        data.addColumn('number', 'Member Count');

        data.addRows([
          //[new Date(2015, 9, 8), 1]
		[new Date(2018, 8, 15), 107],
		[new Date(2018, 8, 28), 110],
		[new Date(2018, 9, 3), 106],
		[new Date(2018, 9, 9), 81],
		[new Date(2018, 9, 23), 81],
		[new Date(2018, 9, 30), 77],
		[new Date(2018, 10, 15), 81],
		[new Date(2018, 10, 28), 118],
		[new Date(2018, 11, 4), 127],
		[new Date(2018, 11, 11), 148],
		[new Date(2018, 11, 26), 160],
		[new Date(2019, 0, 19), 178],
		[new Date(2019, 0, 29), 200],
		[new Date(2019, 11, 26), 160],
		[new Date(2020, 4, 24), 150],
		[new Date(2020, 6, 1), 88],
		[new Date(2021, 7, 12), 40]
        ]);


        var options = {
          title: '[SCPF] Scientific Department | Member Count Chart',
          width: 1350,
          height: 750,
          hAxis: {
            format: 'M/d/yy',
            gridlines: {
              count: 15
            }
          },
          vAxis: {
            gridlines: {
              color: 'none'
            },
            minValue: 0
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

        var button = document.getElementById('change');

        button.onclick = function() {

          // If the format option matches, change it to the new option,
          // if not, reset it to the original format.
          options.hAxis.format === 'M/d/yy' ?
            options.hAxis.format = 'MMM dd, yyyy' :
            options.hAxis.format = 'M/d/yy';

          chart.draw(data, options);
        };
      }
});
