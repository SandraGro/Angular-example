import templateCard from './sandraCard.tpl.html';
import controller from './sandraCard.controller';
export default function cardDirective() {
    return {
        restrict: "E",
        template: templateCard,
        controller,
        controllerAs: 'vm',
        bindToController: true

    };
};

