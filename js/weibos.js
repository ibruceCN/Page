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
            content: weibo.content().trim(),
            hasComments:ko.observableArray([]),
            isComment:ko.observable(false)
        }
        this.weibos.push(newWeibo);
    };

    cls.prototype._remove = function (weibo) {
        var weibos = $.grep(this.weibos(), function(data, index) {
            return data.id != weibo.id;
        });
        this.weibos(weibos);
    };

    cls.prototype._addComment = function (weibo, comments, author) {
        var resultWeibo = $.grep(this.weibos(), function(data){ return data.id == weibo.id; });
        var newComment = new Weibo();
        newComment = {
            id:resultWeibo[0].hasComments.length,
            author:author,
            content: comments,
            replayID:weibo.id,
            hasComments:ko.observableArray([])
        }
        resultWeibo[0].hasComments.push(newComment);
    };

    return cls;
})(jQuery);