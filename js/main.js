//Navbar
document.addEventListener('DOMContentLoaded', () => {
    //get all "Navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);

    //check if there any navar bugers
    if($navbarBurgers.length > 0){
        //add a click on event to each one
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target)

                //toggle the 'is-active class
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            })
        })
    }
})