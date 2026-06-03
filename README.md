# AI Sentiment Analysis Web App

## 🌐 Live Demo
You can access the application directly in your browser:
https://kellyaraujoo.github.io/ISY503-Assessment3-NLP/

## 📖 About the Project
This project is a web-based application that analyzes user reviews and predicts whether the sentiment is positive or negative using Artificial Intelligence.

The system consists of a front-end interface where users can type a review, and a back-end model that processes the text and returns the sentiment result.

This project was developed as part of the ISY503 Intelligent Systems assessment.

---

## 🚀 Features
- User-friendly interface with input text box
- Real-time sentiment analysis (UI simulation / backend integration pending)
- Popup result display with modern glassmorphism design
- Ready for integration with a fine-tuned BERT model

---

## 🛠️ Technologies Used
- HTML5
- CSS3 (Glassmorphism UI)
- JavaScript
- Python (for backend integration)
- Machine Learning (BERT - planned)

---

## 📂 Project Structure

Repository Structure
```
ISY503-Assessment3-NLP/
|
├── model_lstm.ipynb            # Bidirectional LSTM model (trained from scratch)
├── model_bert.ipynb            # BERT model (fine-tuned on Amazon reviews)
│
├── web_app/                    # Web application (frontend + Flask backend)
│   ├── app.py                  # Flask server and routing logic
│   ├── static/
│   │   │  │  └── cc/
│   │   │  │        └── main.css
│   │   │  └── js/
│   │   │    └── script.js
│   │   └── img/
│   │         └── banner.png
│   │          └── logo.png
│   │
│   └── templates/
│       └── index.html          # Main user interface
│
├── models/                     # Saved model weights (not tracked - see .gitignore)
│   ├── lstm_model.pt
│   └── bert_finetuned/
│
├── requirements.txt
├── .gitignore
└── README.md
```


## 👥 Team

- **Kelly Thaiane Costa de Araujo**
  - Frontend development, UI/UX design, and user interaction

- **Nomayer Hossain**
  - Machine learning models (LSTM and BERT), data pipeline, and system architecture

- **Andrew Chang**
  - Project coordination, presentation, and video editing
