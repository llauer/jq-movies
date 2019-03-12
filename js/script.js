$(function() {
  var $movies = $('.movies');
  $.ajax('http://www.omdbapi.com/?s=star%20wars&apikey=f560962b&y=&plot=short&r=json', {
    dataType: 'json',
    success: function(result) {
      // console.log(result);
      $.each(result.Search, function(i, movie) {
        $movies.append(
          '<li>Title: ' +
            movie.Title +
            ', Year: ' +
            movie.Year +
            '</li>' +
            '<img src="' +
            movie.Poster +
            'alt="Movie Poster" </img>'
        );
      });
    }
  });
});

//   })
//   .then(function(movies) {
//     $.each(movies, function(i, movie) {
//       $movies.append('<li>Title: ' + movie.Title + ', Year: ' + movie.Year + '</li>');
//     });
//   });
// });
