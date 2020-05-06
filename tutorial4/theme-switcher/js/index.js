const defaultTheme = () => {
   document.querySelector('#theme').className = "container";
};

const oceanTheme = () => {
   document.querySelector('#theme').className = "container ocean";
};

const desertTheme = () => {
    document.querySelector('#theme').className = "container desert";
};

document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;
