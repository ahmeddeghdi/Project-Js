// const resultElement = document.querySelector("#result")

// async function getFetch(){
//   let req = await fetch(`https://jsonplaceholder.typicode.com/posts`).catch("sucesss")
//   let data = await req.json()
//   console.log(data);
//   DisplayShow()
  
//   ArrayList = data
// }

// getFetch()

// let ArrayList = []
// function DisplayShow(){
//   var temp = ""
//   for(let i =0; i < ArrayList.length; i++){
//     temp+=`   <div class="col-md-4 text-center">
//                 <div class="border shadow ">
//                     <img src="" alt="">
//                     <h5>${ArrayList[i].userId}</h5>
//                     <p>${ArrayList[i].id}</p>
//                     <p>${ArrayList[i].title}</p>
//                     <p>${ArrayList[i].body}</p>
//                 </div>
//             </div> `
    
//   }
//   document.getElementById("result").innerHTML = temp

// }
//   // window.prompt("result data show")


  const resultElement = document.querySelector("#result");
let ArrayList = [];

async function getFetch() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    ArrayList = await response.json();
    DisplayShow();
  } catch (error) {
    console.error("Error fetching posts:", error);
    document.getElementById("result").innerHTML = "<p>حدث خطأ أثناء جلب البيانات</p>";
  }
}

getFetch();

function DisplayShow() {
  const temp = ArrayList.map(item => `
    <div class="col-md-4 text-center">
      <div class="border shadow">
        <img src="" alt="">
        <h5>${item.userId}</h5>
        <p>${item.id}</p>
        <p>${item.title}</p>
        <p>${item.body}</p>
      </div>
    </div>
  `).join("");

  document.getElementById("result").innerHTML = temp;
}