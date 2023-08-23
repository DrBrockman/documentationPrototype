$(document).ready(function() {
    // Load default content
    loadContent('home');

    // Handle navigation clicks
    $('a.nav-link').click(function(e) {
        e.preventDefault();
        const targetPage = $(this).data('page');
        loadContent(targetPage);
    });
});

function loadContent(page) {
    $.ajax({
        url: `content/${page}.html`, // Load content from separate HTML files
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            $('#content').html(data);
        },
        error: function() {
            $('#content').html('<p>Error loading content.</p>');
        }
    });
}
