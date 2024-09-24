const elements = document.getElementById("root").querySelectorAll("body *");

console.log(`BODY inneholder ${elements.length} HTML elementer`);

elements.forEach(e => {
	console.log(`Tagg ${e.tagName}: ${e.textContent}`)
})
