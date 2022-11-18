function addBubble(node: HTMLElement, coordX: number, coordY: number, component: string) {
    const bubble = document.createElement(component);

    bubble.classList.add("bubble__circle");
    bubble.style.left = `${coordX}px`;
    bubble.style.top = `${coordY}px`;

    node.appendChild(bubble);
    setTimeout(()=>{
        node.removeChild(bubble)
    },1000)
   
}

function createBubble(node: HTMLElement, pageX: number, pageY: number, component: string = 'div') {
    const offset = node.getBoundingClientRect();

    const coordX = pageX - offset.left;
    const coordY = pageY - offset.top;

    addBubble(node, coordX, coordY,component);
}


export default createBubble