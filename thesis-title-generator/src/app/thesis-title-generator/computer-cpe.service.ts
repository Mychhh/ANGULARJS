import { Injectable } from '@angular/core';
import { ThesisTitle } from '../interface/ThesisTitle';

@Injectable({
  providedIn: 'root'
})
export class ComputerCpeService {

  titleIdeasForCPE: ThesisTitle[] = [
    {
      "no": 1,
      "thesis_title": "Development of a Wireless Sensor Network for Structural Health Monitoring",
      "thesis_title_description": "This thesis aims to design and develop a wireless sensor network system for monitoring the health of structures such as buildings and bridges."
    },
    {
      "no": 2,
      "thesis_title": "Design and Implementation of a Real-Time Traffic Monitoring System",
      "thesis_title_description": "This thesis focuses on the design and implementation of a real-time traffic monitoring system using computer vision techniques and machine learning algorithms."
    },
    {
      "no": 3,
      "thesis_title": "Design and Implementation of an Intelligent Transportation System for Smart Cities",
      "thesis_title_description": "This thesis aims to design and implement an intelligent transportation system that can optimize traffic flow and reduce congestion in smart cities."
    },
    {
      "no": 4,
      "thesis_title": "Development of a Smart Home Automation System using IoT",
      "thesis_title_description": "This thesis focuses on the design and development of a smart home automation system using Internet of Things (IoT) technologies."
    },
    {
      "no": 5,
      "thesis_title": "Design and Implementation of a Smart Agriculture System using IoT",
      "thesis_title_description": "This thesis aims to design and implement a smart agriculture system that can monitor and control various agricultural parameters such as soil moisture, temperature, and humidity using IoT technologies."
    },
    {
      "no": 6,
      "thesis_title": "Design and Development of a Smart Health Monitoring System",
      "thesis_title_description": "This thesis focuses on the design and development of a smart health monitoring system that can monitor various health parameters such as heart rate, blood pressure, and oxygen saturation."
    },
    {
      "no": 7,
      "thesis_title": "Development of a Gesture Recognition System for Human-Computer Interaction",
      "thesis_title_description": "This thesis aims to develop a gesture recognition system that can recognize and interpret human gestures for human-computer interaction."
    },
    {
      "no": 8,
      "thesis_title": "Design and Implementation of a Mobile-Based Augmented Reality System for Education",
      "thesis_title_description": "This thesis focuses on the design and implementation of a mobile-based augmented reality system that can enhance the learning experience in education."
    },
    {
      "no": 9,
      "thesis_title": "Development of a Natural Language Processing System for Chatbots",
      "thesis_title_description": "This thesis aims to develop a natural language processing system that can improve the conversational ability of chatbots."
    },
    {
      "no": 10,
      "thesis_title": "Design and Implementation of a Blockchain-Based Voting System",
      "thesis_title_description": "This thesis focuses on the design and implementation of a blockchain-based voting system that can ensure the integrity and security of the voting process."
    },
    {
      "no": 11,
      "thesis_title": "Development of a Recommendation System for Online Shopping",
      "thesis_title_description": "This thesis aims to develop a recommendation system that can provide personalized recommendations to online shoppers based on their browsing and purchase history."
    },
    {
      "no": 12,
      "thesis_title": "Design and Implementation of a Cloud-Based Disaster Management System",
      "thesis_title_description": "This thesis focuses on the design and implementation of a cloud-based disaster management system that can aid in the coordination and communication among various emergency services during disasters."
    },
    {
      "no": 13,
      "thesis_title": "Design and Implementation of a Smart Irrigation System Using IoT",
      "thesis_title_description": "This thesis aims to develop a smart irrigation system that utilizes IoT technologies to optimize water usage in agriculture and prevent overwatering or underwatering."
    },
    {
      "no": 14,
      "thesis_title": "Development of a Wireless Home Automation System",
      "thesis_title_description": "This thesis focuses on designing and implementing a wireless home automation system that enables users to control their home appliances remotely using a mobile device or web application."
    },
    {
      "no": 15,
      "thesis_title": "Analysis and Optimization of Network Security Protocols",
      "thesis_title_description": "This thesis investigates various network security protocols and evaluates their strengths and weaknesses. The aim is to optimize these protocols to enhance network security and protect against cyber threats."
    },
    {
      "no": 16,
      "thesis_title": "Design and Implementation of a Real-Time Traffic Management System",
      "thesis_title_description": "This thesis proposes a real-time traffic management system that utilizes various technologies, including IoT and AI, to monitor and manage traffic flow in real-time and prevent congestion."
    },
    {
      "no": 17,
      "thesis_title": "Development of a Smart Hospital Management System",
      "thesis_title_description": "This thesis focuses on designing and implementing a smart hospital management system that improves patient care, reduces waiting times, and enhances the overall efficiency of the hospital."
    },
    {
      "no": 18,
      "thesis_title": "Investigation and Optimization of Wireless Sensor Networks",
      "thesis_title_description": "This thesis aims to investigate wireless sensor networks and optimize their performance, particularly in terms of energy consumption, data transmission, and network lifetime."
    },
    {
      "no": 19,
      "thesis_title": "Design and Implementation of a Solar-Powered Electric Vehicle Charging Station",
      "thesis_title_description": "This thesis proposes a solar-powered electric vehicle charging station that provides a sustainable and renewable source of energy for electric vehicles."
    },
    {
      "no": 20,
      "thesis_title": "Analysis and Optimization of Cloud Computing Technologies",
      "thesis_title_description": "This thesis investigates various cloud computing technologies and evaluates their performance, scalability, and security. The aim is to optimize these technologies to improve their overall efficiency and effectiveness."
    },
    {
      "no": 21,
      "thesis_title": "Development of an Automated Parking System",
      "thesis_title_description": "This thesis proposes an automated parking system that utilizes various technologies, including IoT and AI, to optimize parking space utilization and reduce parking time and congestion."
    },
    {
      "no": 22,
      "thesis_title": "Design and Implementation of an Automated Farming System Using IoT",
      "thesis_title_description": "This thesis proposes an automated farming system that utilizes various IoT technologies to improve crop yields, reduce labor costs, and enhance overall farming efficiency."
    },
    {
      "no": 23,
      "thesis_title": "Investigation and Optimization of Machine Learning Algorithms",
      "thesis_title_description": "This thesis aims to investigate machine learning algorithms and evaluate their effectiveness in various applications, including image and speech recognition, natural language processing, and predictive analytics."
    },
    {
      "no": 24,
      "thesis_title": "Development of a Smart Traffic Light System",
      "thesis_title_description": "This thesis proposes a smart traffic light system that utilizes various technologies, including IoT and AI, to optimize traffic flow, reduce waiting times, and prevent car accident"
    },
    {
      "no": 25,
      "thesis_title": "Design and Implementation of a Digital Signage System",
      "thesis_title_description": "This thesis involves the development of a digital signage system using digital displays, media players, and content management software. The system will be capable of displaying various types of multimedia content, such as videos, images, and text messages."
    },
    {
      "no": 26,
      "thesis_title": "Investigating the Impact of Cybersecurity Threats on Industrial Control Systems",
      "thesis_title_description": "This thesis aims to examine the effects of cyber attacks on industrial control systems and develop strategies to mitigate the risks. The study will focus on analyzing the vulnerabilities of SCADA systems and proposing security solutions to prevent cyber attacks."
    },
    {
      "no": 27,
      "thesis_title": "Design and Implementation of a Wireless Sensor Network for Environmental Monitoring",
      "thesis_title_description": "This thesis involves the development of a wireless sensor network to monitor environmental parameters such as temperature, humidity, and air quality. The system will use low-power wireless sensors to collect data and transmit it to a central server for analysis."
    },
    {
      "no": 28,
      "thesis_title": "Design and Implementation of an Intelligent Traffic Control System",
      "thesis_title_description": "This thesis aims to develop an intelligent traffic control system that uses real-time data to optimize traffic flow and reduce congestion. The system will incorporate machine learning algorithms to predict traffic patterns and adjust signal timings accordingly."
    },
    {
      "no": 29,
      "thesis_title": "Developing a Mobile Application for Disaster Response and Management",
      "thesis_title_description": "This thesis involves the development of a mobile application that enables disaster responders to quickly access critical information and coordinate their efforts. The app will include features such as real-time communication, geolocation tracking, and resource management."
    },
    {
      "no": 30,
      "thesis_title": "Investigating the Performance of Wireless Mesh Networks in Disaster Scenarios",
      "thesis_title_description": "This thesis aims to evaluate the performance of wireless mesh networks in disaster scenarios and identify factors that affect their performance. The study will involve analyzing the network's throughput, latency, and reliability in different disaster scenarios."
    },
    {
      "no": 31,
      "thesis_title": "Design and Implementation of a Smart Home Automation System",
      "thesis_title_description": "This thesis involves the development of a smart home automation system that allows homeowners to control various devices and appliances using a smartphone or other smart devices. The system will incorporate machine learning algorithms to learn user preferences and automate routine tasks."
    },
    {
      "no": 32,
      "thesis_title": "Investigating the Use of Artificial Intelligence in Biomedical Engineering",
      "thesis_title_description": "This thesis aims to explore the applications of artificial intelligence in biomedical engineering, such as image analysis, data processing, and predictive modeling. The study will investigate the advantages and challenges of using AI in this field and propose solutions to overcome the challenges."
    },
    {
      "no": 33,
      "thesis_title": "Design and Implementation of a Smart Agriculture System",
      "thesis_title_description": "This thesis involves the development of a smart agriculture system that uses IoT devices to monitor soil conditions, crop growth, and weather patterns. The system will use data analytics to provide insights into crop yields and optimize resource usage."
    },
  ]

  titleNumber: number = 0;

  constructor() { }

  getAThesisTitle(): ThesisTitle {
    this.titleNumber = Math.floor((Math.random() * this.titleIdeasForCPE.length) + 1);
    return this.titleIdeasForCPE[this.titleNumber - 1];
  }

  getAllTitleIdeas(): ThesisTitle[] {
    return this.titleIdeasForCPE;
  }

}
