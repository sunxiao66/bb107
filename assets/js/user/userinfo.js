// -------------------------数据回填------------------------
function renderForm() {
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            console.log(res);
            $('input[name=username]').val(res.data.username);
            $('input[name=nickname]').val(res.data.nickname);
            $('input[name=email]').val(res.data.email);
            $('input[name=id]').val(res.data.id);
        }
    })
}
renderForm();


// -------------------------确认修改按钮--------------------
$('form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: '/my/userinfo',
        data: data,
        success: function (res) {
            layer.msg(res.message);
            if (res.status === 0) {
                window.parent.getUserInfo();
            }
        }
    })
})