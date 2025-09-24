'use client';

import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const simulateLoading = () => {
            let currentProgress = 0;
            
            const interval = setInterval(() => {
                let increment;
                if (currentProgress < 30) {
                    increment = 3;
                } else if (currentProgress < 70) {
                    increment = 2;
                } else if (currentProgress < 90) {
                    increment = 1;
                } else {
                    increment = 0.5;
                }

                currentProgress = Math.min(currentProgress + increment, 100);
                setProgress(Math.floor(currentProgress));

                if (currentProgress >= 100) {
                    clearInterval(interval);
                    hidePreloader();
                }
            }, 40);

            return () => clearInterval(interval);
        };

        const hidePreloader = () => {
            if (document.readyState === 'complete') {
                setTimeout(() => {
                    setIsVisible(false);
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                }, 300);
            } else {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        setIsVisible(false);
                        document.body.style.overflow = '';
                        document.documentElement.style.overflow = '';
                    }, 300);
                });
            }
            
            setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }, 3000);
        };

        simulateLoading();

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div id="preloader" className={`${styles.root} ${progress >= 100 ? styles.fadeOut : ''}`}>
            <div className={styles.txt}>
                <p className={styles.txt_perc}>{progress}%</p>
                <div className={styles.progress}>
                    <span style={{ width: `${progress}%` }}></span>
                </div>
            </div>
        </div>
    );
}

export default Preloader;