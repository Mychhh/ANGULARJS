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
    },
    {
      "no": 11,
      "thesis_title": "A Comparative Study on the Performance of Deep Learning Models for Image Classification",
      "thesis_title_description": "This study aims to compare the performance of different deep learning models for image classification tasks, such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), and generative adversarial networks (GANs). The study will evaluate the models based on their accuracy, training time, and other performance metrics."
    },
    {
      "no": 12,
      "thesis_title": "Design and Implementation of an Online Shopping System using Blockchain Technology",
      "thesis_title_description": "This project aims to design and implement an online shopping system that uses blockchain technology for secure and transparent transactions. The system will allow customers to purchase products using cryptocurrencies, and it will also provide a decentralized platform for sellers to manage their products and transactions."
    },
    {
      "no": 13,
      "thesis_title": "Development of an Automated Attendance Monitoring System using Facial Recognition Technology",
      "thesis_title_description": "This study aims to develop an automated attendance monitoring system that uses facial recognition technology for accurate and efficient tracking of attendance records. The system will use cameras to capture images of students' faces, and it will use machine learning algorithms to identify and match the faces with the students' records."
    },
    {
      "no": 14,
      "thesis_title": "A Study on the Performance of Cloud Computing Platforms for Big Data Analytics",
      "thesis_title_description": "This study aims to evaluate the performance of different cloud computing platforms for big data analytics tasks, such as data processing, storage, and analysis. The study will compare the platforms based on their scalability, reliability, and cost-effectiveness."
    },
    {
      "no": 15,
      "thesis_title": "Design and Development of a Mobile Application for Food Delivery Service",
      "thesis_title_description": "This project aims to design and develop a mobile application that provides a food delivery service for customers. The application will allow customers to browse and order food from different restaurants, and it will provide a real-time tracking system for the delivery of the orders."
    },
    {
      "no": 16,
      "thesis_title": "An Investigation of the Use of Natural Language Processing for Sentiment Analysis in Social Media",
      "thesis_title_description": "This study aims to investigate the use of natural language processing (NLP) techniques for sentiment analysis in social media. The study will explore different NLP algorithms, such as sentiment lexicons, machine learning, and deep learning models, for analyzing the sentiment of social media posts."
    },
    {
      "no": 17,
      "thesis_title": "Design and Development of an Online Learning Management System using Gamification Techniques",
      "thesis_title_description": "This project aims to design and develop an online learning management system that uses gamification techniques to enhance students' engagement and motivation. The system will provide interactive and game-like activities to make learning more fun and effective."
    },
    {
      "no": 18,
      "thesis_title": "A Comparative Study on the Performance of Machine Learning Algorithms for Predicting Stock Prices",
      "thesis_title_description": "This study aims to compare the performance of different machine learning algorithms for predicting stock prices. The study will evaluate the algorithms based on their accuracy, precision, recall, and other performance metrics."
    },
    {
      "no": 19,
      "thesis_title": "Design and Implementation of a Cloud-Based Healthcare Management System",
      "thesis_title_description": "This thesis aims to develop a cloud-based healthcare management system that can store and manage patient records securely and efficiently."
    },
    {
      "no": 20,
      "thesis_title": "Design and Implementation of a Real-Time Traffic Monitoring System Using IoT",
      "thesis_title_description": "This thesis aims to develop a real-time traffic monitoring system that can provide accurate and up-to-date traffic information to drivers using IoT devices."
    },
    {
      "no": 21,
      "thesis_title": "Design and Implementation of an E-Commerce Website with Recommendation System",
      "thesis_title_description": "This thesis aims to develop an e-commerce website with a recommendation system that can provide personalized product recommendations to users based on their browsing and purchase history."
    },
    {
      "no": 22,
      "thesis_title": "Design and Implementation of a Social Network Analysis Tool for Twitter",
      "thesis_title_description": "This thesis aims to develop a social network analysis tool for Twitter that can analyze and visualize user networks, sentiment analysis, and other relevant metrics."
    },
    {
      "no": 23,
      "thesis_title": "Design and Implementation of a Mobile-Based Attendance Monitoring System Using QR Codes",
      "thesis_title_description": "This thesis aims to develop a mobile-based attendance monitoring system that can record attendance using QR codes and generate reports automatically."
    },
    {
      "no": 24,
      "thesis_title": "Design and Implementation of an Online Recruitment System with AI-based Screening",
      "thesis_title_description": "This thesis aims to develop an online recruitment system that can screen and shortlist candidates using AI-based algorithms to save time and resources for the HR department."
    },
    {
      "no": 25,
      "thesis_title": "Design and Implementation of a Blockchain-Based Voting System",
      "thesis_title_description": "This thesis aims to develop a blockchain-based voting system that can ensure transparency, security, and immutability of voting records."
    },
    {
      "no": 26,
      "thesis_title": "Design and Implementation of a Cybersecurity Incident Management System",
      "thesis_title_description": "This thesis aims to develop a cybersecurity incident management system that can detect, analyze, and respond to cybersecurity incidents in real-time."
    },
    {
      "no": 27,
      "thesis_title": "Design and Implementation of an Automated Essay Scoring System Using Machine Learning",
      "thesis_title_description": "This thesis aims to develop an automated essay scoring system that can provide accurate and reliable scoring of essays using machine learning algorithms."
    },
    {
      "no": 28,
      "thesis_title": "Design and Implementation of a Mobile-Based Inventory Management System Using Barcode Scanning",
      "thesis_title_description": "This thesis aims to develop a mobile-based inventory management system that can track inventory levels and generate reports using barcode scanning."
    },
    {
      "no": 29,
      "thesis_title": "Design and Implementation of a Machine Learning-Based Recommender System for Music Streaming Platforms",
      "thesis_title_description": "This thesis aims to develop a machine learning-based recommender system for music streaming platforms that can provide personalized music recommendations to users based on their listening history."
    },
    {
      "no": 30,
      "thesis_title": "Design and Implementation of an AI-Based Chatbot for Customer Support",
      "thesis_title_description": "This thesis aims to develop an AI-based chatbot that can provide customer support and answer common questions"
    },
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForCS.length) + 1);
    return this.titleIdeasForCS[this.titleNumber - 1];
  }

  getAllTitleIdeas(): ThesisTitle[] {
    return this.titleIdeasForCS;
  }

}
