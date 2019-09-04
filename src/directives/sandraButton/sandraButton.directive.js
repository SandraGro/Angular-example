import templateButton from './sandraButton.tpl.html';
import controller from './sandraButtton.controller';
export default function buttonDirective (){
    return{
        restrict: "C",
        template: templateButton,
        controller,
        controllerAs: 'vm',
        scope:{
        }
    };
};