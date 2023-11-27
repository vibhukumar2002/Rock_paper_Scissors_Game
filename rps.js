window.onload
{
   let userchoicediv=document.querySelectorAll(".rps")
   
   function computerchoice(){
    let n=userchoicediv.length
    let res=Math.floor(Math.random()*n)
    if(res==0){return("r")}
    else if (res==1){ return("p")}
    else{return("s")}
    
   }
   let s=0
   userchoicediv.forEach(i=>{
     i.onclick=()=>
     {
        let bc=document.querySelector("#bottomcontainer")
        bc.style.display="block"
        let a 
        cchoice=computerchoice()
        uchoice=i.id
        console.log(cchoice,uchoice)
        let youchoosediv=document.querySelector("#youchoose")
        let systemchoosediv=document.querySelector("#systemchoose")
        youchoosediv.innerHTML=uchoice
        systemchoosediv.innerHTML=cchoice
        let resultdiv= document.querySelector("#result")
        

        if(uchoice=="r" && cchoice=="p"){
            resultdiv.innerHTML="YOU LOSE "
        }
        else if(uchoice=="r" && cchoice=="r"){
            resultdiv.innerHTML="ITS A DRAW "
        }
        else if(uchoice=="r" && cchoice=="s"){
            resultdiv.innerHTML="YOU WIN "
            s+=1
        }


        else if(uchoice=="p" && cchoice=="r"){
            resultdiv.innerHTML="ITS A WIN "
            s+=1
        }
        else if(uchoice=="p" && cchoice=="p"){
            resultdiv.innerHTML="ITS A DRAW "
        }
        else if(uchoice=="p" && cchoice=="s"){
            resultdiv.innerHTML="U lose "
        }
        
        
        else if(uchoice=="s" && cchoice=="s"){
            resultdiv.innerHTML="ITS A DRAW "
        }
        else if(uchoice=="s" && cchoice=="p"){
            resultdiv.innerHTML="YOU WIN "
            s+=1
        }
        else{
            resultdiv.innerHTML="YOU LOSE"
        }

        let scorediv=document.querySelector("#score")
        scorediv.innerHTML=s

       let cleardiv=document.querySelector("#reset")
       cleardiv.onclick=()=>
       {
        s=0
        bc.style.display="none"
       }
     }
   })

}