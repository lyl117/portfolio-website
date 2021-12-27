const content = "Hi!\n I'm YurimLee\nI'm a Frontend Developer"
const text = document.getElementById("dynamic");
let index = 0;
let txt = "";

function typing(){
    if(index < content.length){
    txt += content[index];
    text.innerText = txt;
    index++
    }
}
setInterval(typing,320)



// function typing(){
//     text.textContent += content[index++];
//     if(index > content.length){
//         text.textContent = ""
//         index=0;
//     }
// }