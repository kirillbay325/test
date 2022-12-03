// let god = prompt("Введите какого года фильм") 
 // let nazvanie = prompt("Введите название фильма")
 
// async function getBatman(){ 
//     let url = ("http://www.omdbapi.com/?apikey=d2ed67d1&t=Batman&y="god+) 
//     let response = await fetch(url);  
//     let answer = await response.text();  
//     document.write(answer) 
// }  


// getBatman()



// async function getUser() {  
//     let url = ("https://api.github.com/users/siniiitsa"); 
//     let response = await fetch(url); 
//     let answer = await response.json(); 
//     alert(answer.login,answer.id) 
    
//   } 

//   getUser()


// async function film() {
//     let url = ("https://api.github.com/users/siniiitsa");
//     let response = await fetch(url);
  
//     let answer = await response.json(); // читаем ответ в формате JSON
  
  
//     p = document.createElement("p")
//     p.innerHTML = answer.id;
//     document.body.append(p)
//     p1 = document.createElement("p")
//     p1.innerHTML = answer.login;
//     document.body.append(p1)
//     p2 = document.createElement("p")
//     p2.innerHTML = answer.url;
//     document.body.append(p2)
  
  
//   }

//   film()




let god = prompt("Введите какого года фильм") 
let nazvanie = prompt("Введите название фильма")
 
async function getBatman(){ 
    let url = ("http://www.omdbapi.com/?apikey=d2ed67d1&t="+nazvanie+"&y="+god) 
    let response = await fetch(url);  
    let answer = await response.json();  
 
    p3 = document.createElement("p")
    p3.innerHTML = answer.Title  ;
    document.body.append(p3)
    p = document.createElement("p")
    p.innerHTML = answer.Year;
    document.body.append(p)
    p1 = document.createElement("p")
    p1.innerHTML = answer.Actors;
    document.body.append(p1)
    p2 = document.createElement("p")
    p2.innerHTML = answer.Plot  ;
    document.body.append(p2)
    img = document.createElement('img');
     img.style.width = "100%";
     img.style.height = "100px";
     img.style.marginTop = "50px"
     img.style.marginLeft = "50px"
    //  img.src = "./img/logoalt.png";
    img.src = answer.Poster;
    document.body.prepend(img)
   

    
}  
  

getBatman()


