  // Function to randomly select and spin a gear
  function spinRandomGear() {
    const gears = document.querySelectorAll('.gear');
    
    // First, clear any current spinning gear
    gears.forEach(gear => gear.classList.remove('spin'));

    // Randomly select a gear
    const randomIndex = Math.floor(Math.random() * gears.length);
    const selectedGear = gears[randomIndex];

    // Apply the 'spin' class to the selected gear
    selectedGear.classList.add('spin');

    // After 3 seconds, remove the 'spin' class and select another gear
    setTimeout(() => {
      selectedGear.classList.remove('spin');
      spinRandomGear(); // Select the next gear after 3 seconds
    }, 3000);
  }

  // Start the first gear spinning when the page loads
  window.onload = spinRandomGear;

