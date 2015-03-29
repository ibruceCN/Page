/**
 * Created by jwbzhang on 3/29/15.
 */
var Weibo = (function ($, undefined) {
    var cls = function (id, author, content) {
        var self = this;
        self.id = 0;
        self.author = ko.observable('Bruce');
        self.content = ko.observable('');
        self.replayID = 0;
        self.hasComments = ko.observableArray([]);
        self.isComment = ko.observable(false);
    }

    return cls;
})(jQuery);