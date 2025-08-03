// textcontent
$('#div1').text("dkjfkdjf<h1>kdjfkd</h1>");

// html - innerHtml
$('.div2').html('<h1>hellow</h1>');

// style
$('#onecolor').css('color','red');

$('#twocolor').css('background-color','green');

$('.three').css('display','none');

$('.three2').css('font-weight', 'bold');    

// class
$('#div1').addClass('div1class');
console.log($('#div1').hasClass('div1class'));

$('#div1').removeClass('div1class');
console.log($('#div1').hasClass('div1class'));

// input
$('#btn1').click(() =>{
    const input1 = $('#input1').val();
    console.log(input1);
})

$('#input2').val('hello');

// append
$('#input2').val($('#input2').val() + ' World');
// ---
 $(document).ready(function () {
      $('#appendBtn').click(function () {
        $('#target').append('<p>Appended inside #target</p>');
      });

      $('#prependBtn').click(function () {
        $('#target').prepend('<p>Prepended inside #target</p>');
      });

      $('#beforeBtn').click(function () {
        $('#target').before('<p>Inserted before #target</p>');
      });

      $('#afterBtn').click(function () {
        $('#target').after('<p>Inserted after #target</p>');
      });
    });

// remove or empty
 $(document).ready(function () {
      $('#removeBtn').click(function () {
        $('#myBox').remove(); // Completely removes the element from DOM
      });

      $('#emptyBtn').click(function () {
        $('#myBox').empty(); // Removes inner content but keeps the div
      });
    });

