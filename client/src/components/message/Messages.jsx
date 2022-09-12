import './messages.css'

const Messages = ({ messages }) => {
    return (
        <div className='message-style'>
            <p className="paragrah">{messages}</p>
        </div>
    )
}

export default Messages;