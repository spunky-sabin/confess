onload = () => {
  document.body.classList.remove("container");

  // Show the proposal UI after the flowers finish blooming (roughly 4-5 seconds)
  setTimeout(() => {
    document.getElementById("proposal-container").classList.add("show");
  }, 5000); // Adjust this delay based on flower animation time if needed

  const btnNo = document.getElementById("btn-no");
  const btnYes = document.getElementById("btn-yes");
  const proposalText = document.getElementById("proposal-text");
  const proposalImg = document.querySelector(".proposal-img");
  const proposalButtons = document.getElementById("proposal-buttons");

  const noneTexts = [
    "Are you sure?",
    "Think again!",
    "Please?",
    "I'll be sad...",
    "Don't do this!",
    "Give it another thought!",
    "What if I beg?",
    "Okay, I'm listening...",
    "Just click Yes!",
    "You're breaking my heart ;("
  ];

  let clickCount = 0;
  let yesScale = 1;

  // Function to move the "No" button
  const moveNoButton = () => {
    // Get viewport dimensions
    const vWidth = window.innerWidth;
    const vHeight = window.innerHeight;

    // Get button dimensions
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Calculate random boundaries so it doesn't leave the screen completely
    const maxLeft = vWidth - btnWidth - 50;
    const maxTop = vHeight - btnHeight - 50;
    const minLeft = 50;
    const minTop = 50;

    const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
    const randomTop = Math.floor(Math.random() * (maxTop - minTop)) + minTop;

    // Apply absolute positioning inside the fixed container
    btnNo.style.position = "absolute";
    btnNo.style.left = `${randomLeft}px`;
    btnNo.style.top = `${randomTop}px`;

    // Change text of No button
    btnNo.textContent = noneTexts[clickCount % noneTexts.length];
    
    // Make Yes button bigger
    yesScale += 0.2;
    btnYes.style.transform = `scale(${yesScale})`;

    clickCount++;
  };

  btnNo.addEventListener("mouseover", moveNoButton);
  btnNo.addEventListener("click", moveNoButton);

  btnYes.addEventListener("click", () => {
    proposalText.textContent = "I knew you would say yes! ❤️";
    proposalText.style.color = "#d10056";
    proposalButtons.style.display = "none";
    // Increase size of the image slightly for celebration effect
    proposalImg.style.transform = "scale(1.1)";
    proposalImg.style.transition = "transform 0.5s ease";
  });
};
