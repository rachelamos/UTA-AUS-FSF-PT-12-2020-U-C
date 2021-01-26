var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var userLogin = document.createElement('h3');
        var userUrl = document.createElement('a');
        userLogin.textContent = data[i].login;
        userUrl.textContent = data[i].url;
        userUrl.setAttribute("href", data[i].url)
        userContainer.append(userLogin);
        userContainer.append(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
