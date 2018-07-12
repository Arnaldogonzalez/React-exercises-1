import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){
  var username = 'Luis';
  return (
    <div>
    <span>{username ? 'Hello ' + username : 'Not logged in'}</span>
    <br />
    <Component />
    <br />
    <Greeting />
    </div>
  )
}

function Component(){
  return React.createElement(
    'div',
    {className:'book'},
    React.createElement('div', {className:'title'}, 'The Title'),
    React.createElement('div', {className:'author'}, 'The Author'),
    React.createElement('ul', {className:'starts'},
    React.createElement('li',{className:'rating'},'5 starts'),
    React.createElement('li',{className:'isbn'},'12-345678-910')
    )
  );
}


ReactDOM.render(
  <Greeting />, document.querySelector('#root')
);