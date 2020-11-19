// Create a new div bloc
newDiv = document.createElement("div");

// Modify \style and add a text node
newDiv.style.cssText = 'background:#7eed9b;';
newDiv.append(document.createTextNode("Success!"));

// Add div to the top of the <body> section and sned a message to the console
document.body.prepend(newDiv);
console.log("Success!");