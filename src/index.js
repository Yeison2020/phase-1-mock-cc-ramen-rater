const formElement = document.getElementById("new-ramen");

const handleSubmit = function (e) {
  e.preventDefault();
  console.log(e);
  const newRamen = {};
  // Here Im adding the their values from teh Object
  newRamen.name = e.target.name.value;
  newRamen.restaurant = e.target.restaurant.value;
  newRamen.image = e.target.image.value;
  newRamen.rating = e.target.rating.value;
  newRamen.comment = e.target["new-comment"].value;
  console.log(newRamen);

  renderNewRamenElement(newRamen);
};

formElement.addEventListener("submit", handleSubmit);

const menuContainer = document.getElementById("ramen-menu");

function ramenClick(ramen) {
  console.log(ramen);
  const detailContainer = document.getElementById("ramen-detail");

  // Put the images data in the img tag
  const imgElement = detailContainer.querySelector("img");
  imgElement.src = ramen.image;
  // put the name in the h2 tag

  const nameElement = detailContainer.querySelector("h2");
  nameElement.textContent = ramen.name;
  // put the restaurant name in  the h3 tag
  const restaurantName = detailContainer.querySelector("h3");
  restaurantName.textContent = ramen.restaurant;

  // Addding the rating and Comments
  document.getElementById("rating-display").innerHTML = ramen.rating;

  document.getElementById("comment-display").textContent = ramen.comment;
}

const renderNewRamenElement = function (rame) {
  // Maken Img Tag
  const newImg = document.createElement("img");
  newImg.addEventListener("click", () => ramenClick(rame));
  // Change Img attribute of the new img from data of the ramen Arrayb of Objects
  newImg.src = rame.image;
  menuContainer.append(newImg);
};

fetch("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then((ramens) => {
    // Ramens ins Arrays
    ramens.forEach((ramen) => renderNewRamenElement(ramen));
  });
