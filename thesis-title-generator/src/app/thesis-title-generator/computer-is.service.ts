import { Injectable } from '@angular/core';
import { ThesisTitle } from '../interface/ThesisTitle';


@Injectable({
  providedIn: 'root'
})
export class ComputerIsService {

  titleIdeasForIS: ThesisTitle[] = [
    {
      "no": 1,
      "thesis_title": "Design and Implementation of a Data Warehouse for Business Intelligence",
      "thesis_title_description": "This thesis will focus on the development of a data warehouse to support business intelligence and decision-making processes."
    },
    {
      "no": 2,
      "thesis_title": "Assessment of Cybersecurity Risks and Threats for Small and Medium-Sized Enterprises",
      "thesis_title_description": "This thesis will evaluate the cybersecurity risks and threats that small and medium-sized enterprises face and recommend strategies to mitigate those risks."
    },
    {
      "no": 3,
      "thesis_title": "Predictive Analytics for Credit Risk Management in the Banking Industry",
      "thesis_title_description": "This thesis will explore the use of predictive analytics to manage credit risk in the banking industry and evaluate its effectiveness."
    },
    {
      "no": 4,
      "thesis_title": "Application of Artificial Intelligence in Supply Chain Management",
      "thesis_title_description": "This thesis will investigate the use of artificial intelligence to optimize supply chain management processes and improve operational efficiency."
    },
    {
      "no": 5,
      "thesis_title": "Development of an E-commerce Website with a Recommendation Engine",
      "thesis_title_description": "This thesis will focus on the development of an e-commerce website that uses a recommendation engine to personalize product recommendations for users."
    },
    {
      "no": 6,
      "thesis_title": "Impact of Social Media Marketing on Consumer Behavior",
      "thesis_title_description": "This thesis will examine the impact of social media marketing on consumer behavior and explore the factors that influence purchase decisions."
    },
    {
      "no": 7,
      "thesis_title": "Analysis of Sentiment in Customer Reviews using Natural Language Processing",
      "thesis_title_description": "This thesis will use natural language processing techniques to analyze sentiment in customer reviews and evaluate the effectiveness of sentiment analysis tools."
    },
    {
      "no": 8,
      "thesis_title": "Blockchain Technology for Supply Chain Transparency and Traceability",
      "thesis_title_description": "This thesis will investigate the use of blockchain technology to enhance supply chain transparency and traceability and evaluate its potential benefits and challenges."
    },
    {
      "no": 9,
      "thesis_title": "Development of a Mobile Application for Inventory Management",
      "thesis_title_description": "This thesis will focus on the development of a mobile application to facilitate inventory management and improve supply chain efficiency."
    },
    {
      "no": 10,
      "thesis_title": "Evaluation of Cloud Computing Services for Small and Medium-Sized Enterprises",
      "thesis_title_description": "This thesis will evaluate cloud computing services available to small and medium-sized enterprises and analyze their benefits and limitations."
    },
    {
      "no": 11,
      "thesis_title": "Development of an Inventory Management System for Small Retail Businesses",
      "thesis_title_description": "This thesis will explore the development of an inventory management system that can help small retail businesses better manage their inventory and improve their operations."
    },
    {
      "no": 12,
      "thesis_title": "Design and Implementation of a Cloud-based E-Learning System",
      "thesis_title_description": "This thesis will investigate the design and implementation of a cloud-based e-learning system that can be accessed by students and educators from anywhere and at any time."
    },
    {
      "no": 13,
      "thesis_title": "An Analysis of the Impact of Social Media on Business Marketing Strategies",
      "thesis_title_description": "This thesis will analyze the impact of social media on business marketing strategies and investigate how businesses can leverage social media platforms to reach and engage with their target audience."
    },
    {
      "no": 14,
      "thesis_title": "Investigating the Use of Blockchain Technology in Supply Chain Management",
      "thesis_title_description": "This thesis will investigate the use of blockchain technology in supply chain management and explore how it can be used to improve transparency, traceability, and accountability in the supply chain."
    },
    {
      "no": 15,
      "thesis_title": "A Comparative Study of Machine Learning Algorithms for Sentiment Analysis",
      "thesis_title_description": "This thesis will compare and evaluate the performance of different machine learning algorithms for sentiment analysis, which can be used to analyze and classify the sentiment of social media posts, product reviews, and customer feedback."
    },
    {
      "no": 16,
      "thesis_title": "Development of a Mobile Application for Emergency Response Management",
      "thesis_title_description": "This thesis will explore the development of a mobile application that can help emergency responders better manage emergency situations and improve communication between responders and victims."
    },
    {
      "no": 17,
      "thesis_title": "Investigating the Effectiveness of Gamification in Employee Training and Development",
      "thesis_title_description": "This thesis will investigate the effectiveness of gamification in employee training and development and explore how gamification can be used to improve employee engagement, motivation, and learning outcomes."
    },
    {
      "no": 18,
      "thesis_title": "An Analysis of the Factors Affecting E-Commerce Adoption in Developing Countries",
      "thesis_title_description": "This thesis will analyze the factors affecting e-commerce adoption in developing countries and investigate how businesses can overcome the barriers to e-commerce adoption and leverage e-commerce to expand their reach and grow their business."
    },
    {
      "no": 19,
      "thesis_title": "Development of a Web-based Point of Sale System for Small Retail Businesses",
      "thesis_title_description": "This thesis will explore the development of a web-based point of sale system that can help small retail businesses improve their sales, inventory management, and customer relationship management."
    },
    {
      "no": 20,
      "thesis_title": "Investigating the Impact of Cloud Computing on Business Operations",
      "thesis_title_description": "This thesis will investigate the impact of cloud computing on business operations and explore how businesses can leverage cloud computing to improve their efficiency, scalability, and cost-effectiveness."
    },
    {
      "no": 21,
      "thesis_title": "Design and Development of a Computerized Library Management System",
      "thesis_title_description": "This thesis will explore the design and development of a computerized library management system that can help librarians better manage the library"
    },
    {
      "no": 22,
      "thesis_title": "A Comparative Analysis of Object-Oriented Programming Languages",
      "thesis_title_description": "This thesis will compare the different object-oriented programming languages and their suitability for different programming tasks."
    },
    {
      "no": 23,
      "thesis_title": "A Study on the Effectiveness of Artificial Intelligence in Cybersecurity",
      "thesis_title_description": "This thesis will explore the use of AI in detecting and preventing cyber attacks and assess its effectiveness in comparison to traditional methods."
    },
    {
      "no": 24,
      "thesis_title": "An Investigation of Cloud Computing Security Risks and Mitigation Strategies",
      "thesis_title_description": "This thesis will examine the security risks associated with cloud computing and propose mitigation strategies to address them."
    },
    {
      "no": 25,
      "thesis_title": "Blockchain Technology: A Comprehensive Study",
      "thesis_title_description": "This thesis will provide an in-depth analysis of blockchain technology, its applications, and its impact on various industries."
    },
    {
      "no": 26,
      "thesis_title": "A Review of Machine Learning Algorithms for Predictive Analytics",
      "thesis_title_description": "This thesis will review the most commonly used machine learning algorithms for predictive analytics and evaluate their effectiveness for different types of data."
    },
    {
      "no": 27,
      "thesis_title": "An Assessment of the Impact of Social Media on Human Communication and Interaction",
      "thesis_title_description": "This thesis will examine the impact of social media on human communication and interaction, including its effects on social relationships, privacy, and mental health."
    },
    {
      "no": 28,
      "thesis_title": "A Study on the Use of Gamification in Information Systems",
      "thesis_title_description": "This thesis will investigate the use of gamification in information systems to enhance user engagement, motivation, and learning outcomes."
    },
    {
      "no": 29,
      "thesis_title": "An Evaluation of the User Experience of Mobile Applications",
      "thesis_title_description": "This thesis will assess the user experience of mobile applications and identify factors that influence user satisfaction and loyalty."
    },
    {
      "no": 30,
      "thesis_title": "A Comparative Analysis of Data Visualization Tools",
      "thesis_title_description": "This thesis will compare the different data visualization tools and techniques and evaluate their effectiveness for communicating complex data."
    },
    {
      "no": 31,
      "thesis_title": "An Investigation of Big Data Analytics for Business Intelligence",
      "thesis_title_description": "This thesis will explore the use of big data analytics for business intelligence and identify its potential benefits and challenges."
    },
    {
      "no": 32,
      "thesis_title": "A Study on the Implementation of ERP Systems in Organizations",
      "thesis_title_description": "This thesis will investigate the challenges and opportunities associated with the implementation of ERP systems in organizations."
    },
    {
      "no": 33,
      "thesis_title": "An Analysis of Information Security Policies in Organizations",
      "thesis_title_description": "This thesis will analyze the information security policies in organizations and identify areas for improvement."
    },
    {
      "no": 34,
      "thesis_title": "A Review of Cloud-based Project Management Tools",
      "thesis_title_description": "This thesis will review the most commonly used cloud-based project management tools and evaluate their effectiveness for managing complex projects."
    },
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForIS.length) + 1);
    return this.titleIdeasForIS[this.titleNumber - 1];
  }

  getAllTitleIdeas(): ThesisTitle[] {
    return this.titleIdeasForIS;
  }
}
