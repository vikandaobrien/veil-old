(function() {
  'use strict';

  request('/auth/token')
  .then(function(response){
    // user is authenticated
  })
  .catch(function(error){
    // user is not authenticated
  })

  // login form
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    const fname = event.target.fname.value
    const lname = event.target.lname.value
    const birthday = event.target.birthday.value
    const location = event.target.location.value
    const timezone = event.target.timezone.value

    request('/users', 'post', { email , password, fname, lname, birthday, location, timezone })
    .then(function(response){
      document.querySelector('#error').classList.add('is-hidden')
      document.querySelector('#success').classList.add('is-active')
      document.querySelector('html').classList.add('is-clipped')
    })
    .catch(function(error){
      document.querySelector('#error').classList.remove('is-hidden')
    })
  })
})();
