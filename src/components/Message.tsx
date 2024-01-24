import React from 'react';
import { MessageInt } from '../model';


type Props = {
    mess: MessageInt;
    messData: MessageInt[];
    setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>
}

const Message = ({ mess, messData, setMessData }: Props) => {

    const dateFormater = (date: number) => {
return new Date(date).toLocaleDateString("fr-Fr", {day: "numeric", month: "long"})
    }

    const handleDelete= () => {
        setMessData(messData.filter((el) => el.id !==mess.id))
    }
    return (
        <div className="message-container">
            <p>{mess.message}</p>
            <h5> {dateFormater(mess.date)}</h5>
            <span id="delete" onClick={() => handleDelete()}>&#1008;</span>
        </div>
    );
};

export default Message;