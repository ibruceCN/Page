/**
 * Created by jwbzhang on 3/15/15.
 */
function weiboModel() {
    var self = this;
    self.showAlert = ko.observable(false);
    self.weibos = ko.observableArray([]);
    self.textarea = ko.observable('');
    self.alertText = ko.observable('');

    self.post = function () {
        var comments = self.textarea();
        if (comments.length <= 0) {
            self.showAlert(true);
            self.alertText('You forget input some characters');
        } else if (comments.length > 140) {
            self.showAlert(true);
            self.alertText('The posts should not more than 140 characters.');
        } else {
            self.textarea('');
            self.alertText('');
            self.showAlert(false);
            self.weibos.push(newWeiboElement(self.weibos().length + 1, comments));
        }
    }

    this.close = function() {
        self.showAlert(false);
        self.alertText('');
    }

    this.enablebtn = ko.computed(function(){
        return this.textarea().length > 0 ? "enabled":"disabled";
    }, this);

    function newWeiboElement(num, weibo_content) {
        var des = {description: weibo_content}
        return WeiBoInit(num, des);
    }

    function WeiBoInit(index, weibo) {
        var self = this;
        self.index = index;
        self.weibo = ko.observable(weibo);
    }
}

ko.applyBindings(new weiboModel());