window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

var menu = document.getElementById('side_menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

document.getElementById('small_menu').addEventListener("click", function(){
    if (menu.style.display === 'none'){
        menu.style.display = 'block'
    }
    else(menu.style.display = 'none')
    
});

closeBtn.addEventListener("click",()=>{
    close.classList.remove('active');
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzSMQ6ocf95-RMzcPgWpWLNBJ6z8a7m7RK1TueXHrV2z8GaTwLD4UxyMmRCSyKwpmeH/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>  {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('error!', error.message))
    });
    
    
function initMap() {
    const myLatLng = {lat: 0.603499, lng: 32.655239};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });
    //add a marker to the map
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Our location"
    });
}
