let str="";
let button=document.querySelectorAll(".btn");
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target.innerHTML=="="){
            str=eval(str);
             document.querySelector(".input").value=str;
        }
         else
         if(e.target.innerHTML=="AC"){
      str="";
        document.querySelector(".input").value=str;
         }
        else{
 str=str+e.target.innerHTML;
        document.querySelector(".input").value=str;
        }
       
    })
})
