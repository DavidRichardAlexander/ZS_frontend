
$("#country").change(function(){
    var countryId = $(this).val()


    let dropdown = $('#school');
    dropdown.empty();

    dropdown.append('<option value="" selected disabled hidden>School*</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'http://127.0.0.1:5000/data/country/'+countryId;

    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.Code).text(entry.Name));
      })
    });
    dropdown.append($('<option></option>').attr('value', 'other').text('Other'));




});