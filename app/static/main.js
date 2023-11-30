function wow() {
    $.ajax({
        url: '/process',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'value': document.getElementById("WOWBOX").innerHTML }),
        success: function (response) {
            var res = response.result;
            console.log(res);
            document.getElementById("WOWBOX").innerHTML = res
        },
        error: function (error) {
            console.log(error);
        }
    });
}