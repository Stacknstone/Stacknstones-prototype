import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css'; // This is the new CSS file below
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import AnimatedLogo from '../components/AnimatedLogo';
import ContactForm from '../components/ContactForm';

// Animation variants for the hero text
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Animation variants for the values grid
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      
      <AnimatedLogo />

      {/* --- 1. Hero Section --- */}
      <motion.header 
        className={styles.heroSection}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.heroHeadline} variants={itemVariants}>
          Crafted for Legacy. Built for Life.
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          Stack & Stones is a full-service construction firm dedicated to precision,
          durability, and timeless design. From blueprint to reality, we build 
          the foundations of your vision.
        </motion.p>
      </motion.header>

      {/* --- 2. Core Values Section --- */}
      <motion.section
        className={styles.valuesSection}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Value 1 */}
        <motion.div className={styles.valueItem} variants={itemVariants}>
          <h3 className={styles.valueTitle}>Vision</h3>
          <p className={styles.valueDescription}>
            We translate your concepts into tangible structures, 
            honoring the unique vision of every client and every project.
          </p>
        </motion.div>
        
        {/* Value 2 */}
        <motion.div className={styles.valueItem} variants={itemVariants}>
          <h3 className={styles.valueTitle}>Precision</h3>
          <p className={styles.valueDescription}>
            Our commitment to quality is in every detail. We pair 
            expert craftsmanship with the highest-quality materials.
          </p>
        </motion.div>
        
        {/* Value 3 */}
        <motion.div className={styles.valueItem} variants={itemVariants}>
          <h3 className={styles.valueTitle}>Legacy</h3>
          <p className={styles.valueDescription}>
            We don't just build structures; we build enduring spaces 
            designed to last for generations.
          </p>
        </motion.div>
      </motion.section>
      <motion.section
        className={styles.socialsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants} // Use the same simple fade-in
      >
        <h2 className={styles.socialsTitle}>Follow Us On Our Socials</h2>
        <div className={styles.socialsContainer}>
          
          {/* --- Remember to add your real links here! --- */}
          
          <a 
            href="https://www.instagram.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.socialIcon} ${styles.instagram}`}
          >
            <FaInstagram size={30} />
          </a>
          
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.socialIcon} ${styles.whatsapp}`}
          >
            <FaWhatsapp size={30} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.socialIcon} ${styles.linkedin}`}
          >
            <FaLinkedin size={30} />
          </a>

        </div>
      </motion.section>

      {/* --- 3. Contact Form --- */}
      <ContactForm />

    </div>
    
  );
}

export default HomePage;