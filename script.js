setInterval(function(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then((res)=>res.json())
    .then((res)=>{
      document.getElementById("text").innerText = res.value;
    })
}, 8000)

