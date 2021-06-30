function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove',onMove);
    const output = document.getElementById('result');
    function onMove(event){
        //document.getElementById('gradient').removeEventListener('mousemove',onMove);
        
        const offsetX = event.offsetX;
       // const offsetX = event.pageX - event.target.offsetLeft;
        const percent = Math.floor(offsetX/event.target.clientWidth*100);
        console.log(percent);

        output.textContent = `${percent}%`;
    }
}