import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from '../../components/Lobby';
import ChatArea from '../../components/ChatArea';
import { Button } from 'react-bootstrap';
//import test from '../../components/Testpage';
import Testpage from '../../components/Testpage';

const URL = "https://localhost:7115/chat";
//https://localhost:7258/hub
const Chat = () =>{
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const joinRoom = async (user, room) => {
        try {
          const connection = new HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();
            console.log(connection)
          connection.on("ReceiveMessage", (user, message) => {
            //const newMessage = { user, message}
            //setMessages(messages.push(newMessage));
            console.log('message received: ', message);
            setMessages(messages => [...messages, { user, message }]);
          });
    
          connection.on("UsersInRoom", (users) => {
            setUsers(users);
          });
    
          connection.onclose(e => {
            setConnection(undefined);
            setMessages([]);
            setUsers([]);
          });
    
          await connection.start();
          await connection.invoke("JoinRoom", { user, room });
          setConnection(connection);
        } catch (e) {
          console.log(e);
        }
      }
      const sendMessage = async (message) => {
        try {
          await connection.invoke("SendMessage", message);
        } catch (e) {
          console.log(e);
        }
      }
    
      const closeConnection = async () => {
        try {

          await connection.stop();
        } catch (e) {
          console.log(e);
        }
      }

  
    return(
<div>
    <h2>MyChat</h2>
    <hr className='line' />
    {/* <Lobby joinRoom={joinRoom}/> */}
     {!connection
      ? <Lobby joinRoom={joinRoom} />
      : <ChatArea messages={messages} sendMessage={sendMessage} users={users}  />} 
  {/*  : <ChatArea sendMessage={sendMessage} messages={messages} users={users} closeConnection={closeConnection} />}  */}
    
  </div>

    )
}

export default Chat;