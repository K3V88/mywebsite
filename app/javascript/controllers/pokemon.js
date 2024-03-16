document.addEventListener("DOMContentLoaded", function() {
  const pokemonSprites = document.querySelectorAll(".pokemon-sprite");
  const pokebox = document.querySelector(".pokebox");
  let imageCounter = 0;

  // Counter elements
  const pinkCounter = document.getElementById("pink-counter");
  const blueCounter = document.getElementById("blue-counter");

  // Function to update the counters
  const updateCounters = () => {
    const pinkSprites = document.querySelectorAll(".pokemon-sprite[style*='background-color: pink']");
    const blueSprites = document.querySelectorAll(".pokemon-sprite[style*='background-color: rgb(47, 189, 237)']");

    pinkCounter.textContent = pinkSprites.length;
    blueCounter.textContent = blueSprites.length;
  };

  // Initial update of the counters
  updateCounters();

  pokemonSprites.forEach(function(sprite) {
    sprite.addEventListener("click", function() {
      // Check if the image is already in the pokebox
      if (!pokebox.contains(sprite)) {
        // Create a copy of the clicked image
        const clonedImage = sprite.cloneNode(true);

        // Add the copied image to the pokebox
        pokebox.appendChild(clonedImage);

        // Increment the counter
        imageCounter++;

        // Add a line break before every ninth image

        // Add event listener for removing the image
        clonedImage.addEventListener("click", function() {
          // Remove the clicked image from the pokebox
          pokebox.removeChild(clonedImage);
          // Update the counters after removing the image
          updateCounters();
        });

        // Initialize right-click count for each image
        let rightClickCount = 0;

        // Add event listener for right-click (contextmenu) event
        clonedImage.addEventListener("contextmenu", function(event) {
          event.preventDefault(); // Prevent the default context menu
          rightClickCount++; // Increment the right-click count

          // Toggle background color based on the right-click count
          if (rightClickCount === 1) {
            clonedImage.style.backgroundColor = "rgb(47, 189, 237)"; // First right-click
          } else if (rightClickCount === 2) {
            clonedImage.style.backgroundColor = "pink"; // Second right-click
          } else {
            clonedImage.style.backgroundColor = ""; // Third or more right-clicks (remove background color)
            rightClickCount = 0; // Reset the right-click count
          }

          // Update the counters after changing the background color
          updateCounters();
        });
      }
    });
  });
});
