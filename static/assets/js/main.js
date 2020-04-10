

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


    var menuButtons = document.querySelectorAll(".js-navbar__btn");
    var foldButtons = document.querySelectorAll(".js-fold-btn");

    toggleMenu = function (e) {
        let btn = e.target;
        const keyName = event.key;
        //if ( e.type=="click" || keyName == " ") { 

            if (btn.id == "main-navbar-btn" || btn.parentElement.id == "main-navbar-btn") {
                document.getElementById("main-menu-content").classList.toggle("-js-is-visible");
                document.getElementById("main-navbar-btn").classList.toggle("-js-is-active");
                document.getElementById("toc-panel").classList.remove("-js-is-visible");
                document.getElementById("toc-navbar-btn").classList.remove("-js-is-active");

            } else if (btn.id == "toc-navbar-btn" || btn.parentElement.id == "toc-navbar-btn") {
                document.getElementById("toc-panel").classList.toggle("-js-is-visible");
                document.getElementById("toc-navbar-btn").classList.toggle("-js-is-active");
                document.getElementById("main-menu-content").classList.remove("-js-is-visible");
                document.getElementById("main-navbar-btn").classList.remove("-js-is-active");
            }
        //}
    }   

    toggleList = function(e) {
        let btn = e.target;
        console.log(e.target);
        e.target.classList.toggle('-js-is-pressed');

        e.target.parentElement.querySelectorAll(".menu__list")[0].classList.toggle('-js-is-folded');
        //c=btn.parentElement.children[2];
        //c.classList.toggle("-js-is-folded");


    }


    if (menuButtons) {

        menuButtons.forEach(function (btn) {

            btn.addEventListener('click', toggleMenu, false);
            //btn.addEventListener('keydown', toggleMenu, false);
        })

    }

    if (foldButtons) {

        foldButtons.forEach(function (btn) {

            btn.addEventListener('click', toggleList, false);
            //btn.addEventListener('keydown', toggleMenu, false);
        })

    }

    window.onclick = function (event) {

        if (!event.target.matches('.js-navbar__btn') && !event.target.matches('.js-navbar__icon')) {

            document.querySelectorAll('.js-menu__list').forEach(item => {
                item.classList.remove("-js-is-visible");
            })
            document.querySelectorAll('.js-navbar__btn').forEach(item => {
                item.classList.remove("-js-is-active");
            })
        }
    }

})();