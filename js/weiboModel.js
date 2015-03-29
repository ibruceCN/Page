/**
 * Created by jwbzhang on 3/15/15.
 */

var Page = function($, undefined){
    var page = {
        list: new Weibos([]),
        modal: new Weibo()
    };

    page.modal.post = post;

    function post (model) {
        page.list.add(model);
        clear();
    }

    function clear () {
        page.modal.author('');
        page.modal.content('');
    }


    ko.applyBindings(page);
}(jQuery)

//var viewModel = {
//    alert : ko.observable(false),
//    weibo: {
//        description : ko.observable(''),
//        author: ko.observable('Bruce')
//    },
//    weibos : ko.observableArray([]),
//
//    close : function() {
//        this.alert(false);
//    },
//
//    post: function () {
//        if(this.weibo.description().trim().length > 0 && this.weibo.description().trim().length <= 140) {
//            var cloneModel = {
//                author: this.weibo.author(),
//                description: this.weibo.description().trim()
//            };
//            this.weibos.push(cloneModel);
//            this.alert(false);
//            this.weibo.description('');
//        }else
//        {
//            this.alert(true);
//        }
//    }
//}
//
//ko.applyBindings(viewModel);