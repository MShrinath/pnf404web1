let count = 0; // Initialize the counter variable
const counterElement = document.getElementById('counter'); // Get the counter display element
const incrementButton = document.getElementById('increment'); // Get the increment button element
const themeToggle = document.getElementById('theme-toggle'); // Get the theme toggle button element

// Counter functionality with milestone celebrations
incrementButton.addEventListener('click', () => {
  count++; // Increase count by 1
  counterElement.textContent = count; // Update the displayed counter value

  incrementButton.style.transform = 'scale(0.95)'; // Briefly shrink the button for a click effect
  setTimeout(() => incrementButton.style.transform = '', 100); // Reset button size after 100ms

  // Milestone celebrations with special messages and emoji showers
  if (count === 50) {
    celebrate('🎉 Wow! You\'ve reached 50! Keep going!');
    emojiShower();
  } else if (count === 100) {
    celebrate('🌟 Amazing! 100 clicks! The flag must be close...');
    emojiShower();
  } else if (count === 200) {
    celebrate('🚀 200! You\'re unstoppable!');
    emojiShower();
  } else if (count === 500) {
    celebrate('🏆 500! You\'re really determined to find that flag!');
    emojiShower();
  } else if (count === 1000) {
    celebrate('👑 1000! You\'re a clicking legend!');
    emojiShower();
  }

  // Display motivational messages at every 75 clicks
  if (count % 75 === 0) {
    celebrate(randomMotivation());
  }

  // Add floating emojis every 25 clicks
  if (count % 25 === 0) {
    addFloatingEmoji();
  }
});

// Toggle dark mode theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // Toggle dark mode class on body
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️'; // Update button icon
});

// Display a temporary celebration message
function celebrate(message) {
  const celebration = document.createElement('div'); // Create a new div element
  celebration.textContent = message; // Set the message text
  celebration.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--button-bg, #f1c40f);
    padding: 20px; /* FLAGPART3 */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 1000;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s forwards;
  `;
  document.body.appendChild(celebration); // Add the message to the page
  setTimeout(() => celebration.remove(), 3000); // Remove it after 3 seconds
}

// Add a floating emoji animation
function addFloatingEmoji() {
  const emojis = ['🎈', '⭐', '🎉', '✨', '🌟', '🚀', '🏆', '💫']; // List of possible emojis
  const emoji = document.createElement('div'); // Create a new div element
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Pick a random emoji
  emoji.style.cssText = `
    position: fixed;
    left: ${Math.random() * 100}vw;
    bottom: -20px;
    font-size: 2rem;
    pointer-events: none;
    animation: float-up 3s ease-out forwards;
  `;
  document.body.appendChild(emoji); // Add emoji to the page
  setTimeout(() => emoji.remove(), 3000); // Remove after 3 seconds
}

// Generate a random motivational message
function randomMotivation() {
  const messages = [
    '🔥 Keep clicking! The flag is near!',
    '💪 You got this! More clicks = More fun!',
    '🎯 Almost there! Click your way to glory!',
    '🚀 Click faster! Who knows what’s at the end?',
    '🏁 Just a few more clicks… What will happen next?'
  ];
  return messages[Math.floor(Math.random() * messages.length)]; // Return a random message
}

// Create an emoji shower effect
function emojiShower() {
  const emojis = ['🎈', '⭐', '🎉', '✨', '🌟', '🚀', '🏆', '💫']; // List of emojis
  
  for (let i = 0; i < 30; i++) { // Generate 30 emojis at random positions
    setTimeout(() => {
      const emoji = document.createElement('div'); // Create a new emoji element
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Random emoji
      emoji.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        font-size: 2rem;
        pointer-events: none;
        opacity: 1;
        animation: fadeOut 2s forwards;
      `;
      document.body.appendChild(emoji); // Add emoji to the page
      setTimeout(() => emoji.remove(), 2000); // Remove after 2 seconds
    }, i * 50); // Delay each emoji slightly for a shower effect
  }
}

// Add CSS animations for floating and fading effects
const style = document.createElement('style');
style.textContent = `
  @keyframes float-up {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
  }
  @keyframes fadeOut {
    to { opacity: 0; transform: translate(-50%, -60%); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style); // Append the styles to the document

// Initial animation for counter fade-in
setTimeout(() => {
  counterElement.style.opacity = '0'; // Initially set opacity to 0
  counterElement.style.display = 'block'; // Ensure it is visible
  counterElement.style.animation = 'fadeIn 1s forwards'; // Apply fade-in animation
}, 500);
