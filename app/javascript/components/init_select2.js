import $ from 'jquery';
import 'select2';


const initSelect2 = () => {
  $('.select2').select2({
    tags: true,
    tokenSeparators: [',', ';'],
    width: "resolve"
  });
  $('.select2max').select2({
    tags: true,
    maximumSelectionLength: 3,
    tokenSeparators: [',', ';']
  }).on("change",function(e){
    if($(this).val().length>3){
        $(this).val($(this).val().slice(0,3));
    }
});
};

export { initSelect2 };
