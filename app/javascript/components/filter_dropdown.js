// import $ from 'jquery';

// const filterDropdown = () => {
//   const dropdown = document.getElementById("filter-dropdown");
//   if (dropdown) {
//     var options = [];

// $( '.dropdown-menu a' ).on( 'click', function( event ) {

//    var $target = $( event.currentTarget ),
//        val = $target.attr( 'data-value' ),
//        $inp = $target.find( 'input' ),
//        idx;

//    if ( ( idx = options.indexOf( val ) ) > -1 ) {
//       options.splice( idx, 1 );
//       setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
//    } else {
//       options.push( val );
//       setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
//    }

//    $( event.target ).blur();

//    console.log( options );
//    $('#form').append(`<%= f.input :interest, as: :select, collection: Interest.all, input_html: { class: 'select2 form-large', multiple: true }  %>`);
//    return false;
// });
//   }
// }

// export { filterDropdown };

    // $(document).ready(function() {
    //     $('#filter-dropdown').multiselect({
    //         maxHeight: 200
    //     });
    // });
