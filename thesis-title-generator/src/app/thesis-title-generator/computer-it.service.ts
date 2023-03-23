import { Injectable } from '@angular/core';
import { ThesisTitle } from '../interface/ThesisTitle';

@Injectable({
  providedIn: 'root'
})
export class ComputerITService {

  titleIdeasForIT: ThesisTitle[] = [
    {
      "no": 1,
      "thesis_title": "An Investigation of Cybersecurity Measures in E-commerce Websites",
      "thesis_title_description": "This thesis aims to explore the current cybersecurity measures used in e-commerce websites, analyze their strengths and weaknesses, and propose improvements to ensure secure online transactions."
    },
    {
      "no": 2,
      "thesis_title": "Developing a Mobile Application for Organizing and Scheduling Work Tasks",
      "thesis_title_description": "This thesis will focus on creating a mobile application that will help users organize and schedule their work tasks more efficiently. The application will feature task management tools, scheduling tools, and reminders."
    },
    {
      "no": 3,
      "thesis_title": "A Comparative Study of Cloud Computing Platforms",
      "thesis_title_description": "This thesis will analyze and compare different cloud computing platforms, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). The study will focus on their features, pricing, and performance."
    },
    {
      "no": 4,
      "thesis_title": "Implementing Blockchain Technology in Supply Chain Management",
      "thesis_title_description": "This thesis will explore the use of blockchain technology in supply chain management. The study will focus on the benefits of blockchain, such as transparency and immutability, and how they can be leveraged to improve supply chain operations."
    },
    {
      "no": 5,
      "thesis_title": "An Investigation of the Impact of Social Media on Consumer Buying Behavior",
      "thesis_title_description": "This thesis aims to analyze the impact of social media on consumer buying behavior. The study will focus on the influence of social media on consumer decision-making and how businesses can leverage this influence to increase sales."
    },
    {
      "no": 6,
      "thesis_title": "Developing an E-learning Platform for Remote Education",
      "thesis_title_description": "This thesis will focus on creating an e-learning platform that will enable remote education. The platform will feature video lectures, interactive quizzes, and discussion forums to facilitate remote learning."
    },
    {
      "no": 7,
      "thesis_title": "A Comparative Study of Open-Source and Proprietary Software",
      "thesis_title_description": "This thesis will analyze and compare open-source and proprietary software. The study will focus on their features, performance, and cost-effectiveness."
    },
    {
      "no": 8,
      "thesis_title": "Implementing Machine Learning Algorithms in Fraud Detection Systems",
      "thesis_title_description": "This thesis will explore the use of machine learning algorithms in fraud detection systems. The study will focus on how machine learning can improve the accuracy and efficiency of fraud detection."
    },
    {
      "no": 9,
      "thesis_title": "An Investigation of Data Privacy Laws and Regulations in the Philippines",
      "thesis_title_description": "This thesis aims to analyze the current data privacy laws and regulations in the Philippines. The study will focus on how these laws and regulations impact businesses and individuals."
    },
    {
      "no": 10,
      "thesis_title": "Developing a Chatbot for Customer Support",
      "thesis_title_description": "This thesis will focus on creating a chatbot that can provide customer support. The chatbot will be designed to handle customer queries, provide information, and escalate issues to human support staff when necessary."
    },
    {
      "no": 11,
      "thesis_title": "Developing an Intelligent Tutoring System for Programming Concepts",
      "thesis_title_description": "This thesis aims to create an intelligent tutoring system that utilizes machine learning algorithms to provide personalized feedback and support to students learning programming concepts."
    },
    {
      "no": 12,
      "thesis_title": "Securing Mobile Applications using Blockchain Technology",
      "thesis_title_description": "This thesis investigates the use of blockchain technology to enhance the security of mobile applications by implementing a decentralized, immutable ledger for storing and verifying user data."
    },
    {
      "no": 13,
      "thesis_title": "Predicting User Behavior in Social Networks using Natural Language Processing",
      "thesis_title_description": "This thesis explores the use of natural language processing techniques to analyze user behavior in social networks, with the goal of predicting future actions and interests based on past interactions."
    }
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForIT.length) + 1);
    return this.titleIdeasForIT[this.titleNumber - 1];
  }

}

