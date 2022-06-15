    const MessageMap = () => { if (messages === undefined) return;

        let newMessages = [];
        let _messages = messages.receivedMessages;

        for (let k in _messages) {
            newMessages.push([_messages[k][0].toUpperCase(), _messages[k][1]]);
        }

        let map = new Map(newMessages); 
        let receiverMessageArray = [];
        let senderMessageArray = [];

        let senderMessages = map.get(_address.toUpperCase()); 
        let receiverMessages = map.get(_activeChat.toUpperCase()); 

        senderMessageArray.push([senderMessages, _activeChat.toUpperCase()])
        receiverMessageArray.push([receiverMessages, _address.toUpperCase()])