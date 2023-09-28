import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

 const SendForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <Form
        onSubmit={e => {
            e.preventDefault();
           sendMessage(message);
           setMessage('');
        }}>
        <InputGroup >
            
            <FormControl placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} /> 
{/*             <InputGroup.append>
                <Button variant="primary" type="submit" >Send</Button>
            </InputGroup.append> */}
            <div className='input-group-append'>
             <Button className='send-button' variant="primary" type="submit" >Send</Button></div>
        </InputGroup>
    </Form>
    
}

export default SendForm;
