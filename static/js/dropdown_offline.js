$(document).ready(function(){
    let dropdown = $('#country');

    dropdown.empty();

    dropdown.append('<option value="" selected disabled hidden>Country*</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'http://127.0.0.1:5000/data/countries';

    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.Code).text(entry.Name));
      })
    });
});