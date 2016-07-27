(function(){
  'use strict';
  angular
    .module('cpf-cnpj',[])
    .directive('cpfCnpj', cpfCnpj);
  function cpfCnpj(){
    return {
      link : link,
      require: 'ngModel'
    };
    function link(scope, element, attrs, ngModelController){
      attrs.$set('maxlength',18);
      scope.$watch(attrs['ngModel'], applyMask);
      function applyMask(event){
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
        if('asNumber' in attrs){
          ngModelController.$setViewValue(
            isNaN(parseInt(value.replace(/\D/g,""), 10))
            ? undefined
            : parseInt(value.replace(/\D/g,""), 10));
        } else {
          ngModelController.$setViewValue(value);
        }
      }
    };//link
  };//cpfCnpj
})();
