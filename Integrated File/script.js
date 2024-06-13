import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import MarkdownIt from 'markdown-it';

let API_KEY = 'AIzaSyBhc_Pub6pZL4yxciDn9-zNX6r3D0Er9XM';
let form = document.querySelector('form');
let promptInput = document.querySelector('textarea[name="prompt"]');
let output = document.querySelector('#output');
const synth = window.speechSynthesis;

window.addEventListener("beforeunload", function() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        if(isListening === true){
            stopListening();
        }
    }
});


function speakText(text) {
    console.log("speak");
    if (window.speechSynthesis) {
        // synth.cancel();
        const utterance = new SpeechSynthesisUtterance()
        utterance.text = text;
        utterance.lang = "en-US";
        const selectFemaleVoice = () => {
            const voices = synth.getVoices();
            for (let voice of voices) {
                if (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Google US English')) {
                    return voice;
                }
            }
            return null;
        };
        synth.onvoiceschanged = () => {
            const selectedVoice = selectFemaleVoice();
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            utterance.pitch = 2.0;
            utterance.rate = 1.5;
            synth.speak(utterance);
        };
        if (synth.getVoices().length !== 0) {
            const selectedVoice = selectFemaleVoice();
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            utterance.pitch = 2.0;
            utterance.rate = 1.2;
            synth.speak(utterance);
        }
    } else {
        alert("Your browser doesn't support Speech Synthesis.");
    }
}

async function getGeminiResponse() {
    try {
        let contents = [
            {
                role: 'user',
                parts: [
                    { text: promptInput.value + ' In Maximum Of 30 Words' }
                ]
            }
        ];
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
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
    await sleep(5000);
    if(isListening == false){
        startListening();
    }
}

form.onsubmit = async (ev) => {
    ev.preventDefault();
    synth.cancel();
    output.textContent = 'Generating...';
    getGeminiResponse();
};





const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const outputDiv = document.getElementById('input');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
let isListening = false;
recognition.continuous = true;



function handleResult(event) {
    let transcript = '';
    output.textContent = '';
    if(isListening != true){
        startListening();
    }
    for (let i = 0; i < event.results.length; ++i) {
        transcript = event.results[i][0].transcript;
        console.log(transcript);
    }
    outputDiv.textContent = transcript;
    if(isListening == true){
        stopListening();
    }
    getGeminiResponse();
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startListening() {
    startButton.style.backgroundColor = "#03ff3e";
    stopButton.style.backgroundColor = "rgb(187, 31, 31)";
    startButton.disabled = true;
    stopButton.disabled = false;
    recognition.start();
    isListening = true;
}

function stopListening() {
    recognition.stop();
    isListening = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    startButton.style.backgroundColor = "#28a745";
    stopButton.style.backgroundColor = "#dc3545";
}

recognition.addEventListener('result', handleResult);
recognition.addEventListener('end', () => {
    if (isListening) {
        recognition.start();
    }
});
recognition.addEventListener('error', (event) => {
    console.error('Speech recognition error:', event.error);
    if (isListening) {
        recognition.start();
    }
});

async function intro(){
    outputDiv.textContent = 'Calling...';
    await sleep(2000);
    outputDiv.textContent = '';
    speakText('Hello there How Can I Help You?');
    await sleep(2500);
    startListening();
}

startButton.addEventListener('click', intro);
stopButton.addEventListener('click', stopListening);













import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDFsQYAlgKnhi7tenivlmOo_86ZZRsF6kU",
    authDomain: "gemini-api-web-app.firebaseapp.com",
    projectId: "gemini-api-web-app",
    storageBucket: "gemini-api-web-app.appspot.com",
    messagingSenderId: "695894065204",
    appId: "1:695894065204:web:281cd7c953e3f484358a61",
    measurementId: "G-HZ63XMGJ94"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);