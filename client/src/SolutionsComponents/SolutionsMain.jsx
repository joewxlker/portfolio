

const SolutionsMain = () => {
    return (
        <div className='text-align-left d-flex align-items-center justify-content-center'>
            <div className='w-50 text-light text-align-left d-flex align-items-top justify-content-top flex-column'>
                <h2 className='text-accent m-2'>solutions focused</h2>
                <p>An in depth look at how I solved this problem</p>
            </div>
            <div className='w-50'>
                <h5 className='text-light m-2'>
                    {'const MessageMap = () =>'} <br />
                    {'if (messages === undefined) return;'} <br />
                    {'let _messages = messages.receivedMessages;'} <br />
                    {'let newMessages = [];'} <br />
                    {'for (let k in _messages){'} <br />
                    {'newMessages.push([_messages[k][0].toUpperCase(), _messages[k][1]])'} <br />
                    {'}'} <br />
                    {'let map = new Map(newMessages);'} <br />
                    {'let receiverMessageArray = [];'} <br />
                    {'let senderMessageArray = [];'} <br />
                    {'let senderMessages = map.get(_address.toUpperCase());'} <br />
                    {'let receiverMessages = map.get(_activeChat.toUpperCase());'} <br />
                    {'senderMessageArray.push([senderMessages, _activeChat.toUpperCase()])'} <br />
                    {'receiverMessageArray.push([receiverMessages, _address.toUpperCase()])'} <br />
                </h5>
            </div>
        </div>
    );
}

export default SolutionsMain ;