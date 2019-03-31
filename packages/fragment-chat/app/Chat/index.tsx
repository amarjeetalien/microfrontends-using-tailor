import * as React from 'react';
import classNames from 'classnames';

import  Toggle  from '../Toggle/index';

import './styles.scss';

const Chat = () => (
  <Toggle>
    {({ on, toggle }) => (
      <div
        className={classNames('chat', { expanded: on })}
        onClick={toggle}
      />
    )}
  </Toggle>
)

export default Chat
