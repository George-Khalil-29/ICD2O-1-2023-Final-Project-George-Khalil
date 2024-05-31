// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

function getBotResponse(input) {
  if (input === "hello") {
    return "Hello How are you!";
  } else if (input === "goodbye") {
    return "Talk to you later!";
  } else if (input === "fun fact") {
    const funFacts = [
      "The shortest war in history lasted only 38 minutes between Britain and Zanzibar in 1896.",
      "A group of flamingos is called a flamboyance.",
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
      "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
      "Octopuses have three hearts."
    ];
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
  } else if (input === "random number") {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return `Your random number is ${randomNumber}.`;
  } else if (input.startsWith("calculate")) {
    try {
      const expression = input.substring(10);
      const result = eval(expression);
      return `The result of ${expression} is ${result}.`;
    } catch (error) {
      return "Sorry, I couldn't evaluate that expression.";
    }
  } else if (input === "time") {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    return `The current time is ${timeString}.`;
  } else if (input === "weather") {
    // Implement weather API integration to fetch current weather information
    return "The weather is currently sunny.";
  } else if (input === "joke") {
    // Implement joke API integration to fetch a random joke
    return "Why don't scientists trust atoms? Because they make up everything!";
  } else if (input === "riddle") {
    // Implement riddle functionality to provide a random riddle
    return "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?";
  } else {
    return "I'm sorry, I didn't understand that. Please try again.";
  }
}
