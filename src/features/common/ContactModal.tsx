'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from '@/styles/features/ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className={styles.overlay}
                    style={{ zIndex: 9999 }} // Ensure it's on top
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                        className={styles.modal}
                    >
                        <button onClick={onClose} className={styles.closeButton}>
                            <X size={24} />
                        </button>

                        <h3 className={styles.title}>联系我们</h3>

                        <div className={styles.qrcodeContainer}>
                            <img
                                src="/images/qrcode/qrcode.png"
                                alt="咨询二维码"
                                className={styles.qrcode}
                            />
                        </div>

                        <div className={styles.contactInfo}>
                            <span className={styles.label}>全国咨询热线</span>
                            <div className={styles.phone}>400-168-8292</div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
