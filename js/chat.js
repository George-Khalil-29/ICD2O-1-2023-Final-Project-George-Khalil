// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html



// Collapsible
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    // Convert hours to AM/PM format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    
    // Add leading zeros to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutes + ' ' + ampm;
    return time;
}

// Gets the first message
function firstBotMessage() {
    const firstMessage = "Hello, How can i help you?";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    const time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    const botResponse = getBotResponse(userText);
    const botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText === "") {
        userText = "I love Code Palace!";
    }

    const userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000);

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    const userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
