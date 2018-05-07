// ===== Mobile Menu =====

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

// ===== Scroll to Top =====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return').fadeIn(500);
    } else {
        $('#return').fadeOut(500);
    }
});

$('#return').click(function() {
    $('body,html').animate({scrollTop : 0}, 500);
});

// ===== Scroll Smoothing =====
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('nav').height()
        }, 500);
        return false;
      }
    }
  });
});

// ===== Parallax Scroll =====
$(window).scroll(function() {
	var parallaxScroll = $(this).scrollTop();
	$('.parallax').css({
		'transform' : 'translate(0px, ' + parallaxScroll/20 + '%)'
	});
});

// ===== Nav Bar Account =====
const account = document.querySelector('#account');

function notLoggedIn () {
  empty(account);

  const logIn = document.createElement('a');
  addClassesToElement(logIn, 'navbar-item');
  logIn.href = '/login.html';
  logIn.innerHTML = 'Log In';
  account.appendChild(logIn);

  const signUp = document.createElement('a');
  addClassesToElement(signUp, 'navbar-item');
  signUp.href = '/signup.html';
  signUp.innerHTML = 'Sign Up';
  account.appendChild(signUp);
}

function loggedIn (user) {
  empty(account);

  const userId = user.id;

  axios.get(`https://boiling-gorge-85613.herokuapp.com/users/${userId}`)
    .then(response => {
      const div = document.createElement('div');
      addClassesToElement(div, 'navbar-item', 'has-dropdown', 'is-hoverable');

        const a = document.createElement('a');
        addClassesToElement(a, 'navbar-link', 'is-hidden-touch');

          const img = document.createElement('img');
          addClassesToElement(img, 'profile');
          img.src = response.data.data.image;
          a.appendChild(img);

          const name = document.createElement('span');
          name.innerHTML = response.data.data.fname;
          a.appendChild(name);

        div.appendChild(a);

        const dropdown = document.createElement('div');
        addClassesToElement(dropdown, 'navbar-dropdown', 'is-right');

          const profile = document.createElement('a');
          addClassesToElement(profile, 'navbar-item');
          profile.href = '/profile.html';
          profile.innerHTML = 'Profile';
          dropdown.appendChild(profile);

          const hr = document.createElement('hr');
          addClassesToElement(hr, 'navbar-divider');
          dropdown.appendChild(hr);

          const logout = document.createElement('a');
          addClassesToElement(logout, 'navbar-item', 'is-active');
          logout.href = '/';
          logout.innerHTML = 'Log Out';
          logout.addEventListener('click', event => {
            localStorage.removeItem('token');
          });
          dropdown.appendChild(logout);

        div.appendChild(dropdown);

      account.appendChild(div);
    });
}

// Members

const vika = document.querySelector('#vika');

if (vika) {

  const character = document.querySelector('#character-info');
  const html = document.querySelector('html');

  vika.addEventListener('click', event => {
    character.classList.add('is-active');
    html.classList.add('is-clipped');
  });

  const close = document.querySelector('#close');
  close.addEventListener('click', event => {
    html.classList.add('is-clipped');
    character.classList.remove('is-active');
  });
}
