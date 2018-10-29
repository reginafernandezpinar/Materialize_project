document.addEventListener('DOMContentLoaded', function () {

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);

  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems,
    {
      fullWidth: true
    });

  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);


});
