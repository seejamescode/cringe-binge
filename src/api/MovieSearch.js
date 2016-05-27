export function infamousMovieSearch(page, callback) {
  fetch(`./api/discover/movie?sort_by=vote_average.asc&vote_count.gte=100&page=${page}&`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
};

export function specificMovieSearch(id, callback) {
  fetch(`./api/movie/${id}?`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
};
