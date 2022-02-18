// JavaScript Document
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});


//Implementation of google map
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        var Alex = { lat: 31.2001, lng: 29.9187 };
        // The map, centered at Uluru
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: Alex,
        });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
          position: Alex,
          map: map,
        });
      }
