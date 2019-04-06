class ButtonUp{
        constructor(selectorParent, classButton, name = 'вверх',
                    scrollHide = 300, time = 1000){
            this.selectorParent = selectorParent;
            this.classButton = classButton;
            this.name = name;
            this.time = time;
            this.scrollHide = scrollHide;
        }
        //добавить кнопку и событие на нее
        appendButton(){

            var $btn = $(`<button class = "${this.classButton}">${this.name}</button>`);
            $btn.appendTo(this.selectorParent);
            $btn.hide(0);
            var time = this.time; // делаем для того, чтобы получить по замыканию

            $btn.on('click', function () {
                $('html, body').animate({scrollTop: 0}, time);
            });
            this.scrollFunc($btn);
        }
        //событие на кнопку
        scrollFunc($btn){

            var scrollHide = this.scrollHide; // делаем для того, чтобы получить по замыканию

            $(document).on('scroll', function (){
                let $windowTop = $(window).scrollTop();
                if (($windowTop > scrollHide)&&($btn.css('display')==='none')){
                    $btn.fadeIn(1000);

                }
                else if(($windowTop <= scrollHide)){
                    $btn.fadeOut(1000);

                }
            });
        }
    }

    var btn = new ButtonUp('div.main','fix-bottom btn btn-dark btn-lg btn-block','UP',500,5000);
    btn.appendButton();