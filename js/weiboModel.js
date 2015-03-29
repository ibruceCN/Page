/**
 * Created by jwbzhang on 3/15/15.
 */

var Page = function($, undefined){
    var page = {
        list: new Weibos([]),
        modal: new Weibo()
    };

    page.modal.post = post;
    page.list.remove = remove;
    page.list.comments = comments;
    page.list.comment = ko.observable(false);
    page.list.commentContent = ko.observable('');
    page.list.addComment = addComment;

    function post (model) {
        page.list._add(model);
        clear();
    }

    function clear () {
        page.modal.content('');
        page.list.comment(false);
        page.list.commentContent('')

    }

    function remove (model) {
        page.list._remove(model);
    }

    function comments (model) {
        debugger
        if(model.isComment()){
            model.isComment(false);
        }else {
            model.isComment(true);
        }
    }

    function addComment (model) {
        page.list._addComment(model, page.list.commentContent().trim(), 'Lee');
        page.list.commentContent('');
    }

    ko.applyBindings(page);
}(jQuery)