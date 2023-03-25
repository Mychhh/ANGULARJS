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
    }
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
