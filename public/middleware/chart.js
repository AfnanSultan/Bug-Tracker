console.log("Inside chart.js...");
// let Bug = require('../../models/bug.model');

const renderChart = function(data, labels){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#132412", "#534376", "#087567", "#451874", "#014875"],
                data: data,
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio: false,
        },
    });    
}

var data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
var labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
renderChart(data, labels);





// Bug.find({}, (err, bugs)=>{
//     // console.log(bugs);
//     // none, low, medium, high
//     labels = ['none', 'low', 'medium', 'high'];
//     data = [0,0,0,0];
//     bugs.forEach((bug)=>{
//         var index=0;
//         // console.log(bug.severity);
//         switch(bug.severity){
//             case 'none': 
//                 index=0;break;
//             case 'low':
//                 index=1;break;
//             case 'medium':
//                 index=2;break;
//             case 'high':
//                 index=3; break;
//         }
//         data[index] +=1;
//     });
//     console.log(data);
//     renderChart(data, labels);
// })