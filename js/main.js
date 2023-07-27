let btnToolbar = document.querySelector("#toolbar")
let wrapper = document.querySelector(".wrapper")
let inner = document.querySelector(".inner")
btnToolbar.addEventListener("click", () => {
  if(wrapper.style.display == "none"){
    wrapper.style.display = "block"
    inner.style.display = "none"
  }else{
    wrapper.style.display = "none"
    inner.style.display = "block"
  }
})