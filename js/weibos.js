/**
 * Created by jwbzhang on 3/29/15.
 */
var Weibos = (function ($, undefined) {
    var cls = function (author, content) {
        var self = this;

        self.weibos = ko.observableArray([]);
    }

    cls.prototype._add = function (weibo) {
        var newWeibo = new Weibo();
        newWeibo = {
            id:this.weibos().length,
            author:weibo.author(),
            content: weibo.content().trim()
        }
        this.weibos.push(newWeibo);
    };

    cls.prototype._remove = function (weibo) {
        var weibos = $.grep(this.weibos(), function(data, index) {
            return data.id != weibo.id;
        });
        debugger
        this.weibos(weibos);
    };

    return cls;
})(jQuery);