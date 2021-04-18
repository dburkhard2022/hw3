// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //declare drop off location variables and get them from the API
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip


  //declare passenger details varialbes and get them from the API
  let passengerFirst = ride.passengerDetails.first
  let passengerLast = ride.passengerDetails.last
  let passengerPhone = ride.passengerDetails.phoneNumber

   //declare drop off location variables and get them from the API
   let pickupAddress = ride.pickupLocation.address
   let pickupCity = ride.pickupLocation.city
   let pickupState = ride.pickupLocation.state
   let pickupZip = ride.pickupLocation.zip

   //declare variable of level of servie and declare it based on other details from API
   let rideType
   if (ride.purpleRequested == true) {
     rideType = `Noober Purple`
   } else if (ride.numberOfPassengers > 3) {
     rideType = `Noober XL`
   } else {
     rideType = `Noober X`
   }

  //output message with ride details to console
  console.log(`${rideType} Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhone}. 
  Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. 
  Drop off ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`)
  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
