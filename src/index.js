let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => {
    const toyCollection = document.querySelector("#toy-collection")
    const toyDiv = document.createElement('div')
    toyDiv.class = "card"

    data.forEach(toy => { 
     toyDiv.innerHTML += `
     <h2>${toy.name}</h2>
     <img src=${toy.image} class="toy-avatar" />
     <p>${toy.likes} Likes </p>
     <button class="like-btn">Like <3</button>
     `
     })
     
     

     toyCollection.append(toyDiv)
     console.log(toyCollection)

  })



});
