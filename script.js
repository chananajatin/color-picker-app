const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxBox = 32;
const generatepalette = () => {
    container.innerHTML = " ";
  for (let i = 0; i < maxBox; i++) {

    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="box" style = "background: ${randomHex}"></div>
        <span class="hex-val">${randomHex}</span>`;
    color.addEventListener("click" , () => copyColor(color , randomHex));
    container.appendChild(color);
  }
};
generatepalette();
const copyColor = (e , hexVal) => {
     const colorElement = e.querySelector(".hex-val");
     navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "copied"; 
        setTimeout(() => colorElement.innerText = hexVal , 1000 )
     }).catch(()=>alert("failed to copy the color code!"));
}
refreshBtn.addEventListener("click", generatepalette);
