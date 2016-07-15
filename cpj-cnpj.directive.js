(function(){
  'use strict';
  angular
    .module('raynerweb.cpfcnpj',[])
    .directive('cpfCnpj', cpfCnpj);
  function cpfCnpj(){
    return {
      link : link
    };
    function link(scope, element, attr){
        attr.$set('maxlength',18);
        element.on('keypress', applyMask);
        element.on('keyup', applyMask);
        function applyMask(){
          var value=element.val().replace(/\D/g,"");
          if (value.length <= 11) {
            value=value.replace(/(\d{3})(\d)/,"$1.$2");
            value=value.replace(/(\d{3})(\d)/,"$1.$2");
            value=value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
          } else {
            value=value.replace(/^(\d{2})(\d)/,"$1.$2")
            value=value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
            value=value.replace(/\.(\d{3})(\d)/,".$1/$2");
            value=value.replace(/(\d{4})(\d)/,"$1-$2");
          }
          element.val(value);
        };
    };
  }
})();
