Create variables
    var search = $("#search").val();
    var recordsNumber = $("#records").val();
    var startYear = $("#startYr").val();
    var endYear = $("#endYr").val();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    

// url += '?' + $.param({
//   'api-key': "449c07e6e25f4e0eb4f70a4a5db511c6",
//   'q': "search",
//   'begin_date': "startYear",
//   'end_date': "endYear"
// });


    url += '?' + $.param({
      'api-key': "449c07e6e25f4e0eb4f70a4a5db511c6",
      'q': "taxes",
     });


$.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          console.log(result);
        }).fail(function(err) {
          throw err;
        });