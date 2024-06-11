// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

function getBotResponse(input) {

  if (input.toLowerCase() === "hello") {
    return "Hello How are you!"
  }

  if (input.toLowerCase() === "how are you") {
    return "i'm fine, thank you"
  }

  if (input.toLowerCase() === "goodbye") {
    return "Talk to you later!"
  }

  if (input.toLowerCase() === "fun fact ") {
    const funFacts = [
      "The world's largest desert is not the Sahara, but Antarctica. It's considered a desert because it receives very little precipitation.",
      "The world's largest desert is not the Sahara, but Antarctica. It's considered a desert because it receives very little precipitation.",
      "The world's oldest known city is Jericho, located in the West Bank. It has been continuously inhabited for over 11,000 years.",
      "The driest place on Earth is the Atacama Desert in Chile, where some areas have never recorded rainfall.",
      "The city of Istanbul, Turkey, is the only city in the world located on two continents: Europe and Asia.",
      "Russia has a larger surface area than Pluto.",
      "Lake Baikal in Siberia, Russia, is the world's deepest and oldest freshwater lake, containing around 20% of the world's unfrozen freshwater.",
      "The Amazon Rainforest produces around 20% of the world's oxygen.",
      "The island nation of Tuvalu is one of the smallest countries in the world by land area and is expected to be one of the first countries to disappear due to rising sea levels caused by climate change.",
    ]
    const randomIndex = Math.floor(Math.random() * funFacts.length)
    return funFacts[randomIndex]
  }

  if (input.toLowerCase() === "random number") {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    return `Your random number is ${randomNumber}.`
  }

  if (/^[0-9+\-*/().]/.test(input)) {
    try {
      const result = eval(input)
      return `The result of ${input} is ${result}.`
    } catch (error) {
      return "Sorry, I couldn't evaluate that expression."
    }
  }

  if (input.toLowerCase() === "time") {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
    const timeString = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return `The current time is ${timeString}.`;
}

  if (input.toLowerCase() === "joke") {
    
    const joke = ["Why couldn't the bicycle stand up by itself? It was two-tired!",
                  "What do you call fake spaghetti? An impasta!",
                  "I'm reading a book on anti-gravity. It's impossible to put down!",
                  "I used to play piano by ear, but now I use my hands.",
                  "I told my computer I needed a break... now it won't stop sending me spam!",
                  "Why was the computer cold? It left its Windows open!",
                  "Why did the computer go to the doctor? It had a virus!",
                  "Why did the computer go to the dentist? It had Bluetooth!",
                  "Why was the JavaScript developer sad? Because he didn't know how to null his feelings!",
                  "Why did the programmer always wear glasses? Because he couldn't C#!",
    ]
    const randomIndex = Math.floor(Math.random() * joke.length)
    return joke[randomIndex]
  }

  if (input.toLowerCase() === "riddle") {
    const riddles = [
        "What has a head and a tail but no body? (A coin)",
        "What has keys but can't open locks? (A piano)",
        "What has a neck but no head? (A bottle)",
        "The more you take, the more you leave behind. What am I? (Footsteps)",
        "What can travel around the world while staying in a corner? (A stamp)"
        // Add more riddles here
    ];

    const randomIndex = Math.floor(Math.random() * riddles.length);
    return riddles[randomIndex];
}

if (input.toLowerCase() === "rock") {
    return "paper";
} else if (input.toLowerCase() === "paper") {
    return "scissors";
} else if (input.toLowerCase() === "scissors") {
    return "rock";
}


  return "I'm sorry, I didn't understand that. Please try again."
}
