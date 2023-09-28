import SendForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import { useState } from 'react';
//import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
 import ConnectedUsers from './ConnectedUsers';
// import { Button } from 'react-bootstrap';

const ChatArea = ({ messages, sendMessage, users}) => 

 <div>
    
    {/* <div className='leave-room'>
        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
    </div> */}
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendForm sendMessage={sendMessage} className='inputForm' />
    </div>
</div>

export default ChatArea;
