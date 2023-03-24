import { Injectable } from '@angular/core';
import { ThesisTitle } from '../interface/ThesisTitle';

@Injectable({
  providedIn: 'root'
})
export class ComputerCsService {

  titleIdeasForCS: ThesisTitle[] = [
    {
      "no": 1,
      "thesis_title": "An Intelligent Personal Assistant using Natural Language Processing", "thesis_title_description": "Develop an AI-based personal assistant that can understand and respond to user queries in natural language."
    },
    {
      "no": 2,
      "thesis_title": "A Machine Learning Model for Predicting Customer Churn in a Telecom Company",
      "thesis_title_description": "Build a predictive model that can identify customers who are likely to switch to a competitor or stop using a telecom service."
    },
    {
      "no": 3,
      "thesis_title": "Securing Internet of Things (IoT) Devices using Blockchain Technology",
      "thesis_title_description": "Explore the use of blockchain technology in securing IoT devices from cyber attacks and data breaches."
    },
    {
      "no": 4,
      "thesis_title": "A Comparative Study of Machine Learning Algorithms for Sentiment Analysis",
      "thesis_title_description": "Compare the performance of different machine learning algorithms in analyzing and classifying sentiment in social media posts or reviews."
    },
    {
      "no": 5,
      "thesis_title": "Design and Implementation of an E-Commerce Platform with AI-based Personalized Product Recommendations",
      "thesis_title_description": "Develop an e-commerce platform that uses AI to recommend products based on user preferences and behavior."
    },
    {
      "no": 6,
      "thesis_title": "A Secure and Efficient Mobile Voting System using Blockchain Technology",
      "thesis_title_description": "Design and implement a mobile voting system that uses blockchain technology to ensure security, transparency, and anonymity of votes."
    },
    {
      "no": 7,
      "thesis_title": "Design and Development of a Virtual Reality Game with Machine Learning-based Adaptive Gameplay",
      "thesis_title_description": "Create a virtual reality game that uses machine learning to adapt gameplay based on the player's behavior and preferences."
    },
    {
      "no": 8,
      "thesis_title": "An Intelligent Tutoring System using Natural Language Processing and Machine Learning",
      "thesis_title_description": "Develop an AI-based tutoring system that can interact with students using natural language and adapt to their learning styles and progress."
    },
    {
      "no": 9,
      "thesis_title": "A Comparative Analysis of Deep Learning Architectures for Image Recognition",
      "thesis_title_description": "Compare the performance of different deep learning architectures in recognizing and classifying images, such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs)."
    },
    {
      "no": 10,
      "thesis_title": "Design and Development of a Chatbot for Customer Service using Natural Language Processing",
      "thesis_title_description": "Create a chatbot that can understand and respond to customer queries using natural language and machine learning techniques."
    }
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForCS.length) + 1);
    return this.titleIdeasForCS[this.titleNumber - 1];
  }

}
