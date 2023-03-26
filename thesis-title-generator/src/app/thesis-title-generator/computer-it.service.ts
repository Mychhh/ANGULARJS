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
    },
    {
      "no": 14,
      "thesis_title": "Development of a Mobile App for Online Learning",
      "thesis_title_description": "Design and develop a mobile application for online learning to facilitate the delivery of education to students."
    },
    {
      "no": 15,
      "thesis_title": "Enhancement of Network Security Using Machine Learning",
      "thesis_title_description": "Investigate the use of machine learning techniques to improve the security of computer networks by identifying and responding to potential security threats."
    },
    {
      "no": 16,
      "thesis_title": "Design and Implementation of a Cloud-Based Inventory Management System",
      "thesis_title_description": "Develop a cloud-based system that allows businesses to manage their inventory, track their stock levels, and generate real-time reports."
    },
    {
      "no": 17,
      "thesis_title": "Development of a Chatbot for Customer Support",
      "thesis_title_description": "Design and develop a chatbot that can provide customer support to users, answering their questions and resolving their issues in a timely and efficient manner."
    },
    {
      "no": 18,
      "thesis_title": "Analysis of Big Data Using Data Mining Techniques",
      "thesis_title_description": "Explore data mining techniques to analyze large sets of data and extract valuable insights that can be used to inform business decisions."
    },
    {
      "no": 19,
      "thesis_title": "Development of an E-Commerce Website for Online Shopping",
      "thesis_title_description": "Design and develop an e-commerce website that allows users to browse, select, and purchase products online, with features such as shopping cart, payment gateway, and order tracking."
    },
    {
      "no": 20,
      "thesis_title": "Enhancement of Web Accessibility for People with Disabilities",
      "thesis_title_description": "Investigate ways to improve the accessibility of web content for people with disabilities, including visual, auditory, and motor impairments."
    },
    {
      "no": 21,
      "thesis_title": "Development of a Mobile Game Using Unity",
      "thesis_title_description": "Design and develop a mobile game using the Unity game engine, incorporating features such as game mechanics, graphics, sound, and user interface design."
    },
    {
      "no": 22,
      "thesis_title": "Analysis and Optimization of Web Page Load Times",
      "thesis_title_description": "Investigate ways to reduce the load time of web pages, using techniques such as image optimization, caching, and content delivery networks."
    },
    {
      "no": 23,
      "thesis_title": "Development of a Computer Vision System for Object Recognition",
      "thesis_title_description": "Design and develop a computer vision system that can recognize and classify objects in real-time using techniques such as deep learning and convolutional neural networks."
    },
    {
      "no": 24,
      "thesis_title": "Enhancement of Human-Computer Interaction Using Augmented Reality",
      "thesis_title_description": "Investigate the use of augmented reality to enhance the interaction between humans and computers, with applications such as virtual product visualization and training simulations."
    },
    {
      "no": 25,
      "thesis_title": "An Analysis of User Behavior in E-commerce Websites",
      "thesis_title_description": "This study will examine user behavior in e-commerce websites, including factors such as search patterns, click-through rates, and conversion rates. The study will provide insights into how e-commerce websites can improve their user experience and increase sales."
    },
    {
      "no": 26,
      "thesis_title": "A Comparison of Mobile App Development Platforms",
      "thesis_title_description": "This study will compare and contrast the features and capabilities of different mobile app development platforms, including native app development, hybrid app development, and web app development. The study will provide insights into which platform is best suited for different types of apps and development projects."
    },
    {
      "no": 27,
      "thesis_title": "A Study of Cloud Computing Security",
      "thesis_title_description": "This study will examine the security risks and challenges associated with cloud computing, including data privacy, data breaches, and cyber attacks. The study will provide insights into how cloud computing providers can improve their security measures and how users can protect their data."
    },
    {
      "no": 28,
      "thesis_title": "A Comparison of Data Mining Techniques",
      "thesis_title_description": "This study will compare and contrast different data mining techniques, including classification, clustering, and association rule mining. The study will provide insights into which technique is best suited for different types of data mining projects and applications."
    },
    {
      "no": 29,
      "thesis_title": "An Analysis of Machine Learning Algorithms",
      "thesis_title_description": "This study will examine different machine learning algorithms, including supervised learning, unsupervised learning, and reinforcement learning. The study will provide insights into which algorithm is best suited for different types of machine learning projects and applications."
    },
    {
      "no": 30,
      "thesis_title": "A Study of Artificial Intelligence Applications in Healthcare",
      "thesis_title_description": "This study will examine how artificial intelligence can be used in healthcare, including applications such as medical image analysis, diagnosis prediction, and personalized treatment. The study will provide insights into the potential benefits and challenges of using AI in healthcare."
    },
    {
      "no": 31,
      "thesis_title": "An Investigation of Cybersecurity Threats and Countermeasures",
      "thesis_title_description": "This study will investigate different cybersecurity threats, including malware, phishing, and social engineering, and the countermeasures that can be used to prevent or mitigate them. The study will provide insights into how organizations can improve their cybersecurity measures to protect their data and systems."
    },
    {
      "no": 32,
      "thesis_title": "A Study of Big Data Analytics in Business",
      "thesis_title_description": "This study will examine how big data analytics can be used in business, including applications such as customer profiling, predictive analytics, and supply chain optimization. The study will provide insights into the potential benefits and challenges of using big data analytics in business."
    },
    {
      "no": 33,
      "thesis_title": "An Analysis of Social Media Marketing Strategies",
      "thesis_title_description": "This study will examine different social media marketing strategies, including content marketing, influencer marketing, and paid advertising. The study will provide insights into how businesses can use social media to reach their target audience and achieve their marketing goals."
    },
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForIT.length) + 1);
    return this.titleIdeasForIT[this.titleNumber - 1];
  }

  getAllTitleIdeas(): ThesisTitle[] {
    return this.titleIdeasForIT;
  }


}

