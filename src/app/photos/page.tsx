"use client"; // Ensure this is at the very top

import { useEffect, useState } from 'react';
import { ICertificate, certificates as certificateData } from './certificates';
import { SOCIAL_NETWORK_LINKS } from '../props';

const Certificates = () => {
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Optional: For error handling

  useEffect(() => {
    // Simulate data fetching
    const fetchCertificates = async () => {
      try {
        // If fetching from an API, replace this with your API call
        // For example:
        // const response = await fetch('/api/certificates');
        // const data: ICertificate[] = await response.json();
        const data: ICertificate[] = certificateData;
        setCertificates(data);
      } catch (error) {
        console.error('Failed to fetch certificates:', error);
        setError('Failed to load certificates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading Certificates...</div>;
  }

  if (error) { // Optional: Display error message
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <section className="pb-8">
      <h1 className="font-bold text-3xl">Certificates</h1>
      <p className="py-5 text-sm">Here are some of my professional certificates.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <article key={cert.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <a href={cert.certificateUrl} target="_blank" rel="noreferrer" aria-label={`View ${cert.title} Certificate`}>
              <img
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                src={cert.imageUrl}
                alt={`${cert.title} Certificate`}
                loading="lazy"
              />
            </a>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{cert.title}</h2>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline text-sm"
              >
                View Certificate
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center md:pt-4 pt-8">
        <a href={SOCIAL_NETWORK_LINKS.linkedin} target="_blank" rel="noreferrer">
          <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
            More on LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default Certificates;
