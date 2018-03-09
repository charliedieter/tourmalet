// // https://developers.google.com/maps/documentation/javascript/examples/elevation-paths
// import React from 'react'
//
// class ElevationGraph extends React.Component {
//   constructor(props){
//     super(props)
//   }
//
//   componentDidMount(){
//     google.load('visualization', '1', {packages: ['columnchart']})
//
//     this.elevator = new google.maps.ElevationService;
//
//     elevator.getElevationAlongPath({
//       path,
//       samples: 256
//     }, this.plot)
//   }
//
//
//   plot(els, status) {
//     let chart = new google.visualization.ColumnChart(chartDiv)
//     let data = new google.visualization.DataTable();
//     data.addColumn('string', 'Sample');
//     data.addColumn('number', 'Elevation');
//     for (var i = 0; i < elevations.length; i++) {
//       data.addRow(['', elevations[i].elevation]);
//     }
//
//     chart.draw(data, {
//       height: 150,
//       legend: 'none',
//       titleY: 'Elevation (m)'
//     }
//   }
//
//
//   render(){
//     return(
//
//     )
//   }
// }
