function changecolor() {
    const colors=["#FF5733","#33FF57","#3357FF","#F9FF33","#FF33F6"];
    const randomcolor=colors[Math,floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomcolor;
}