

(function () {

    // TEST OVERFLOW
    /*     var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
          console.log("Size: "+ el.offsetWidth + " / " + docWidth);
        }
      }
    ); */


    var toggle_bttns = document.querySelectorAll(".js-navbar__bttn");

    toggleMenu = function (e) {
        let bttn = e.target;
        const keyName = event.key;
        console.log(e);
        //if ( e.type=="click" || keyName == " ") { 

            if (bttn.id == "main-navbar-bttn" || bttn.parentElement.id == "main-navbar-bttn") {
                document.getElementById("main-menu-content").classList.toggle("-js-is-expanded");
                document.getElementById("main-navbar-bttn").classList.toggle("-js-is-active");
                document.getElementById("toc-content").classList.remove("-js-is-expanded");
                document.getElementById("toc-navbar-bttn").classList.remove("-js-is-active");

            } else if (bttn.id == "toc-navbar-bttn" || bttn.parentElement.id == "toc-navbar-bttn") {
                document.getElementById("toc-content").classList.toggle("-js-is-expanded");
                document.getElementById("toc-navbar-bttn").classList.toggle("-js-is-active");
                document.getElementById("main-menu-content").classList.remove("-js-is-expanded");
                document.getElementById("main-navbar-bttn").classList.remove("-js-is-active");
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
                item.classList.remove("-js-is-expanded");
            })
            document.querySelectorAll('.js-navbar__bttn').forEach(item => {
                item.classList.remove("-js-is-active");
            })
        }
    }

})();