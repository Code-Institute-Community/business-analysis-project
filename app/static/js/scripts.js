// Enabling Bootstrap's tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

fadeOutToasts();

function fadeOutToasts(){
    let flashMessages = document.querySelectorAll('.alert.alert-info.flash-message');
    for (let message of flashMessages){
        setTimeout(()=>{message.style.opacity = '0';}, 3000);
        setTimeout(()=>{message.remove();}, 4000);
    }
}