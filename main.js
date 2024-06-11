import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import MarkdownIt from 'markdown-it';
import './style.css';
let API_KEY = 'AIzaSyBpJ0UtyEq7KnbHjlsaDwzb7-8_jRAt7VU';
let form = document.querySelector('form');
let promptInput = document.querySelector('input[name="prompt"]');
let output = document.querySelector('.output');

function speakText(text) {
  console.log("speak")
  if (window.speechSynthesis) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    utterance.text = text;
    utterance.lang = "en-US"; // Change language as needed
    // utterance.pitch = 1.2;
    synth.speak(utterance);
  } else {
    alert("Your browser doesn't support Speech Synthesis.");
  }
}

form.onsubmit = async (ev) => {
  ev.preventDefault();
  output.textContent = 'Generating...';
  try {
    let contents = [
      {
        role: 'user',
        parts: [
          { text: promptInput.value }
        ]
      }
    ];
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });
    const result = await model.generateContentStream({ contents });
    let buffer = [];
    let md = new MarkdownIt();
    for await (let response of result.stream) {
      buffer.push(response.text());
      console.log("generated")
      speakText(response.text());
      output.innerHTML = md.render(buffer.join(''));
    }
  } catch (e) {
    output.innerHTML += '<hr>' + e;
  }
};
