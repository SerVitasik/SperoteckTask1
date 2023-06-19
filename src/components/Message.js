import React, { useEffect, useState } from 'react';

const Message = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const deleteHandler = () => {
        const deletedMessage = props.messages[currentIndex];
        props.deletedMessage(deletedMessage.id);
    };



    useEffect(() => {
        const timer = setTimeout(() => {
            for (let i = currentIndex + 1; i < props.messages.length; i++) {
                if (!props.messages[i].isDeleted) {
                    setCurrentIndex(i);
                    return;
                }
            }

            for (let i = 0; i < currentIndex; i++) {
                if (!props.messages[i].isDeleted) {
                    setCurrentIndex(i);
                    return;
                }
            }

        }, 1000);
        return () => clearTimeout(timer);
    }, [currentIndex, props.messages.length, props.messages]);

    const currentMessage = props.messages[currentIndex].message;

    return (
        <div className='message'>
            <p onClick={deleteHandler}>{currentMessage}</p>
        </div>
    );
};

export default Message;