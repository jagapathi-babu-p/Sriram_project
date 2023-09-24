// Show menu

const showMenu=(toggleId, navId) => {
const toggleId = document.getElementById(toggleId),
nav = document.getElementById(navId)

if(toggle && nav){
     toggle.addEventListener('click', () =>{
         nav.classList.toggle('show')


     })
}

}
