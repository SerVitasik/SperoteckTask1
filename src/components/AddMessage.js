import { useRef, useState } from "react";

const AddMessage = () => {
    const [inputMessage, setInputMessage] = useState('');
    const inputRef = useRef();

    const onSend = (e) => {
        e.preventDefault();
        setInputMessage(inputRef.current.value);
        messages.push(inputMessage);
    };

    return <form onSubmit={onSend}>
        <input ref={inputRef} type="text" />
        <button type="submit">Send</button>
    </form>
};
s
export default AddMessage;