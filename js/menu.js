export default function menuSlide(btnMenu, btnAnimation, menu){
const d = document;

d.addEventListener("click",(e)=> {
  if(e.target.matches(btnMenu)||e.target.matches(`${btnMenu} *`)){
    d.querySelector(menu).classList.toggle("menu-translate");
    d.querySelector(btnAnimation).classList.toggle("btn-translate");
  }
  if (e.target.matches(menu) || e.target.matches(`${menu} *`)) {
    d.querySelector(menu).classList.toggle("menu-translate");
    d.querySelector(btnAnimation).classList.toggle("btn-translate");
  }
})
}