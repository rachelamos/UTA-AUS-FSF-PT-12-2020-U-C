fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page = how many will show per page
// state = whether issue is open or closed
// sort = sort by when created
// direction = newest first
/* after the ? is the query string value => per_page10&state=open&sort=created&direction=desc */