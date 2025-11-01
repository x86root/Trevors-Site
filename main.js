/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  */
// Add 'loading' class to body for splash to appear
document.body.classList.add("loading");

// Show main content if it exists
const main = document.getElementById("main-content");

// Real-time clock function
function updateClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  // Get the day of the month (1–31), convert to string, and pad to 2 digits
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const timeString = `${hours}:${mins}:${seconds}`;
  const dateString = `${month}-${day}-${year}`;

  // Updates clock to be the formatted version
  const clock = document.getElementById("clockDate");
  if (clock) {
    clock.textContent = `Welcome to my site! Today is ${dateString}. Currently it is ${timeString}`;
  }
}
// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Scroll to section target box, occurs through button click
function scrollToSection() {
  const target = document.getElementById("target-box");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });  // Sets smooth scroll animation
  }
}

// Reusable function for revealing elements on scroll
function initScrollReveal(selector = '.hidden-text', threshold = 0.1) {
  // Create an IntersectionObserver to monitor visibility.
    // IntObs watches when a specific element enters or exits the screen
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      // Test If the element is still visible in the viewport
      if (entry.isIntersecting) {
                // Add visible class to trigger CSS animation
        entry.target.classList.add('visible');
        // Stop observing this element 
        obs.unobserve(entry.target);
      }
    });
  }, { threshold }); // Sets how much of the element must be visible to trigger

  // Apply observer to all matching elements
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// Initialize scroll reveal for all elements with .hidden-text class
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal('.hidden-text');
});



/*
  DOMContentLoaded says This runs as soon as the HTML is fully loaded and the page structure is ready to go.
  It doesn't wait for images, styles, or other files to finish loading

  window.onload waits until everything is loaded if needed.
*/

// Email obfuscation to obstruct spam bots
document.addEventListener("DOMContentLoaded", () => {
  const user = "trevor";
  const domain = "trevorbelt.dev";
  const email = `${user}@${domain}`;
  const link = document.createElement("a");
  link.href = `mailto:${email}`;
  document.getElementById("email-link")?.appendChild(link);   // Adds mailto link to the page
});

// Dynamic footer year adjusts year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

let hasTyped = false;

// ASCII art typing function to display after loading screen is done
    // Function to display art
function typeArt() {
  const vaderArt = `
⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠉⠀⢀⣀⣀⡈⢀⣀⣠⢠⣀⣀⡀⠀⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⣠⣼⣿⣿⣿⡇⢈⣿⣿⢀⣿⣿⣿⣿⣄⡀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⡇⢠⣿⣿⢀⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠰⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⢘⣿⣿⠠⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⡇⠨⣿⣿⠠⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⢀⣠⣴⣾⣿⣿⣝⡻⠿⣿⡇⠐⣿⣿⠠⣿⠿⣻⣿⣿⣿⣭⣍⠃⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣠⣿⣿⣿⣿⣿⡟⠋⠉⠉⠈⢃⠀⣿⣿⡄⣥⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣰⣿⡿⣿⣿⠯⠡⠤⠤⠄⢀⠀⠸⠀⣿⣿⡇⠿⠛⡋⠉⠭⠭⠭⣿⣿⢧⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⢩⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠭⠍⡐⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠄⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⡰⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡯⠽⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢢⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢠⠁⠀⠀⠀⠑⣄⣀⠀⠀⠀⠀⡀⠀⠀⠞⢛⠃⠀⣀⡀⠀⠀⠀⣀⣠⠆⠀⠀⠀⢣⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢀⠃⠀⠀⠀⠀⠀⠀⠉⠙⢛⣉⣉⣀⡀⢠⠶⠲⢦⠀⣀⣈⣉⣙⡋⠉⠁⠀⠀⠀⠀⠀⢆⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠎⠀⠀⠀⠀⠡⡀⠀⠀⢻⣿⣿⣿⠿⢏⡇⠀⠀⠀⣇⡿⢿⣿⣿⣿⡟⠀⠀⠔⠀⠀⠀⠈⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⡜⠀⠀⠀⠀⠀⠀⠘⢄⠀⠸⠟⠋⠀⡠⡊⢱⡆⠀⣶⠈⠢⡀⠈⠙⠿⠁⢀⠊⠀⠀⠀⠀⠀⠸⡀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠰⠁⠀⠀⠀⠀⠀⠀⠀⠈⢂⠀⠀⢠⠞⢰⡇⢸⡇⠀⣿⠀⢰⡌⢢⡀⠀⢀⠂⠀⠀⠀⠀⠀⠀⠀⢡⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡐⠁⠀⠈⠁⠈⠁⠀⠉⠀⠈⠁⠀⠑⢠⣄⠀⠁⠀⠀⠀⠀⠀⠀⠀⠆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠘⠀⠀⠀⠀⠀⣤⣴⣦⠀⠀⠀⠉⢵⡄⠈⠙⠥⠫⠉⠝⠉⠍⠋⠀⢠⠴⠈⠉⠀⢠⣷⣤⠀⠀⠀⠀⠀⢰⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣧⣶⣶⣶⣾⣿⣿⣿⣿⣷⣄⠀⠀⠀⠈⢲⣄⠀⠀⠀⠀⠀⠀⣠⡖⠁⠀⠀⢀⣴⣿⣿⣿⣿⣶⣶⣶⣶⣾⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⠀⠙⠿⣦⡀⢀⣠⠾⠋⠀⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`;

  // Links to HTML target element where the ASCII art will be typed
  const target = document.getElementById("vader");
  let i = 0;    // Initialize the I counter to track the current character index for iterations

  // Prevent re-running and check if target exists
  if (hasTyped || !target) return;
  hasTyped = true;

  // Function to type each character one by one for a typewriter effect
  function typeNext() {
    // Check if there are still characters left to type. I is the counter similar to C++ for loop
    if (i < vaderArt.length) {
      // Add the next character to the target element's text
      target.textContent += vaderArt[i];
      // Increments I which moves to the next character
      i++;
      setTimeout(typeNext, 0);      // Fastest typing animation
    }
  }
    // Calling typeNext again after a short delay to simulate typing
    // 0 ms means it's as fast as possible (can be increased for slower typing)
  typeNext();
}

// Binary rain animation using GSAP
    // Run this code once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const binary = document.querySelector(".binaryBg");
  if (binary) {
    const columns = Math.floor(window.innerWidth / 10);     //Estimates number of rows
    const rows = Math.floor(window.innerHeight / 12);       // and columns

    const binaryLine = "01 ".repeat(columns);               // Create a line of binary digits
    const fullBinary = Array(rows * 10).fill(binaryLine).join("\n"); // 10x screen height to fill screen

    // Set the full binary string as the content of the element
    binary.textContent = fullBinary;

    // Animate the binary background to scroll upward infinitely
    gsap.to(".binaryBg", {
      y: "-100%",       // Move the entire element upward by 100% of its height. No - goes down
      duration: 30,     // Take 30 seconds to complete one scroll cycle
      repeat: -1,       // Repeat infinitely
      ease: "linear"    // Use a constant speed (no acceleration or deceleration)
    });
  }
});

// Splash screen fade-out and reveal main content
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");
  const vader = document.getElementById("vader");

  // Initial state
  splash.style.display = "flex";
  intro.style.visibility = "hidden";
  intro.style.opacity = "0";
  intro.style.display = "flex"; // pre-render intro invisibly
  main.style.display = "none";
  if (vader) vader.style.display = "none";

  // Fade out splash
  setTimeout(() => {
    gsap.to("#splash", {
      opacity: 0,                 // Makes transparent or 'disappears' splash
      duration: 1,                // In 1 second
      onComplete: () => {
        splash.style.display = "none";

        // Set intro to visible, displays the content
        intro.style.visibility = "visible";
        intro.style.opacity = "1";

        // Show ASCII art only after intro is visible
        setTimeout(() => {
          if (vader) {
            // If screen width is smaller then 600px (ie. phones), it skips the ascii art
              if (window.innerWidth >= 600) {
                vader.style.display = "block";
                   typeArt();
                  }
          }
        }, 500); // small delay to ensure intro is rendered
      }
    });
  }, 2000);

  // Reveal main content after 10 seconds. Timed with the ASCII art and
  setTimeout(() => {
    if (main) {
      main.style.display = "block";

    // Animate the main content using GSAP:
    // Start with opacity 0 and 30px lower (y: 30)
    // Animate to opacity 1 and y: 0 over 1 second with a smooth easing
      gsap.fromTo(main,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
  // Change welcome text
    const welcome = document.getElementById("welcome-message");
    if (welcome) {
      welcome.textContent = "Enjoy exploring!";
    }
    }
    // Remove the "loading" class from the body to indicate loading is complete
    document.body.classList.remove("loading");
  }, 9800);
});
       
