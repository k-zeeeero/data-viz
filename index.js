console.log("Hello World");

// Current Date for the Title
const dateElement = document.getElementById('date')
    ;

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// "dateOptions" Object will allow us to change the format retrieve from currentDate
let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

// Will allow us to change the format to US time using the "dateOptions" object.
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics.

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '4f1ef46381msh730c64e2c756c82p14d806jsnbd703af17b97',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// //  Dummy Data to Comment Out
// let myPost = {
// 	name:"#AlwaysToYouHannie",
// 	query:"%23AlwaysToYouHannie",
// 	url:"search?q=%23AlwaysToYouHannie",
// 	volume:98800,
// 	volumeShort:"97.9K",
// 	domainContext:"Korean music",
// 	groupedTrends:[]
// }

// console.log(myPost);
// // dot notation - to access a property or method of an object
// console.log(myPost.name);
// console.log(myPost.url);
// console.log(myPost.volume);

// // Array of Objects 

// let graphData = [
// 	{
// 		name:"2ne1",
// 		query:"2ne1",
// 		url:"search?q=2ne1",
// 		volume:394000,
// 		volumeShort:"394K",
// 		domainContext:"K-pop",
// 		groupedTrends:[]
// 	},
// 	{
// 		name:"#FudgeeBarrxBINI",
// 		query:"%23FudgeeBarrxBINI",
// 		url:"search?q=%23FudgeeBarrxBINI",
// 		volume:23200,
// 		volumeShort:"22.6K",
// 		domainContext:"",
// 		groupedTrends:[]

// 	}
// ];

// console.log(graphData);
// // Array uses "index" to select the position of an element
// console.log(graphData[0]);

// // using dot notation
// console.log(graphData[0].name);

// console.log(graphData);

// // push() method - add elements at the end of an array
// graphData.push(myPost);

// console.log(graphData);

// //End of dummy date to comment out

let graphData = [];

// Fetch Request

fetch(url, options)
.then(res => res.json())
.then(data =>{
	console.log(data);

	console.log(graphData.length);

	for (let i = 0; i < 25; i++){
	 graphData.push(
            {
            	"name": data.trends[i].name,
            	"volume": data.trends[i].volume
            }
	 	)
    }

let topics = graphData.map(object =>{
       console.log(object);
       console.log(object.name);
       return object.name;

});

console.log(topics);

let volume = graphData.map(object =>{
	return object.volume;

})

console.log(volume);

const myChart = document.getElementById('myChart');

  let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volume,
        borderWidth: 2,
        backgroundColor: [
		'rgba(255, 99, 132, 0.2)',
		'rgba(255, 159, 64, 0.2)',
		'rgba(255, 205, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(54, 162, 235, 0.2)',
		'rgba(153, 102, 255, 0.2)',
		'rgba(201, 203, 207, 0.2)'
    ],
    	borderColor: [
		'rgb(255, 99, 132)',
		'rgb(255, 159, 64)',
		'rgb(255, 205, 86)',
		'rgb(75, 192, 192)',
		'rgb(54, 162, 235)',
		'rgb(153, 102, 255)',
		'rgb(201, 203, 207)'
    ],

   		hoverBackgroundColor: [
    	'rgb(255, 99, 132)',
    	'rgb(255, 159, 64)',
    	'rgb(255, 205, 86)',
    	'rgb(75, 192, 192)',
    	'rgb(54, 162, 235)',
    	'rgb(153, 102, 255)',
    	'rgb(201, 203, 207)'
    ]

      }]
    },
    options: {
    	indexAxis:'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    });


});

// // Copy Paste to Fetch Request

// console.log(graphData.length);



// for (let i = 0; i < 2; i++){
// 	 console.log(graphData[i]);
//  	 console.log(graphData[i].name);
//  	 console.log(graphData[i].volume);
// }

// // map method is used to loop through all elements/items of an array execute some code
// // it creates a new array

// // This will create a topics variable that contains the "object.name" property values.
// let topics = graphData.map(object =>{
//        console.log(object);
//        console.log(object.name);
//        return object.name;

// });

// console.log(topics);

// // This will create volumes variables that will contain "object.volume" property values.
// let volume = graphData.map(object =>{
// 	return object.volume;

// })

// console.log(volume);

// const myChart = document.getElementById('myChart');

//   let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: '# of tweets/xeets',
//         data: volume,
//         borderWidth: 2,
//         backgroundColor: [
// 		'rgba(255, 99, 132, 0.2)',
// 		'rgba(255, 159, 64, 0.2)',
// 		'rgba(255, 205, 86, 0.2)',
// 		'rgba(75, 192, 192, 0.2)',
// 		'rgba(54, 162, 235, 0.2)',
// 		'rgba(153, 102, 255, 0.2)',
// 		'rgba(201, 203, 207, 0.2)'
//     ],
//     	borderColor: [
// 		'rgb(255, 99, 132)',
// 		'rgb(255, 159, 64)',
// 		'rgb(255, 205, 86)',
// 		'rgb(75, 192, 192)',
// 		'rgb(54, 162, 235)',
// 		'rgb(153, 102, 255)',
// 		'rgb(201, 203, 207)'
//     ],

//    		hoverBackgroundColor: [
//     	'rgb(255, 99, 132)',
//     	'rgb(255, 159, 64)',
//     	'rgb(255, 205, 86)',
//     	'rgb(75, 192, 192)',
//     	'rgb(54, 162, 235)',
//     	'rgb(153, 102, 255)',
//     	'rgb(201, 203, 207)'
//     ]

//       }]
//     },
//     options: {
//     	indexAxis:'y',
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//     });

//   // End of Copy Paste to Fetch Request.