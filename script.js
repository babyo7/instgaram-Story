
var stt = document.querySelector("#story")
var arr = [

    {
        dp: "1.jpg",
        story: "1.jpg",

    },
    {
        dp: "2.jpg",
        story: "2.jpg",

    },
    {
        dp: "3.jpeg",
        story: "3.jpeg",

    },

    {
        dp: "4.jpeg",
        story: "4.jpeg",

    },

    {
        dp: "5.jpeg",
        story: "5.jpeg",

    },

    {
        dp: "6.jpeg",
        story: "6.jpeg",

    },

    {
        dp: "7.jpeg",
        story: "7.jpeg",

    },

];

var show = "";
arr.forEach(function (ele, idx) {
    show += `  <div class="box">
            
    <img id="${idx}" src="${ele.dp}">
    
</div>`;

   
});


stt.innerHTML = show;

stt.addEventListener("click", function (dets) {
    document.querySelector("#full").style.display="block"
   document.querySelector("#full").style.backgroundImage= `url(${arr[dets.target.id].story})`
   console.log(arr[dets.target.id].story)


   setTimeout(function(){
    document.querySelector("#full").style.display="none"
   },3000)
});

var story = document.getElementById("full")

story.onclick = () =>   document.querySelector("#full").style.display="none"

