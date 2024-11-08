const carddetails = [
  { id: 1, title: "HTML", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "html.jpg" },
  { id: 2, title: "CSS", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "css.jpg" },
  { id: 3, title: "Java Script", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "js.jpg" },
  { id: 4, title: "Python", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "images.png" }
];

function displayoncard() {
  const container = document.getElementById("card-container");

  carddetails.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = data.backgroundColor;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundColor = data.imageBackgroundColor;

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = `${data.title} image`;
    imageContainer.appendChild(img);
    card.appendChild(imageContainer);

    const title = document.createElement("h3");
    title.textContent = data.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = data.description;
    card.appendChild(description);

    container.appendChild(card);
  });
}

displayoncard();
