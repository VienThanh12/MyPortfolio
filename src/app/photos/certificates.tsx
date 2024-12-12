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
   
    // Add more certificates as needed
  ];
  