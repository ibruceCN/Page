/**
 * Created by jwbzhang on 3/29/15.
 */
var Weibos = (function ($, undefined) {
    var cls = function (author, content) {
        var self = this;

        self.weibos = ko.observableArray([]);
    }

    cls.prototype.add = function (weibo) {
        var newWeibo = new Weibo();
        newWeibo = {
            author:weibo.author(),
            content: weibo.content().trim()
        }
        this.weibos.push(newWeibo);
    };

    return cls;
})(jQuery);