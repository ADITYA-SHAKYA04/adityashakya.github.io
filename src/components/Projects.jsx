import React from 'react';

const projects = [
  {
    name: 'SFTPApp',
    summary: 'A modern Android SFTP client for secure file browsing and downloading, designed for simplicity and privacy.',
    features: [
      'No intrusive permission dialogs—uses Android’s Storage Access Framework for seamless file/folder access.',
      'Supports both dark and light themes, with UI elements adapting to system settings.',
      'Clean Material Design interface for intuitive navigation.',
      'Secure SFTP file browsing powered by JSch.',
      'Multi-file selection and batch downloading with real-time progress indicators.',
      'Download progress dialog shows percentage, file name, and file count.',
      'Robust error handling for large files, connection issues, and download errors.'
    ],
    link: '#'
  },
  {
    name: 'Crypto Android App',
    summary: 'A modern Android application for secure text and file encryption/decryption using industry-standard cryptographic algorithms. Designed with a beautiful, theme-aware UI and robust security features.',
    features: [
      'Multiple Encryption Algorithms: AES-GCM (recommended, authenticated encryption), AES-CBC (legacy, for compatibility), RSA-OAEP (hybrid encryption for small data/keys), AES-PBKDF2 (password-based encryption)',
      'Password-Based Encryption: Securely encrypt and decrypt text/files using a user-supplied password (PBKDF2).',
      'File Encryption/Decryption: Encrypt and decrypt any file type, including images and documents, while preserving the original file format.',
      'Clipboard Support: Easily copy encrypted/decrypted output to the clipboard.',
      'Theme Support: Beautiful light and dark mode with smooth theme toggle.',
      'Security Tips Dialog: Built-in dialog with best practices and algorithm info for user education.',
      'Modern UI: Responsive, clean design with Material Components and custom color palettes.'
    ],
    link: '#'
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 style={{textAlign:'center', marginBottom:'1.2rem'}}>Projects</h2>
  <div className="project-cards-container" style={{display: 'block', overflow: 'visible'}}>
        {projects.map((proj, i) => (
          <div key={i} className="project-card fade-in">
            <h3 className="project-name">{proj.name}</h3>
            <div className="project-summary">{proj.summary}</div>
            <ul className="project-features">
              {proj.features.map((feature, idx) => (
                <li key={idx} className="project-feature-item">{feature}</li>
              ))}
            </ul>
            {proj.link && <a href={proj.link} className="project-link">View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
