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
