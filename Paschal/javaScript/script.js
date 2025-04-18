function openMenu() {
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display = 'flex';
}
 function closeMenu() {
     const sidebar=document.querySelector(".sidebar")
    sidebar.style.display = 'none';
}

  
  let quotes=[
    "BUSINESS WEBSITE.",'BLOG/Content Website.',"Portfolio website",
    ,"Web3 websites","Airdrops website/Project and persale","----------E.T.C-------------------"
]
let AmoutOfQuote = document.getElementById("Quote2");
function randomQuote() {
    let namer = Math.floor(Math.random() * quotes.length);
    return quotes[namer];
}

function getRandomAmount() {
    AmoutOfQuote.innerHTML = randomQuote();
}
getRandomAmount();

setInterval(getRandomAmount, 2000);

function aboutMe() {
    document.getElementById('demo').innerHTML = 'Hi, I\'m OKAFOR PASCHAL, a passionate web developer with a strong background in creating dynamic and user-friendly websites. With several years of experience in the industry, I\'ve developed a keen eye for design and a solid understanding of web development principles.';
}

function Skills() {
    const skills = [
        '💻 HTML: Crafting the structure and content of web pages with clean and semantic markup.',
        '🎨 CSS: Styling websites with modern layouts, animations, and responsive designs.',
        '⚡ JavaScript: Adding interactivity and dynamic functionality to web pages.',
        '📱 Responsive Design: Ensuring websites look great on all devices, from desktops to smartphones.',
        '🔧 Version Control: Using Git and GitHub to manage and collaborate on code efficiently.'
    ];
    document.getElementById("Skill").innerHTML = skills.join('<br>');
}