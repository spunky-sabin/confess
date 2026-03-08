onload = () => {
  document.body.classList.remove("container");

  const sceneContainer = document.getElementById("scene-container");
  const btnOpenMail = document.getElementById("btn-open-mail");
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const btnNo = document.getElementById("btn-no");
  const btnYes = document.getElementById("btn-yes");
  const proposalText = document.getElementById("proposal-text");
  const proposalButtons = document.getElementById("proposal-buttons");

  // Open the envelope when the button or envelope is clicked
  const openMail = () => {
    sceneContainer.classList.add("open");
  };

  btnOpenMail.addEventListener("click", openMail);
  envelopeWrapper.addEventListener("click", openMail);

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

    // Move to body if it's not already there to escape the letter's overflow:hidden and transform
    if (btnNo.parentElement !== document.body) {
      document.body.appendChild(btnNo);
      btnNo.style.zIndex = "9999"; // Ensure it stays on top of the letter
    }

    // Calculate random boundaries so it doesn't leave the screen completely
    // Using 20px padding to keep it optimized for smaller mobile screens
    const maxLeft = vWidth - btnWidth - 20;
    const maxTop = vHeight - btnHeight - 20;
    const minLeft = 20;
    const minTop = 20;

    const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
    const randomTop = Math.floor(Math.random() * (maxTop - minTop)) + minTop;

    // Apply fixed positioning relative to the viewport
    btnNo.style.position = "fixed";
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
    // Detach and move text below the envelope
    proposalText.textContent = "I knew you would say yes! ❤️";
    proposalText.className = "success-text";
    sceneContainer.appendChild(proposalText);

    proposalButtons.style.display = "none";
    btnNo.style.display = "none";

    // Enlarge the couple photo to cover the entire div and hide the other photo
    const imgLeft = document.querySelector(".img-left");
    const imgRight = document.querySelector(".img-right");

    if (imgLeft) imgLeft.style.display = "none";
    if (imgRight) imgRight.classList.add("celebrating");
  });
};
