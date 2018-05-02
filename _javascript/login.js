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

    request('/auth/token', 'post', { email , password })
    .then(function(response){
      document.querySelector('#error').classList.add('is-hidden')
      localStorage.setItem('token', response.data.token)
      window.location = '/'
    })
    .catch(function(error){
      document.querySelector('#error').classList.remove('is-hidden')
    })
  })
})();
