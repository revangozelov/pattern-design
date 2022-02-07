// ***** Table recipe START ***** //  
$(document).on("click",'.sw-table-recipe .sw-first-list-item-table', function (e) {
    $(this).toggleClass('show');
    $(this).next().toggleClass('show');
    $(this).find('.sw-table-arrow i.fas').toggleClass('fa-chevron-up');
    $(this).closest('tbody').find('select.my-selectpicker').selectpicker('refresh');
});
$(document).on("click",'.sw-table-recipe .sw-detail-second-tr-btn', function (e) {
    $(this).toggleClass('show');
    $(this).next().toggleClass('show');
    $(this).find('.sw-table-arrow i.fas').toggleClass('fa-chevron-up');
    $(this).closest('tbody').find('select.my-selectpicker').selectpicker('refresh');
});
// ***** Table recipe FINISH ***** //    