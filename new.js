const choices=document.querySelectorAll(".choice")
let user1=0;
let comp=0;
let msg=document.querySelector(".msg")
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        const id=choice.getAttribute("id")
        console.log("User-",id);
        play(id);
    })
})
const computer =()=>{
    let a=Math.random();
    let b=Math.floor(a*2);
    let c=["scissor","paper","rock"]
    console.log("computer-",c[b]);
   return c[b];

}
const draw=()=>{
    console.log("Draw");
    msg.innerText="Draw Play Again!!!"
    msg.style.backgroundColor="purple"
    
}
const change=(user)=>{
    if(user){
        console.log("You won")
        msg.innerText="You won"
       msg.style.backgroundColor="green"
       user1++;
       document.querySelector(".user").innerText=user1

    }
    else{
        console.log("You lose")
        msg.innerText="You lose"
        msg.style.backgroundColor="red"
        comp++;
        document.querySelector(".comp").innerText=comp
    }

}
const play=(id)=>{
     let v=computer();
    if(v===id)
    draw();
else{
    let user=true;
    if(v==="scissor")
    user=(id==="rock")?true:false

    else if(v==="paper")
    user=(id==="rock")?false:true

    else if(v==="rock")
    user=(id==="scissor")?false:true

    else if(v==="paper")
    user=(id==="scissor")?true:false

    else if(v==="rock")
    user=(id==="paper")?true:false

   else  if(v==="scissor")
    user=(id==="paper")?false:true
    change(user)
   
}
}