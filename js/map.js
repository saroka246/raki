
YMaps.jQuery(function () {
    var viewport = {
    width : $(window).width(),
    height : $(window).height()
};
var width = viewport.width;
var height = viewport.height;

if (width < 768) {
var zoomval = "37.723367, 55.924981";
    
} else{
   var zoomval = "37.724909, 55.925027";
}

    

        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(zoomval), 16);
         function SampleBalloonLayout() {
    this.element = YMaps.jQuery(
        "<div class=\"balloon\">\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/pin-icon.png\"></div>\
                <div class=\"balloon__subtitle\">МО г. Мытищи, ул. Колпакова 44сА</div>\
            </div>\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/phone-icon.png\"></div>\
                <div class=\"balloon__subtitle\">+7 926 540 34 44, 8 926 540 34 44</div>\
            </div>\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/mail-icon.png\"></div>\
                <div class=\"balloon__subtitle\">grampus_studio@rambler.ru</div>\
            </div>\
            <div class=\"balloon__line\">\
                <a href=\"#\"><img src=\"img/inst-balloon.png\"></a>\
                <a href=\"#\"><img src=\"img/vk-balloon.png\"></a>\
            </div>\
        </div>");
 
    this.close = this.element.find(".close");
    this.content = this.element.find(".content");
 
    // Отключает кнопку закрытия балуна
    this.disableClose = function(){
        this.close.unbind("click").css("display", "none");
    };
                
    // Включает кнопку закрытия балуна
    this.enableClose = function(callback){
        this.close.bind("click", callback).css("display", "");
        return false;
    };
 
    // Добавляет макет на страницу
    this.onAddToParent = function (parentNode) {
        YMaps.jQuery(parentNode).append(this.element);
    };
 
    // Удаляет макет со страницы
    this.onRemoveFromParent = function () {
        this.element.remove();
    };
 
    // Устанавливает содержимое балуна
    this.setContent = function (content) {
        content.onAddToParent(this.content[0]);
    };
                
    // Обновляет балун
    this.update = function() {
        this.element.css("margin-top", "-" + (this.content.height() + 45 ) + "px");
    };
};
      var sampleBalloonTemplate = new YMaps.LayoutTemplate(SampleBalloonLayout);
    
    var style = new YMaps.Style();
    style.balloonStyle = {template: sampleBalloonTemplate};
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.719690, 55.928989), {style: style});
    placemark.description = "Описание метки";
    map.addOverlay(placemark);
    placemark.openBalloon();
});
/*var template = new YMaps.Template("<div class=\"balloon\">\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/pin-icon.png\"></div>\
                <div class=\"balloon__subtitle\">МО г. Мытищи, ул. Колпакова 44сА</div>\
            </div>\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/phone-icon.png\"></div>\
                <div class=\"balloon__subtitle\">+7 926 540 34 44, 8 926 540 34 44</div>\
            </div>\
            <div class=\"balloon__line\">\
                <div class=\"balloon__icon-container\"><img src=\"img/mail-icon.png\"></div>\
                <div class=\"balloon__subtitle\">grampus_studio@rambler.ru</div>\
            </div>\
            <div class=\"balloon__line\">\
                <a href=\"#\"><img src=\"img/inst-balloon.png\"></a>\
                <a href=\"#\"><img src=\"img/vk-balloon.png\"></a>\
            </div>\
        </div>");*/