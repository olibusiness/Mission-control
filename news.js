document.addEventListener('DOMContentLoaded', 

function api(){
    
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then(Response => Response.json())
    .then(news =>{
       console.log(news)

       // make border box have a look at other news website

       let a = document.createElement('a');
       let link = document.createTextNode(news[0].newsSite)
       a.appendChild(link);
       a.href =  news[0].url
       document.body.appendChild(a)

       const image1 = new Image(250)
       image1.src = news[0].imageUrl
       document.body.appendChild(image1);

       let myElement = document.createElement('h3')
       myElement.innerText = news[0].title
       myElement.append(a)
       document.body.appendChild(myElement)

       
       let div = document.createElement('div')
       div.classList.add('NewsBor')
       div.append(image1)
       div.append(myElement)
       div.append(a)
       document.body.appendChild(div)

       //-------------------------------------

       let a1 = document.createElement('a');
       let link1 = document.createTextNode(news[3].newsSite)
       a1.appendChild(link1);
       a1.href =  news[3].url
       document.body.appendChild(a1)

       const image2 = new Image(250)
       image2.src = news[3].imageUrl
       document.body.appendChild(image2);

       let myElement1 = document.createElement('h3')
       myElement1.innerText = news[3].title
       document.body.appendChild(myElement1)
       
       let div1 = document.createElement('div')
       div1.classList.add('NewsBor1')
       div1.append(image2)
       div1.append(myElement1)
       div1.append(a1)
       document.body.appendChild(div1)

       //--------------------------------------

       let a2 = document.createElement('a');
       let link2 = document.createTextNode(news[6].newsSite)
       a2.appendChild(link2);
       a2.href =  news[6].url
       document.body.appendChild(a2)

       const image3 = new Image(250)
       image3.src = news[6].imageUrl
       document.body.appendChild(image3);

       let myElement2 = document.createElement('h3')
       myElement2.innerText = news[6].title
       document.body.appendChild(myElement2)
       
       let div2 = document.createElement('div')
       div2.classList.add('NewsBor1')
       div2.append(image3)
       div2.append(myElement2)
       div2.append(a2)
       document.body.appendChild(div2)

       //------------------------------------

       let a3 = document.createElement('a');
       let link3 = document.createTextNode(news[7].newsSite)
       a3.appendChild(link3);
       a3.href =  news[7].url
       document.body.appendChild(a3)

       const image4 = new Image(250)
       image4.src = news[7].imageUrl
       document.body.appendChild(image4);

       let myElement3 = document.createElement('h3')
       myElement3.innerText = news[7].title
       document.body.appendChild(myElement3)
       
       let div3 = document.createElement('div')
       div3.classList.add('NewsBor1')
       div3.append(image4)
       div3.append(myElement3)
       div3.append(a3)
       document.body.appendChild(div3)
       //------------------------------------

       let a4 = document.createElement('a');
       let link4 = document.createTextNode(news[9].newsSite)
       a4.appendChild(link4);
       a4.href =  news[9].url
       document.body.appendChild(a4)

       const image5 = new Image(250)
       image5.src = news[9].imageUrl
       document.body.appendChild(image5);

       let myElement4 = document.createElement('h3')
       myElement4.innerText = news[9].title
       document.body.appendChild(myElement4)
       
       let div4 = document.createElement('div')
       div4.classList.add('NewsBor1')
       div4.append(image5)
       div4.append(myElement4)
       div4.append(a4)
       document.body.appendChild(div4)

       //-------------------------------------

       let a5 = document.createElement('a');
       let link5 = document.createTextNode(news[2].newsSite)
       a5.appendChild(link5);
       a5.href =  news[2].url
       document.body.appendChild(a5)

       const image6 = new Image(250)
       image6.src = news[2].imageUrl
       document.body.appendChild(image6);

       let myElement5 = document.createElement('h3')
       myElement5.innerText = news[2].title
       document.body.appendChild(myElement5)
       
       let div5 = document.createElement('div')
       div5.classList.add('NewsBor1')
       div5.append(image6)
       div5.append(myElement5)
       div5.append(a5)
       document.body.appendChild(div5)
       //-------------------------------------

       let container = document.createElement('div')
       container.classList.add('container')
       container.append(div)
       container.append(div1)
       container.append(div2)
       container.append(div3)
       container.append(div4)
       container.append(div5)
       document.body.append(container)
    })
})