// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

function getBotResponse(input) {
    if (input === "rock") {
        return "paper";
    } else if (input === "paper") {
        return "scissors";
    } else if (input === "scissors") {
        return "rock";
    } else if (input === "hello") {
        return "Hello there!";
    } else if (input === "goodbye") {
        return "Talk to you later!";
    } else if (input === "fun fact") {
        const funFacts = [
            "The shortest war in history lasted only 38 minutes between Britain and Zanzibar in 1896.",
            "A group of flamingos is called a flamboyance.",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
            "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
            "Octopuses have three hearts.",
        ];
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        return funFacts[randomIndex];
    } else if (input === "random number") {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        return `Your random number is ${randomNumber}.`;
    } else if (input.startsWith("count to")) {
        const numberToCount = parseInt(input.split(" ")[2]);
        if (!isNaN(numberToCount)) {
            let count = "";
            for (let i = 1; i <= numberToCount; i++) {
                count += i + ", ";
            }
            return count.slice(0, -2);
        }
    } else if (input === "time") {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        return `The current time is ${timeString}.`;
    } else {
        return "I'm sorry, I didn't understand that. Try asking something else!";
    }
}
