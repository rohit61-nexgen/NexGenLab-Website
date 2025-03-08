document.getElementById('talk-expert').addEventListener('click', () => {
  window.location.href = 'https://wa.me/8112357136'; // Replace with company WhatsApp number
});
document.getElementById('talk-expert').addEventListener('click', () => {
  window.location.href = 'https://wa.me/8112357136'; // Replace with your WhatsApp number
});
// Ratings Section
const stars = document.querySelectorAll('.star');
const feedback = document.querySelector('.rating-feedback');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i <= index);
    });
    feedback.textContent = `You rated us ${index + 1} star(s). Thank you!`;
  });
});

// Message Form Submission
document.getElementById('message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  event.target.reset();
});


// Auto-Sliding Office Images
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 5 seconds
setInterval(autoSlide, 5000);



// Show and Hide Menu
function showMenu() {
  document.querySelector('.light-bulb-icon').style.display = 'block';
  document.getElementById('menu-dropdown').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.light-bulb-icon').style.display = 'none';
  document.getElementById('menu-dropdown').style.display = 'none';
}

// Change Background Color
function changeBackground(mode) {
  const body = document.body;
  if (mode === 'light') {
    body.style.backgroundColor = '#f0f0f0'; // Light mode background
    body.style.color = '#000'; // Dark font for light background
  } else {
    body.style.backgroundColor = '#001f3f'; // Dark mode background
    body.style.color = '#fff'; // Light font for dark background
  }
}





// Randomize Testimonials Display
document.addEventListener('DOMContentLoaded', () => {
  const testimonialsContainer = document.querySelector('.testimonials-container');
  const testimonials = Array.from(testimonialsContainer.children);

  // Shuffle testimonials array
  for (let i = testimonials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [testimonials[i], testimonials[j]] = [testimonials[j], testimonials[i]];
  }

  // Append shuffled testimonials back to container
  testimonials.forEach((testimonial) => testimonialsContainer.appendChild(testimonial));
});






// Chatbot Toggle
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("close-chatbot");
const chatbotBody = document.getElementById("chatbot-body");
const chatbotInput = document.getElementById("chatbot-input");
const sendBtn = document.getElementById("send-btn");

// Open Chatbot
chatbotToggle.addEventListener("click", () => {
  chatbot.style.display = "flex";
  chatbotToggle.style.display = "none";
});

// Close Chatbot
closeChatbot.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatbotToggle.style.display = "block";
});

// OpenAI API Key and Endpoint
const OPENAI_API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenAI API key
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// Send Message
sendBtn.addEventListener("click", async () => {
  const userMessage = chatbotInput.value.trim();
  if (userMessage !== "") {
    // Display user message
    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "chatbot-message user-message";
    userMsgDiv.textContent = userMessage;
    chatbotBody.appendChild(userMsgDiv);

    chatbotInput.value = "";
    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    // Fetch response from OpenAI
    try {
      const botResponse = await fetchOpenAIResponse(userMessage);
      const botMsgDiv = document.createElement("div");
      botMsgDiv.className = "chatbot-message bot-message";
      botMsgDiv.textContent = botResponse;
      chatbotBody.appendChild(botMsgDiv);
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    } catch (error) {
      const errorMsgDiv = document.createElement("div");
      errorMsgDiv.className = "chatbot-message bot-message";
      errorMsgDiv.textContent =
        "I'm sorry, something went wrong. Please try again later.";
      chatbotBody.appendChild(errorMsgDiv);
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
  }
});

// Fetch OpenAI Response
async function fetchOpenAIResponse(message) {
  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4", // Use "gpt-3.5-turbo" if you want a lighter model
      messages: [{ role: "user", content: message }],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch OpenAI response");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}









// Select the menu toggle button and nav links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add event listener for toggling the menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


