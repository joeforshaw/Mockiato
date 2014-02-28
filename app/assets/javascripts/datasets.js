$(document).ready(function() {
  $('confirmation-required').on('click', function() {
    return confirm('Are you sure you want to delete #{dataset.name}?');
  });

  $('.file-field-input').change(function(e) {
      var filepath = this.value;
      var m = filepath.match(/([^\/\\]+)$/);
      var filename = m[1];
      $('.file-field-text').text(filename);
  });
})