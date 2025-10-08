$(function() {
  const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

  $.get(url, function(data) {
    const movies = data.results; 
    for (let i = 0; i < movies.length; i++) {
      const title = movies[i].title;
      $('#list_movies').append('<li>' + title + '</li>');
    }
  });
});
