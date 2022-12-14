console.log("mainjs");

document.getElementById("myBtn").addEventListener("click", getData);

const url = "https://randomuser.me/api/?results=100";

function getData() {
  //get Api
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      let person = data.results;
      console.log(person);

      //get data value
      let output = "<h5> <center> Users </center> </h5>";

      //get data from loop
      person.forEach(function (lists) {
        output += `
                 <div class="card p-3 py-4 text-center">
                    <div class="text-center ">
                        <ul class="list-group">
                            <li class="list-group-item mt-2"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item "><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                           <div class="social-buttons mt-5"> 
			   <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
			   <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
			   <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
			   <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
			   <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
			  </div>
			  
                    </div>
                </div> `;
      });

      document.getElementById("output").innerHTML = output;
    });
}
// console.log(createRequest(url));
function random(number) {
  return Math.floor(Math.random() * number);
}
function randomColor() {
  return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}
