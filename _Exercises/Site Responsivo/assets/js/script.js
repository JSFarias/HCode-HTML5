document.querySelector(".backdrop").addEventListener('click', e=>{
    closeMenu()
})
document.querySelector('.close-menu').addEventListener('click', e=>{
    closeMenu()
})

document.querySelector('.open-menu').addEventListener('click', e=>{
    openMenu()
})

function closeMenu(){
    document.querySelector('.header-border .menu').classList.remove('open')
}

function openMenu(){
    document.querySelector('.header-border .menu').classList.add('open')
}