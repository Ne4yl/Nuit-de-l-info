/****************Le title qui change de nom****************/

let docTitle = document.title; window.addEventListener("blur", () => { document.title = "(ಠ_ಠ) Eh Revient !";
});
window.addEventListener("focus", () => { document.title = docTitle;
});