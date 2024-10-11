// Typing Effect for Welcome Message
const typedText = "Welcome to my Portfolio";
let i = 0;
function typeWriter() {
    if (i < typedText.length) {
        document.getElementById("typed-text").innerHTML += typedText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
// Progress Bar Functionality
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';
  });
  

// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
