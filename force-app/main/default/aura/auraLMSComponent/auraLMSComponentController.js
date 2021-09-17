({
    handleMessage: function (component, message) {
        if (message != null && message.getParam('auraData') != null) {
            component.set("v.messageReceived", message.getParam('auraData').value);
        }
    }

    , inputHandler: function (component, event, helper) {
        component.set("v.messageValue", event.target.value);
    }

    , publishMessageHandler: function (component) {
        let messageValue = component.get("v.messageValue");
        let message = {
            lmsData: {
                value: messageValue
            }
        }
        component.find("sampleMessageChannel").publish(message);
    }
})
