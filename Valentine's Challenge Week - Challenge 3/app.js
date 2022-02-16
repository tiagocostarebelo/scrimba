document.getElementById("btn").addEventListener("click", correct)


function correct() {
    let paragraph = document.getElementById('paragraph').value;
    if (paragraph == '') {
        alert ('Cmon, read the placeholder text. Type something');
    } else {
        let undercaseParagraph = paragraph.toLowerCase();
        let splitWordsParagraph = undercaseParagraph.split(' ');
        for (let i = 0; i < splitWordsParagraph.length; i++) {
            splitWordsParagraph[i] = splitWordsParagraph[i].charAt(0).toUpperCase() + splitWordsParagraph[i].slice(1);
        }
        const capitalizedParagraphs = splitWordsParagraph.join(" ");
        const correctedParagraph = document.getElementById('paragraph_corrected');
        correctedParagraph.textContent = capitalizedParagraphs;
    } 
    
}
