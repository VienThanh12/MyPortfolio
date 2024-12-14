// src/data/certificates.ts

export interface ICertificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string;
    certificateUrl: string;
  }
  
  export const certificates: ICertificate[] = [
    {
      id: '1',
      title: 'Full-Stack Web Development',
      issuer: 'University Of Helsinki',
      date: 'July 2023',
      imageUrl: 'fullstack_cert.png',
      certificateUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/823ad579ac4a3d9b137f32456f0d5f32',
    },
    {
      id: '2',
      title: 'Junction 2024 Certificate',
      issuer: 'Junction',
      date: 'Oct 2024',
      imageUrl: 'Junction_Cert.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/1732365683445/single-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0',
    },
    {
      id: '3',
      title: 'Introduction to Cloud Computing',
      issuer: 'Skillsoft',
      date: 'Dec 2024',
      imageUrl: 'Intro_to_cloud_computing_cert.png',
      certificateUrl: 'https://skillsoft.digitalbadges-eu.skillsoft.com/4e902c99-cfac-445d-a053-5097fa490075#acc.w1ZF5IbX',
    },
    {
      id: '4',
      title: 'Introduction to Large Language Models',
      issuer: 'LinkedIn',
      date: 'May 2024',
      imageUrl: 'Intro_LLM_cert.jpg',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0',
    },
    {
      id: '5',
      title: 'React.js Essential Training',
      issuer: 'LinkedIn',
      date: 'Jun 2024',
      imageUrl: 'ReactJS_cert.jpg',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0',
    },
    {
      id: '6',
      title: 'Learning Kubernetes',
      issuer: 'LinkedIn',
      date: 'Oct 2024',
      imageUrl: 'Learning_Kuber_cert.jpg',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0',
    },
    {
      id: '7',
      title: 'Describe cloud service types',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Describe_cloud_ser_cert.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733514077382',
    },
    {
      id: '8',
      title: 'Deploy and run a containerized web app with Azure App Service',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Deploy_Azure.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733517055801',
    },
    {
      id: '9',
      title: 'Describe the benefits of using cloud services',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Describe_the_benefits_cert.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733514394029',
    },
    {
      id: '10',
      title: 'Describe cloud computing',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Describe_cloud_computing_cert.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733514394030',
    },
    {
      id: '11',
      title: 'Introduction to Docker containers',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Intro_to_docker_containers.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733607922622',
    },
    {
      id: '12',
      title: 'Introduction to Kubernetes',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      imageUrl: 'Intro_to_Kuber.png',
      certificateUrl: 'https://www.linkedin.com/in/vien-ha-bb5391264/details/certifications/494772682/multiple-media-viewer/?profileId=ACoAAEDXCnkBbjEfOhsDRbPB-auN3vqp6iwNaD0&treasuryMediaId=1733612713038',
    },
   
    // Add more certificates as needed
  ];
  