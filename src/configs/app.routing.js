routing.$inject = ['$locationProvider', '$urlRouterProvider'];

export default function routing($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
};