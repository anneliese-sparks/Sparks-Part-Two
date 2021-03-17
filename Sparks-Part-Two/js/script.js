/*
Step 1: Find out pets name - define with a variable (petName)
Step 2: Set pet's happiness and energy levels - define with a variable (petHappiness, petEnergy)
Step 3: Define feed, pet or walk with variables - (feedPet, petPet, walkPet)
Step 4: Set feedPet to increase petEnergy by 2, set petPet to increase petHappiness by 1, set walkPet to
increase petHappiness by 2 but decrease petEnergy by 1
Step 4: Prompt user to feed, pet or walk six times - use a loop
Step 5: If they choose walk when petEnergy is 0, do not increase petHappiness or decrease petEnergy - set
an alert with the following message "Not enough energy to enjoy a walk."
Step 6: At the end, after the 6 actions, log the petName, petHappiness, and petEnergy level to the console
*/

let petName = prompt("What is your pet's name?"); 

let petHappiness = 0;
let petEnergy = 0;

for (let i = 0; i < 6; i++) {

   let input = prompt("Feed, Pet, or Walk?");

   if (input == "feed") {

      petEnergy += 2;

   } else if (input == "pet") {

      petHappiness += 1;

   } else if (input == "walk" && petEnergy == 0) {

      alert("Pet does not have enough energy for walk.");

   } else if (input == "walk" && petEnergy > 0) {
      
      petHappiness += 2;
      petEnergy -= 1;

   }

   }
   console.log (petName + " has " + petHappiness + " happiness and " + petEnergy + " energy.");



  

 


