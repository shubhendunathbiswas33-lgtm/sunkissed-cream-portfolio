import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, FolderPlus } from 'lucide-react';

// Exact 21 full Behance project plates from your folder, strictly preserved in order
const FOLDER_IMAGES = [
  "c7759a75-f1ab-4e70-a7ed-f31d9c67f4be.png",
  "8a5911ab-67f8-4b98-bd59-9f8687f1d67c.png",
  "eff9a7c7-0589-483b-9d37-e26cbed114be.png",
  "9edf8745-e97e-4fe0-98c0-afdaec6ee48b.png",
  "13d11ad7-ed7b-4bb3-bd75-fe1d3b9adc40.png",
  "d101541a-33f9-4a00-8507-8a11ffb67d80.png",
  "04bf1615-8f5c-4404-b5b1-e142cf2f06ae.png",
  "95b80d07-dd32-4c1b-b676-cb4d45c49574.png",
  "4eae9d6f-c77f-4b7a-8d0e-29864a21e888.png",
  "e66db757-516b-4e64-8daa-63889e4ab6ed.png",
  "b80c8e92-889b-4325-80b7-ba757cfc4dac.png",
  "a920e8d0-d457-40a0-8d28-2b59e059a9d0.png",
  "56fe73a8-b23f-4946-af75-88bfa7b42c3c.png",
  "444f096c-ed37-46ce-ae2c-0cac96b8eb7e.png",
  "3f537f06-e3b2-4616-bd36-4080ebdaff8b.png",
  "4215e630-b265-4ee4-ba47-e91f94d25c57.png",
  "b06bcc16-bac2-41a6-bdc7-000bac3ecbe8.png",
  "7c241ada-0b9f-4aa7-85b5-b926ae75654e.png",
  "2fe5dc10-4d87-4bc5-aff9-c08b37258dac.png",
  "95c2b5b8-4f03-481e-8e76-e7338adb1635.png",
  "91e7f240-a802-47e0-919e-6f5d60637cac.png"
];

export default function App() {
  const [likes, setLikes] = useState(318);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div className="behance-root">
      {/* Behance Standard Top Header */}
      <header className="behance-topbar">
        <div className="behance-left-user">
          <img 
            src="/images/shubhendu.jpg" 
            alt="Shubhendu" 
            className="user-img" 
          />
          <div className="user-details">
            <h3>Shubhendu</h3>
            <p>Founder & Creative Director • Sunkissed Cream</p>
          </div>
        </div>

        <div className="project-title-center">
          Sunkissed Cream — Brand Identity & Packaging Portfolio
        </div>

        <div className="behance-right-actions">
          <button 
            className={`action-btn ${liked ? 'action-btn-primary' : ''}`}
            onClick={toggleLike}
          >
            <ThumbsUp size={15} /> {likes}
          </button>
          <a href="#about" className="action-btn">
            About Founder
          </a>
        </div>
      </header>

      {/* Main Behance Vertical Project Stream */}
      <main className="behance-project-flow">
        
        {/* Creator Intro Section with Shubhendu Photo & About text */}
        <section className="creator-profile-section" id="about">
          <div className="creator-profile-inner">
            <img 
              src="/images/shubhendu.jpg" 
              alt="Shubhendu" 
              className="creator-big-photo"
            />
            <div className="creator-bio-content">
              <span className="creator-badge">ARTISAN FOUNDER & DESIGNER</span>
              <h2>Sunkissed Cream Portfolio</h2>
              <p>
                Hello, I am <strong>Shubhendu</strong>. Welcome to the visual identity and packaging presentation of <strong>Sunkissed Cream</strong>. 
                This project represents a bold, retro-editorial aesthetic fused with handcrafted artisanal recipes, vibrant identity design, and premium packaging craft.
              </p>
              <p style={{ color: '#777', fontSize: '0.9rem' }}>
                Scroll down to view the complete visual case study in original resolution.
              </p>
            </div>
          </div>
        </section>

        {/* 100% Exact images from folder, stacked one after another with zero animation or modification */}
        {FOLDER_IMAGES.map((imgName, index) => (
          <div className="image-plate-wrapper" key={index}>
            <img 
              src={`/images/${imgName}`} 
              alt={`Sunkissed Cream presentation plate ${index + 1}`} 
              className="image-plate"
              loading="lazy"
            />
          </div>
        ))}

        {/* Footer & Appreciation */}
        <footer className="behance-footer">
          <div className="appreciate-box">
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Thank you for viewing!
            </h2>
            <p style={{ color: '#999', fontSize: '0.95rem' }}>
              Appreciate this project if you enjoyed the brand identity & visual work.
            </p>
            <button className="appreciate-main-btn" onClick={toggleLike}>
              <ThumbsUp size={18} /> Appreciate Project ({likes})
            </button>
          </div>

          <div className="project-credits">
            <p><strong>Project:</strong> Sunkissed Cream Brand Portfolio</p>
            <p><strong>Concept & Curation:</strong> Shubhendu</p>
            <p>© {new Date().getFullYear()} Shubhendu. All Rights Reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
