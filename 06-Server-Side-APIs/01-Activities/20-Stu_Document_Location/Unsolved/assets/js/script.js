var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  console.log(typeof response.status);

if (response.status === 404) {
  window.location.replace(redirectUrl);
} else {
  // If that status equals the conditional, then redirect to the 404 page.
  return response.json();
}
});
