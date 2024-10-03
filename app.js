const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// JavaScript: Chatbot functionality with if-else statements

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBody = document.getElementById('chatbot-body');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.addEventListener('click', () => {
  chatbotBody.classList.toggle('open');
});

chatbotSend.addEventListener('click', () => {
  const message = chatbotInput.value;
  if (message.trim() !== '') {
    appendMessage('You', message);
    chatbotInput.value = '';
    scrollToBottom();

    setTimeout(() => {
      const response = getChatbotResponse(message);
      appendMessage('Chatbot', response);
      scrollToBottom();
    }, 500);
  }
});

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chatbot-message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbotMessages.appendChild(messageElement);
}

function scrollToBottom() {
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getChatbotResponse(userInput) {
  // Add your chatbot logic using if-else statements for different responses
  userInput = userInput.toLowerCase().trim();

 if (userInput.includes('services') || userInput.includes('offerings')) {
    return "Aspyr offers web development, mobile app development, UI/UX design, digital marketing, and API integration to create seamless user experiences.";
} 
else if (userInput.includes('quality')) {
    return "Aspyr ensures quality through best practices in software development, rigorous testing, and continuous user feedback.";
} 
else if (userInput.includes('mobile app development')) {
    return "Aspyr uses technologies like React Native, Flutter, and Swift for high-performance mobile applications.";
} 
else if (userInput.includes('API integration')) {
    return "Yes, Aspyr specializes in building and integrating REST APIs for smooth data communication.";
} 
else if (userInput.includes('UI/UX design')) {
    return "Aspyr follows user-centric design principles to create visually appealing and responsive interfaces.";
} 
else if (userInput.includes('project management')) {
    return "Aspyr utilizes agile project management methodologies for flexibility and client collaboration.";
} 
else if (userInput.includes('support and maintenance')) {
    return "Yes, Aspyr provides ongoing support and maintenance services for optimal application performance.";
} 
else if (userInput.includes('contact')) {
    return "You can reach Aspyr through the Contact page on their website for project inquiries.";
} 
else if (userInput.includes('industries')) {
    return "Aspyr serves various industries, including eCommerce, healthcare, education, and finance.";
} 
else if (userInput.includes('timeline') || userInput.includes('project duration')) {
    return "The project timeline varies based on complexity, and Aspyr provides a detailed estimate during the consultation.";
} 
else {
    return "I'm sorry, I couldn't understand that. Please try again.";
}


}

// JavaScript: Code for closing the chatbot container

const chatbotClose = document.getElementById('chatbot-close');

chatbotClose.addEventListener('click', () => {
  chatbotBody.classList.remove('open');
});

// Function to update the viewer count
function updateViewerCount() {
	let countElement = document.getElementById('count');
	let count = parseInt(countElement.innerText);
  
	// Increment the count
	count++;
  
	// Update the count on the webpage
	countElement.innerText = count;
  }
  
  // Call the updateViewerCount function when the webpage is loaded
  window.onload = function() {
	updateViewerCount();
  };
  
