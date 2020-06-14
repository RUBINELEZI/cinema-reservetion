let movieName = document.getElementById('movie');
let ticketPrice = +movieName.value;
const contain = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.booked)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const name = document.getElementById('moviename');
let love = document.querySelectorAll('love1');
let mn = document.querySelectorAll('.mn');


//update function\
function updateCount(){
    let selectedcount = document.querySelectorAll('.row .seats.selected');
    let selectedlove = document.querySelectorAll('.row .seats.selected.love');
    count.innerHTML = selectedcount.length + selectedlove.length;
    total.innerHTML = ticketPrice * (selectedcount.length + selectedlove.length);
    updateName() 
}

function updateName(selTag) {
    let x = selTag.options[selTag.selectedIndex].text;
    name.innerHTML = x;
  }

movieName.addEventListener('change', e => {
    ticketPrice = +e.target.value[0];
    updateCount()
})


//add event listener
contain.addEventListener('click', e => {
    if(e.target.classList.contains('seats')  && !e.target.classList.contains('booked')){
        e.target.classList.toggle('selected') 
    }
    updateCount();
});

movieName.addEventListener('change', e => {
    ticketPrice = +e.target.value;
     mn = e.target.innerText;
    console.log(mn);
    updateCount()
})

