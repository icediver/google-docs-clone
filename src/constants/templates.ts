export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "/templates/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/templates/software-proposal.svg",
    initialContent: `
        <h1>Software Development Proposal</h1>
        <h2>Project Overview</h2>
        <p>Brief description of the proposed software development project.</p>

        <h2>Scope of Work</p>
        <p>Detailed breakdown of project deliverables and requirements.</p>

        <h2>Timeline</h2>
        <p>Project milestones and delivery schedule.</p>

        <h2>Budget</h2>
        <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/templates/project-proposal.svg",
    initialContent: `
        <h1>Project Proposal</h1>
        <h2>Executive Summary</h2>
        <p>Brief overview of the project proposal.</p>

        <h2>Project Goals</p>
        <p>Key objectives and expected outcomes.</p>

        <h2>Implementation Plan</h2>
        <p>Strategy and methodology for project execution.</p>

        <h2>Resources Required</h2>
        <p>Team, equipment, and budget requirements.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/templates/business-letter.svg",
    initialContent: `
        <h1>Business Letter</h1>
        <p>This is a business letter template.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/templates/resume.svg",
    initialContent: `
          <h1> [Your Name]</h1>
          <p> [Contact Information]</p>

          <h2>Professional Summary</h2>
          <p>Brief overview of your professional background and key strengths.</p>

          <h2>Work Experience</h2>
          <p> [Company Name] - [Position] <br>
          [Date Rangel</p>
          <h2>Education</h2>

          <p> [Degreel - [Institution] <br>
          [Graduation Yearl</p>

          <h2>Skills</h2>
          <p>List of relevant skills and competencies.</p>
          `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/templates/cover-letter.svg",
    initialContent: `
          <h1> [Your Name]</h1>
          <p> [Your Address]<br>
          [City, State ZIP]</p>
          
          <p>[Date]</p> 

          <p>[Recipient's Name]<br>
              [Company Name]<br>
              [Company Address]</p>

          <p>Dear [Recipient's Name]</p>

          <p>I am writing to express my interest in [position] at [company name].</p>

          <p>Sincerely,<br>
          [Your Name]</p>
          `,
  },

  {
    id: "letter",
    label: "Letter",
    imageUrl: "/templates/letter.svg",
    initialContent: `
        <p>Subject: [Email Subject]</p>

        <p>Dear [Recipient],</p>

        <p>I hope this email finds you well.</p>

        <p>[Email Body]</p>

        <p>Best regards, <br>
        [Your Namel </p>
  `,
  },
];
