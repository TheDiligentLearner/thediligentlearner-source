
/* function myFunction() {
    var element = document.getElementById("Demo");
    element.classList.toggle("w3-show");
    } */

(function () {
    // code

    // TEST OVERFLOW
    var docWidth = document.documentElement.offsetWidth;

    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
          console.log("Size: "+ el.offsetWidth + " / " + docWidth);
        }

      }
    );

    //

    var toggle_bttns = document.querySelectorAll(".js-navbar__bttn");

    toggleMenu = function (e) {
        let bttn = e.target;
        const keyName = event.key;
        //if ( e.type=="click" || keyName == " ") { 

            if (bttn.id == "main-navbar-bttn") {
                document.getElementById("main-menu-content").classList.toggle("-js-active-list");
                document.getElementById("main-navbar-bttn").classList.toggle("-js-active-bttn");
                document.getElementById("toc-menu-content").classList.remove("-js-active-list");
                document.getElementById("toc-navbar-bttn").classList.remove("-js-active-bttn");

            } else if (bttn.id == "toc-navbar-bttn" || bttn.parentElement.id == "toc-navbar-bttn") {
                document.getElementById("toc-menu-content").classList.toggle("-js-active-list");
                document.getElementById("toc-navbar-bttn").classList.toggle("-js-active-bttn");
                document.getElementById("main-menu-content").classList.remove("-js-active-list");
                document.getElementById("main-navbar-bttn").classList.remove("-js-active-bttn");
            }
        //}
    }

    if (toggle_bttns) {

        toggle_bttns.forEach(function (bttn) {

            bttn.addEventListener('click', toggleMenu, false);
            //bttn.addEventListener('keydown', toggleMenu, false);
        })

    }

    window.onclick = function (event) {

        if (!event.target.matches('.js-navbar__bttn') && !event.target.matches('.js-navbar__icon')) {

            document.querySelectorAll('.js-menu__list').forEach(item => {
                item.classList.remove("-js-active-list");
            })
            document.querySelectorAll('.js-navbar__bttn').forEach(item => {
                item.classList.remove("-js-active-bttn");
            })
        }
    }

})();