export default function uppercaseDirective() {
    return {
        restrict: "E",
        link: (scope, elements) => {
            const uppercaseText = elements.text().toUpperCase();
            elements.html(uppercaseText)
        }

    };
};


