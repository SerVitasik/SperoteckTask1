import './App.css';
import { useState, useRef } from 'react';
import Message from './components/Message';
const App = () => {
  const [messages, setMessages] = useState([
    {
      message: 'Message 1',
      isDeleted: false,
      id: 1
    },
    {
      message: 'Message 2',
      isDeleted: false,
      id: 2
    },
    {
      message: 'Message 3',
      isDeleted: false,
      id: 3
    },
    {
      message: 'Message 4',
      isDeleted: false,
      id: 4
    },
  ]);


  const inputRef = useRef();

  const onSend = (e) => {
    e.preventDefault();
    const enteredMessage = inputRef.current.value;

    setMessages([...messages, { message: enteredMessage, isDeleted: false, id: Math.random() }]);
  };

  const deleteHandler = (deletedMessageId) => {
    setMessages(prevMessages =>
      prevMessages.map(message => {
        if (message.id === deletedMessageId) {
          return { ...message, isDeleted: true };
        }
        return message;
      })
    );
  };

  return (
    <div className="App">
      <Message deletedMessage={deleteHandler} messages={messages} />
      <ul className='messages__list'>
        {messages.map(item => <li className={(item.isDeleted === true) ? 'deleted' : ''} key={item.id}>{item.message}</li>)}
      </ul>
      <form className='messages__form' onSubmit={onSend}>
        <input ref={inputRef} type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
