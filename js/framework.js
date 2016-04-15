//============================
//    
//    Test 
//
//============================
//
////(function(window){
//////    'use strict'
////function defineframework(){
////    var framework = {};
////    framework.alert = function(){
////        alert("this is a test message");
////    };
////    
////    return framework;
////}
////    
////if(typeof(framework) === 'undefined'){
////    window.framework = defineframework();
////}  
////})(window);

//============================
//    
// element aanpassen kleine jquery
//
//============================
// de select fuctie die registreerd als jij $ opent en iets tussen de () zet dan selecteerd hij dit element bij elke return zorgt ervoor dat aan het einde van die speciafieke functie de informatie teruggeeft wat er moet gebeuren.
function $(selector){
    var kroket = {};
    kroket.selector = selector;
    kroket.element = document.querySelectorAll(kroket.selector);
    
    kroket.html = function(){
        
        return kroket.element;
    }
    // hiermee kan je een element in je dom aanpassen als je hem declareerd
    kroket.add = function(name, value){
        if(!value) return  kroket.element.getAttribute(name)
        kroket.element.setAttribute(name, value);
        return kroket;
    }
    // hiermee kan je een click loggen en registren
    kroket.on = function(type, callback){
        kroket.element['on'+ type] = callback;
        return kroket;
    }
    
    return kroket;
}