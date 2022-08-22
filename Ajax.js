<script type="text/javascript">   
    $("#айди формы").submit(function(e) {
    e.preventDefault();    
    var formData = new FormData(this);
    
    $.ajax({
        url: "куда отправить.php",
        type: 'POST',
        data: formData,
        success: function() {
            alert("Отправленно!");
            $('#айди формы')[0].reset();
        },
        cache: false,
        contentType: false,
        processData: false
    });
    });
</script>