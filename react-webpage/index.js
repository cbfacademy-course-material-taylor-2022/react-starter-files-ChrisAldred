'use strict';

function ClickableButton() {

  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return React.createElement(
        'h1',
        {className: 'main-button'},
        'Hello, World'
      );
  }

  return React.createElement(
    'button', {
        className: 'main-button',
    onClick: () => setClick(true)
  },
    'Press Here'
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));