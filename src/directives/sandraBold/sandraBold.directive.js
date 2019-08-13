export default function testDirective() {
    return {
        restrict: "AE",
        link: (scope, element) => {
            const boldedText = element.text().bold();
            element.html(boldedText)
        }

    };
};


