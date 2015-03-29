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
    page.list.comment = remove;

    function post (model) {
        page.list._add(model);
        clear();
    }

    function clear () {
        page.modal.author('');
        page.modal.content('');
    }

    function remove (model) {
        debugger
        page.list._remove(model);
    }


    ko.applyBindings(page);
}(jQuery)