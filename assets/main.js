// Scripts to run on document ready
function readyHandler() {
  // Load header
  $('#main-header').load('/assets/inc/header.html');
  // Load footer
  $('#main-footer').load('/assets/inc/footer.html', () => {
    // Set copyright year
    $('#copyright-year').text(new Date().getFullYear());
  });
}

// Scripts to run on window load
function loadHandler() {}

$(document).ready(readyHandler);
$(window).on('load', loadHandler);
