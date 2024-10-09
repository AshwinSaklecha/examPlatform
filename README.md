# Full-Screen Exam Platform

This React app creates a full-screen environment for online exams. It starts in full-screen mode with a countdown timer, and if the user tries to exit, a warning is triggered. After a second exit attempt, the exam is automatically ended. A basic report is shown afterward to display the exam's status.

## Features

- Full-screen exam mode
- Countdown timer
- Violation warnings for attempts to exit full-screen mode
- Exam termination after two violation attempts
- Basic exam report upon completion or termination

## Prerequisites

Before starting, make sure you have the latest version of Node.js and npm installed.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/AshwinSaklecha/examPlatform.git
   ```

2. Navigate to the project directory:
   ```
   cd examPlatform
   ```

3. Install the dependencies:
   ```
   npm i
   ```

## Running the Application

To run the application in development mode, follow these steps:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your web browser and go to http://localhost:5173 (or the port shown in the terminal). You can also Ctrl + Click the link in the terminal to open it directly.

## Usage

1. Click the "Start Exam" button to begin the exam in full-screen mode.
2. The timer will start counting down from 60 minutes
3. If you attempt to exit full-screen mode, you'll receive a warning.
4. A second attempt to exit full-screen mode will terminate the exam.
5. If you try to select text, double-click, or right-click during the exam, the exam will terminate on the first exit attempt.
6. You can manually submit the exam using the "Submit Exam" button.
7. After the exam ends (either by submission, termination, or time-up), you'll see a basic report.
