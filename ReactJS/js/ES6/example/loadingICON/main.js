import test01 from "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.slim.min.js";

var data = {
        'iPhone': 4,
        'iMac': 2,
        'MacBook': 1,
        'MacBook Air': 1,
        'MacBook Pro': 2
    };

$('#kapasiti-btn').on('click', 'li', fuction() {

    var _ = $(this);
    var name = this.innerText;
    var val = data[name];
    var bar = $('#kapasiti-bar');
    var _html = '';
    var _c = $(this).find('i').attr('class');

    if ( _.hasClass('no-selected') ) {
        _.removeClass('no-selected');
        bar.data().total += val;

        _html = '<li class="'+_c+'" style="width:0%; height: 100%" data-val="'+val+'"></li>';
        bar.append(_html)
        
    } else {
        _.addClass('no-selected');
        bar.data().total -= val;

        bar.find('.'+_c).data().val = 0;
    }

    setTimeout(function() {
        bar.find('li').each(function() {
            var _this = $(this)
            var _val = _this.data().val;
            var _w = (_val / bar.data().total)*100;

            _w = isNaN(_w) ? 0 : _w;

            _this.css({
                width: _w+'%'
            })

            if (_w === 0) {
                setTimeout(function() {
                    _this.remove()
                }, 300)	
            }
        })
    }, 10)
})
