import angular from 'angular';
import testDirective from './sandraBold/sandraBold.directive';
import uppercaseDirective from './sandraUppercase/sandraUppercase.directive';
import infoDirective from './sandraInfo/sandraInfo.directive';
import cardDirective from './sandraCard/sandraCard.directive';
import buttonDirective from './sandraButton/sandraButton.directive';

export default angular.module('custom.directives', [])
    .directive('testDirective', testDirective)
    .directive('uppercaseDirective', uppercaseDirective)
    .directive('infoDirective', infoDirective)
    .directive('cardDirective', cardDirective)
    .directive('buttonDirective', buttonDirective)
    .name;