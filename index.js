// If there are no errors
if (!Object.keys(errors).length) {
  // Create a new element
  const parkSection = document.createElement("section");

  // Add the park class
  parkSection.classList.add("park-display");

  // Construct the HTML for this element
  const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${moment(formData.get("established")).format(
         "MMMM D, YYYY"
        )}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

  // Set the innerHTML
  parkSection.innerHTML = content;

  // Append to the main element
  document.querySelector("main").appendChild(parkSection);
}
