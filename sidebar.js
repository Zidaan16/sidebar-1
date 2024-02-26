$(document).ready(function (){
    $("#dropdown-toggle").click(function (){
        $("#dropdown-toggle").toggleClass('dropdown-active')
        $("#dropdown-menu").slideToggle('slow')
        $("#dropdown-caret").toggleClass('caret-animation')
    })
    $("#sidebar-toggle").click(function (){
        if ($("#sidebar").hasClass('sidebar-animation')) {
            $("#sidebar").removeClass('sidebar-animation')
            $("#sidebar").addClass('sidebar-animation-in')
            $(".sidebar-icon").css({
                "background-color": "rgb(80, 80, 80)"
            })
        } else {
            $("#sidebar").removeClass('sidebar-animation-in')
            $("#sidebar").addClass('sidebar-animation')
            $(".sidebar-icon").css({
                "background-color": "transparent"
            })
        }
    })
})