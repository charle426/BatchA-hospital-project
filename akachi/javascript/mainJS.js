window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav')

    if(window.scrollY * document.body.offsetHeight >= 2000){
        nav.classList.add('navFixed');
        nav.classList.remove('nav');
    }else{
        // nav.classList.remove('nav-top-color');
        nav.classList.add('nav');
        nav.classList.remove('navFixed');
    }
})

if(document.readyState){
    setInterval(() => {
    document.getElementById('containLoaders').remove()
    }, 2000);
}



console.log(window.scrollY * document.body.offsetHeight)

var watchingWindows = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
                // entry.target.classList.remove('hidden')
            }
        })
    }
)

let slide = document.querySelectorAll('.hidden')
slide.forEach((el) => watchingWindows.observe(el))


    const successCallback = (position) => {
        console.log(position);
      };
      
      const errorCallback = (error) => {
        console.log(error);
        alert('Your Location is needed to give you accurate directions')
        if(error){
           navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        }
      };

      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
      navigator.geolocation.watchPosition(successCallback, errorCallback, options);
      

var availableHospitals = ["Living Word Hospital", 
                "Clehansan Hospital And Maternity",
                "Kelechi Hospital And Maternity",
                "Ndubuisi Hospital Limited",
                "Care Hospital",
                "Simeone Specialist Hospital",
                "Doctor Ezuma James Ezuma",
                "Abia State University Teaching Hospital",
                "New Era Hospital",
            ]
                 
const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById('searchInput');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableHospitals.filter((keyword) => {
          return  keyword.toLowerCase().includes(input.toLowerCase())
        })
    }
    displayHospital(result);

    if(!result.length){
        resultBox.innerHTML = ' ';
    }
}

function displayHospital(result){
    let content = result.map((list) => {
        return "<li onclick = selectInput(this)>" + list + "</li>"
    })

    resultBox.innerHTML = "<ul>" + content.join(' ') + "</ul>"
}                    

function selectInput(listed){
    inputBox.value = listed.innerHTML;
    resultBox.innerHTML = ' '
}

const searchForm = document.querySelector(".searchForm");
const hospitalNames = document.querySelectorAll(".hospitalNames")

function searchAction(){
    let inputText = inputBox.value;
    let hospitalNameText = hospitalNames.innerText
    if(inputText === hospitalNameText){
        searchForm.setAttribute("action", "hospitalNameText.trim('-') + '.html'")
    }
}