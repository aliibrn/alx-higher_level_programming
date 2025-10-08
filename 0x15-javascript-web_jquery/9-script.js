$(function() {
  const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      $('#hello').text(data.hello);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('Error fetching data:', textStatus, errorThrown);
      $('#hello').text('Could not fetch greeting');
    }
  });
});
