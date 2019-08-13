import templateCard from './sandraCard.tpl.html'
export default function cardDirective() {
    return {
        restrict: "C",
        template: templateCard,
        controller: 'cardController',
        controllerAs:'vm'

    };
};

