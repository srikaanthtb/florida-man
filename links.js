$(function() {
    function parseRSS(callback) {
      $.ajax({
        url: 'http://cors.io/?u=https://news.google.com/rss/search?q=florida%20man&hl=en-GB&gl=GB&ceid=GB:en',
        type: 'GET',
        dataType: 'xml',
        error: function(e) {
              alert("An error occurred while processing XML file");
              console.log("XML reading Failed: ", e);        
        },
        success: function(response) {
          // Remove any existing elements in the container
          $('.ajax-stuff').children().remove();
          // Find each <item> in the RSS feed
          $(response).find("item").each(function() {
            // Build a new element
            var $build = $('<div class="item"></div>');
            // Grab the variables from the RSS feed
            var scc_title = $(this).find('title').text();
            var scc_description = $(this).find('description').text();
          //  var scc_media = $(this).find('enclosure').attr('url');
          //  var scc_image = $(this).find('itunes\\:image').attr('href');
            // Append elements to the new element
            $build.append('<div><img src="'+scc_image+'" /></div>')
            $build.append('<h3>'+scc_title+'</h3>');
            $build.append('<div class="description">'+scc_description+'</div>');
            $build.append('<audio controls="true" preload="none" src="'+scc_media+'"></audio>');
            // Append the new element to the container
            $('.ajax-stuff').append($build);
          });
        }
      });
    }
    $('#btn').click(function() {
      parseRSS();
    });
  });