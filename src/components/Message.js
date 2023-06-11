import React, { useEffect, useState } from 'react';

const Message = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const deleteHandler = () => {
        const deletedMessage = props.messages[currentIndex];
        props.deletedMessage(deletedMessage.id);
    };



    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex < props.messages.length - 1 && props.messages[prevIndex + 1].isDeleted === false) ? prevIndex + 1 : prevIndex = 0);
        }, 1000);
        return () => clearTimeout(timer);
    }, [currentIndex, props.messages.length]);

    const currentMessage = props.messages[currentIndex].message;

    return (
        <div className='message'>
            <p onClick={deleteHandler}>{currentMessage}</p>
        </div>
    );
};

export default Message;