// Array of person objects 
const person = [
    { name: "Samekshya", age: 22, contactNo: "9801234567", address: "Baneshwor, Kathmandu" },
    { name: "Aruna", age: 20, contactNo: "9812345678", address: "Kumaripati, Lalitpur" },
    { name: "Sita", age: 25, contactNo: "9845678901", address: "Koteshwor, Kathmandu" }
  ];
  
  // Get the container element
  const cardsContainer = document.getElementById("card-container");
  
  // Create and append cards
  person.forEach((individual) => {
    const card = document.createElement("div");
    card.className = "cards"; // Class name matches your CSS
  
    // Add the content using template literals
    card.innerHTML = `
      <div class="name">${individual.name}</div>
      <div class="Age">Age: ${individual.age}</div>
      <div class="Contact-No">Contact No: ${individual.contactNo}</div>
      <div class="Address">Address: ${individual.address}</div>
    `;
  
    // Append the card to the container
    cardsContainer.appendChild(card);
  });
  
  