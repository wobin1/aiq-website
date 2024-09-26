import { Component } from "@angular/core";
import { NgFor, CommonModule } from "@angular/common";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  search = [
    {
      title: "Software Engineer",
      subtext:
        "We are seeking a talented and experienced Software Engineer to join our team and contribute to the development of innovative software solutions. As a Software Engineer, you will play a crucial role in developing, and maintaining our products.",
      resp: [
        "Design, develop, and test software applications.",
        "Collaborate with product managers and designers to understand user requirements.",
        "Write clean, efficient, and maintainable code",
        "Participate in code reviews and provide constructive feedback.",
        "Troubleshoot and resolve software defects.",
        "Stay up-to-date with the latest software development technologies and trends.",
      ],
      qualification: [
        "Bachelor's degree in Computer Science or a related field.",
        "Proven experience in software development with proficiency in [programming languages, e.g., Python, Java, C++].",
        "Strong problem-solving and analytical skills",
        "Ability to work independently and as part of a team.",
        "Excellent communication and collaboration skills.",
      ],
    },
    {
      title: "Product Designer",
      subtext:
        "We are seeking a talented and passionate Product Designer to join our team and help us create exceptional user experiences. As a Product Designer, you will play a pivotal role in shaping the future of our products by combining user-centered design principles with innovative thinking.",
      resp: [
        "Design intuitive user interfaces and user experiences for digital products.",
        "Collaborate with product managers and engineers to implement effective designs.",
        "Conduct user research and usability testing to refine designs.",
        "Create wireframes, prototypes, and high-fidelity mockups.",
        "Stay updated on design trends and best practices.",
      ],
      qualification: [
        "Bachelor's degree in Design, Human-Computer Interaction, or a related field.",
        "Proven experience in UI/UX design with a strong portfolio.",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD.",
        "Solid understanding of user-centered design principles.",
        "Experience in conducting user research and usability testing.",
      ],
    },
    {
      title: "Product Manager",
      subtext:
        "We are seeking a talented and strategic Product Manager to join our team and drive the success of our products. As a Product Manager, you will be responsible for defining the product vision, roadmap, and strategy. You will collaborate closely with engineering, design, and sales teams to deliver exceptional products that meet customer needs.",
      resp: [
        "Define product vision and strategy in collaboration with stakeholders.",
        "Lead cross-functional teams to deliver on product goals.",
        "Analyze market trends and customer needs to prioritize product features.",
        "Create and manage product roadmaps, ensuring timely delivery.",
        "Monitor product performance and iterate based on feedback.",
      ],
      qualification: [
        "Bachelor's degree in Business, Engineering, or a related field.",
        "Proven experience as a product manager or in a similar role.",
        "Strong analytical, problem-solving, and decision-making skills.",
        "Experience with Agile methodologies and product lifecycle management.",
        "Excellent communication and leadership abilities.",
      ],
    },
    {
      title: "Graphics Designer",
      subtext:
        "We are seeking a talented and creative Graphics Designer to join our team and contribute to the visual identity of our brand. As a Graphics Designer, you will be responsible for creating compelling visual assets that align with our brand guidelines and enhance user experience.",
      resp: [
        "Design visually compelling assets for digital and print media.",
        "Collaborate with marketing and product teams to develop branding materials.",
        "Create logos, brochures, website graphics, and social media visuals.",
        "Ensure consistency in design across all platforms and media.",
        "Stay updated on design trends, tools, and technologies.",
      ],
      qualification: [
        "Bachelor’s degree in Graphic Design, Fine Arts, or a related field.",
        "Proven experience as a graphic designer with a strong portfolio.",
        "Proficiency in design software like Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
        "Strong typography, layout, and visual storytelling skills.",
        "Attention to detail and creativity.",
      ],
    },
    {
      title: "Digital Marketer",
      subtext:
        "We are seeking a dynamic and results-oriented Digital Marketer to join our team and drive growth through innovative digital strategies. As a Digital Marketer, you will be responsible for developing and executing marketing campaigns across various digital channels to increase brand awareness, generate leads, and drive customer acquisition.",
      resp: [
        "Develop and implement digital marketing strategies to boost online presence.",
        "Manage SEO, SEM, email marketing, and social media campaigns.",
        "Analyze data and KPIs to measure the success of marketing efforts.",
        "Collaborate with content and design teams to create compelling marketing assets.",
        "Stay updated on digital marketing trends and algorithm changes.",
      ],
      qualification: [
        "Bachelor’s degree in Marketing, Business, or a related field.",
        "Proven experience as a digital marketer or in a similar role.",
        "Strong knowledge of SEO, Google Analytics, and marketing tools.",
        "Excellent communication and analytical skills.",
        "Experience with paid advertising platforms like Google Ads or Facebook Ads.",
      ],
    },
    {
      title: "Social Media Manager",
      subtext:
        "We are seeking a creative and engaging Social Media Manager to join our team and build a strong online presence for our brand. As a Social Media Manager, you will be responsible for developing and executing social media strategies to increase brand awareness, drive engagement, and generate leads.",
      resp: [
        "Develop and implement social media strategies.",
        "Manage and grow AIQ’s social media presence.",
        "Engage with followers and respond to inquiries.",
        "Monitor social media trends and analytics.",
        
      ],
      qualification: [
        "Bachelor’s degree in Marketing, Communications, or related field.",
        "Proven experience managing social media accounts.",
        "Strong writing and communication skills.",
        "Familiarity with social media tools and analytics platforms.",
      ],
    },
    {
      title: "HR",
      subtext:
        "We are seeking a dynamic and experienced HR professional to join our team and support the growth of our organization. As an HR Generalist, you will be responsible for a wide range of HR functions, including recruitment, onboarding, employee relations, and benefits administration.",
      resp: [
        "Oversee recruitment, onboarding, and employee relations.",
        "Develop and implement HR policies and procedures.",
        "Manage employee benefits, compensation, and performance management.",
        "Ensure compliance with labor laws and regulations.",
        "Facilitate training and professional development opportunities."
        
      ],
      qualification: [
        "Bachelor’s degree in Human Resources, Business Administration, or related field.",
        "Proven experience as an HR manager or in a similar role.",
        "In-depth knowledge of labor laws and HR best practices.",
        "Strong communication, leadership, and organizational skills.",
        "Experience with HR software and recruitment tools."
      ],
    },
    {
      title: "Content Writer",
      subtext:
        "We are seeking a dynamic and experienced Content Writer professional to join our team and support the growth of our organization.",
      resp: [
        "Create compelling content for blogs, social media, and marketing campaigns.",
        "Develop content strategies aligned with business goals.",
        "Collaborate with marketing and product teams to craft engaging stories.",
        "Edit and proofread content to ensure clarity and consistency.",
      ],
      qualification: [
        "Bachelor’s degree in English, Communications, or related field.",
        "Proven experience as a content writer or editor.",
        "Excellent writing, editing, and research skills.",
        "Familiarity with SEO best practices.",
      ],
    },
  ];

  searchItem = this.search.map((jobs) => ({
    title: jobs.title,
    subtext: jobs.subtext,
  }));

  activeIndex: number | null = null;
  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
  submit() {
    window.open('https://docs.google.com/forms/d/1l6qgyncMYDI6llD8lvct2Wz7kJjrU0rOJ5y5Aic3PPA/viewform?edit_requested=true', '_blank');
  }
}
