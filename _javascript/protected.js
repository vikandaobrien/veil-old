(function() {
  'use strict';

  // authe gate
  request('/auth/token')
  .then(function(response){
    // user is logged in
    console.log(response.data);
  //  loggedIn(response.data);
    loggedIn();
  })
  .catch(function(error){
    // user is not logged in
    notLoggedIn();
  })

/*
  document.querySelector('.form-signin').addEventListener('submit', function(event){
    event.preventDefault()

    const id = event.target.id.value

    request(`/protected/${id}`)
    .then(function(response){
      console.log(response);
      document.querySelector('.message').innerHTML = `Hello ${response.data.id}, ${response.data.message}`
    })
    .catch(function(error){
      console.log(error)
      document.querySelector('.message').innerHTML = 'You cannot access this resource'
    })
  })
*/
})();
