function encodeAndDecodeMessages() {
    let buttonsElement = document.querySelectorAll('button');
    let btnEncoding =buttonsElement[0];
    let btnDecoding = buttonsElement[1];

    let textsElement =document.querySelectorAll('textarea');
    let input = textsElement[0];
    let output= textsElement[1];
    
    
    btnEncoding.addEventListener('click',encoding);
    btnDecoding.addEventListener('click',decoding);
    
    function encoding(){
        let btnEncoding = input.value
        .split('')
        .map((ch)=>ch.charCodeAt())
        .map((ch)=>String.fromCharCode(ch+1))
        .join('');
        
        input.value = '';
        output.value = btnEncoding;
    }
    
    function decoding(){
        let btnDecoding = output.value
        .split('')
        .map((ch)=>ch.charCodeAt())
        .map((ch)=>String.fromCharCode(ch-1))
        .join('');
        output.value = btnDecoding;
    };
}