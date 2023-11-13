// Link me in HTML


console.group('HTMLlink.js')


console.info('Jeg er HTMLlink.js');

// find dom element med id
const HiddenElement = document.getElementById('hidden');

console.warn(HiddenElement.innerText);




var textContainer = document.getElementById('Jack');
 textContainer.innerHTML = 'hej fra et script tag';


console.groupEnd()