import './messages.css'

const Messages = ({ messages }) => {
    return (
        <div className='message-style'>
            <p className="paragraph">{messages}</p>
        </div>
    )
}

export default Messages;