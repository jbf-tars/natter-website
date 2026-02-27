export const faqs = [
  {
    question: "Do I need an OpenAI API key?",
    answer:
      "Yes. Waffler uses your own OpenAI API key for both Whisper transcription and GPT text cleanup. This means your data goes directly to OpenAI and never passes through our servers. You can get an API key at platform.openai.com.",
  },
  {
    question: "How does Waffler protect my privacy?",
    answer:
      "Your audio is sent directly from your machine to OpenAI using your own API key. We never see, store, or process your audio or transcriptions. There's no account required to download, and we don't collect any usage data from the app.",
  },
  {
    question: "What happens when the free trial expires?",
    answer:
      "After the 7-day trial, Normal mode stops working until you purchase Waffler Pro ($29 one-time). You'll never lose access to your settings or API key configuration — just unlock to keep transcribing.",
  },
  {
    question: "Does Waffler work offline?",
    answer:
      "Waffler requires an internet connection since it sends audio to OpenAI's Whisper API for transcription and uses GPT for text cleanup. The app itself runs locally, but the AI processing happens in the cloud via your API key.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Waffler supports all languages that OpenAI's Whisper model supports — over 50 languages including English, Spanish, French, German, Japanese, Chinese, and many more. Language is auto-detected from your speech.",
  },
  {
    question: "Does it work with every app?",
    answer:
      "Yes! Waffler works system-wide. The global hotkey activates from any application, and the transcribed text is automatically pasted wherever your cursor is — text editors, browsers, Slack, email, IDEs, you name it.",
  },
  {
    question: "Is there a Linux version?",
    answer:
      "Not yet, but it's on our roadmap. Currently Waffler is available for macOS and Windows. Follow us on GitHub for updates on Linux support.",
  },
  {
    question: "What's the difference between Normal and Ramble mode?",
    answer:
      "Normal mode gives you clean, faithful transcription of what you said. Ramble mode is designed for ADHD-friendly brain dumps — speak freely and messily, and the AI restructures your thoughts into clear, organized text. Great for getting ideas out of your head fast.",
  },
];
