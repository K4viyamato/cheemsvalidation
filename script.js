
//nputfields
var fname = document.getElementById('fname')
var password = document.getElementById('pwd')
var email = document.getElementById('email')

//button
var button = document.getElementById('btn');


//image
var image1 = document.getElementById('doge');
var image2 = document.getElementById('doge1');
var image3 = document.getElementById('doge2');

image2.style.display="none";
image3.style.display="none";


button.addEventListener("mouseover",()=>{

    const validat = fname.value === "" || password.value ==="" || email.value === "";

    const valiEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);


if(validat || !valiEmail ){

    //css changes
    button.classList.toggle("move");
    button.style.backgroundColor="#ff4742";
    button.style.color="white";
    button.style.border="none";
    button.style.transition="0.5s";
    
    
    //cheems
    image1.style.display="none";
    image2.style.display="block";
    image3.style.display="none";

    button.onclick = ()=>{alert('check again')}
    
}else{
    
    //css changes
    
    button.style.backgroundColor="#2c974b";
    button.style.color="white";
    button.style.border="none";
    button.style.left="75px";
    
    
    
    
    
    //cheems
    image2.style.display="none";
    image1.style.display="block";
    image3.style.display="none";
    
    button.onclick = ()=>(location.href = "https://youtu.be/dQw4w9WgXcQ");
}

})

action = (element)=>{

    if(element==password){

        element.addEventListener("focus",()=>{

            image1.style.display="none";
            image2.style.display="none";
            image3.style.display="block";
        
        })
        
        element.addEventListener("focusout", () => {
            image3.style.display="none";
            image2.style.display="block";
            image1.style.display="none";
        });
        
    }
    
    else{
        
        element.addEventListener("focus", () => {

            
            
            image3.style.display="none";
            image2.style.display="block";
            image1.style.display="none";
        });

    }
    
}




action(password);
action(fname);
action(email);














