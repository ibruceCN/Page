/**
 * Created by jwbzhang on 3/29/15.
 */
var Weibo = (function ($, undefined) {
    var cls = function (author, content) {
        var self = this;

        self.author = ko.observable('Bruce');
        self.content = ko.observable('');
    }

    return cls;
})(jQuery);