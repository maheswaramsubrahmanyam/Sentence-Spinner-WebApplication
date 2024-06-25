const paragraphs = [
    'JavaScript is a versatile, high-level programming language that is primarily used to create interactive effects within web browsers. It was created by Brendan Eich in 1995 and has since become an essential part of web development, enabling dynamic and interactive web pages.',
    'One of JavaScript\'s key features is its ability to manipulate the Document Object Model (DOM), which represents the structure of a web page. By interacting with the DOM, developers can change the content, structure, and style of a webpage dynamically, allowing for real-time updates and interactive user experiences.',
    'JavaScript is a prototype-based, multi-paradigm language, meaning it supports object-oriented, imperative, and functional programming styles. This flexibility makes it suitable for a wide range of applications, from simple website enhancements to complex web applications and server-side programming.',
    'In addition to being embedded in web browsers, JavaScript can be run on servers using environments like Node.js. Node.js allows JavaScript to be used for server-side scripting, enabling developers to build scalable network applications with real-time capabilities, such as chat applications and online gaming.',
    'JavaScript has a large ecosystem of libraries and frameworks that simplify the development process and extend its capabilities. Popular libraries like jQuery streamline DOM manipulation, while frameworks like React, Angular, and Vue.js provide powerful tools for building complex single-page applications (SPAs).',
    'One of the strengths of JavaScript is its community and ecosystem. With a vast number of open-source projects, tools, and resources available, developers can find solutions to common problems, learn best practices, and stay updated with the latest advancements in the language.',
    'JavaScript is continually evolving, with new features and improvements being added through ECMAScript (ES) standards. ES6, also known as ECMAScript 2015, introduced significant enhancements like arrow functions, classes, modules, and template literals, making the language more powerful and easier to use.',
    'Asynchronous programming is an important aspect of JavaScript, enabling the execution of non-blocking operations. Features like callbacks, promises, and async/await syntax allow developers to handle asynchronous tasks such as API requests, file handling, and timers efficiently.',
    'JavaScript security is a critical consideration, especially in web development. Common vulnerabilities include cross-site scripting (XSS) and cross-site request forgery (CSRF). Understanding and implementing security best practices, such as input validation and secure coding techniques, are essential to protect applications from attacks.',
    'The future of JavaScript looks promising, with ongoing development and strong support from major tech companies and the open-source community. As web technologies advance and the demand for interactive, user-friendly applications grows, JavaScript will continue to play a central role in shaping the digital landscape.'
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

function generate() {
    if (item.value == 0) {
        alert("The Value Cannot be Zero");
    } else if (item.value > paragraphs.length) {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `<p>${paragraphs[randomIndex]}</p>`;
    } else {
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);
        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphHTML = selectedParagraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
        dataContainer.innerHTML = paragraphHTML;
    }
}