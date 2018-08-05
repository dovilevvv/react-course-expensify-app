'use strict';

var subText = 'This is sub title text';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Visibility Toggle'
    ),
    React.createElement('button', { onClick: subText })
);

ReactDOM.render(template, appRoot);
