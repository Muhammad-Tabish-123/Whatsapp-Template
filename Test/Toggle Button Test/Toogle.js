
//---------------------- Using variables ----------------------

// let btn=document.querySelector('button');
// let div=document.querySelector('div');
// btn.addEventListener('click',() =>{
//     if(div.style.display==="none")
//     div.style.display="block";
//     else
//     div.style.display="none";
// })

//---------------------- End ----------------------



//---------------------- Only query selector ----------------------

document.querySelector('button').addEventListener('click',() =>{
    if(document.querySelector('div').style.display==="block")
    document.querySelector('div').style.display="none";
    else
    document.querySelector('div').style.display="block";
})

//---------------------- End ----------------------



//---------------------- GetElementById=>addEventListener ----------------------

document.getElementById('Toggle').addEventListener('click',()=>{
if(document.getElementById('box').style.display==="block")
document.getElementById('box').style.display="none";
else
document.getElementById('box').style.display="block";
})

//---------------------- End ----------------------

function Toggle(){
    if(document.getElementById('box2').style.display==="block")
document.getElementById('box2').style.display="none";
else
document.getElementById('box2').style.display="block";
}