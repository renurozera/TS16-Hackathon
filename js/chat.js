(function($, windowObject) {
	var socket = io(),
        messages = $("#messages"),
        onlineUsers = $("#onlineUsers"),
        receiverID = $("#receiverID"),
        chatMessage = $("#chatMessage"),
        sendButton = $("#sendButton");
    var Functions = {
        pageReady : function() {
            socket.on('receivedMessage', function(message) {
                //var message = JSON.parse(messageObject);
                var senderID = message.senderID;
                var messageContent = message.messageContent;
                console.log( "kk" + messageContent);
                messages.append('<p class="received">Received from: ' + senderID + ': </p>');
                messages.append('<p>' + messageContent + ': </p>');
            });
            socket.on('onlineUser', function(user) {
                //var user = JSON.parse(userObject);
                //var user = userObject;
                var userID = user.userID;
                var userName = user.userName;
                onlineUsers.append('<p>' + userName + ': '+ userID + '</p>');
            });
        },
        sendToServer : function(key, message) {
            socket.emit(key, message);
        },
        init : function() {
            
        }
    };
    sendButton.click(function() {
        var message = {
            "receiverID" : "",
            "messageContent" : ""
        };
        var receiverIDContent = receiverID.val();
        var messageContent = chatMessage.val();
        message.receiverID = receiverIDContent;
        message.messageContent = messageContent;
        Functions.sendToServer('chatMessage', message);
        messages.append('<p class="sent">You sent to' + receiverIDContent + ': </p>');
        messages.append('<p>' + messageContent + ': </p>');
        chatMessage.val("");
    });
    $(document).ready(function() {
        Functions.init();
        Functions.pageReady();
    });
}(jQuery, window));