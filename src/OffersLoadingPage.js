import Check24Logo from "./images/check24.svg";
import React from "react";
import {useState, useEffect} from 'react';
import './index.css';
import {useNavigate} from "react-router-dom";
import ItemGenerator from "./ItemGenerator";
import OfferItem from "./OfferItem";

export const OffersLoadingPage = () => {
    const targetPrice = Math.floor(Math.random() * (350 - 108 + 1) + 108);  // This would be your actual target price value.

    const [loadingCompletion, setLoadingCompletion] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(999);
    const duration = 5000;
    const navigate = useNavigate();
    const [openTitle, setOpenTitle] = useState(false);

    useEffect(() => {
        console.log('rerendering');
        const priceDecreaseInterval = setInterval(() => {
            setCurrentPrice(prevPrice => {
                if (prevPrice > targetPrice + 20) {
                    return prevPrice - Math.random() * 75; // Decrement by $5 every 50ms
                } else {
                    clearInterval(priceDecreaseInterval);
                }
                return prevPrice;
            });
        }, 50);

        const priceJumpInterval = setTimeout(() => {
            let jumpTimes = 5;
            const jump = setInterval(() => {
                setCurrentPrice(prevPrice => prevPrice - (Math.random() * 75)); // Random jump between -5 and 5

                jumpTimes--;
                if (jumpTimes === 0) {
                    clearInterval(jump);
                    setCurrentPrice(targetPrice); // Set to the final target price
                }
            }, 50);

            setOpenTitle(true);
        }, 4000); // Start jumping around 4 seconds into the 5-second duration

        return () => {
            clearInterval(priceDecreaseInterval);
            clearTimeout(priceJumpInterval);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingCompletion(prevCompletion => {
                if (prevCompletion < 100) {
                    return prevCompletion + 2;
                }
                clearInterval(interval);
                return prevCompletion;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async () => {
        navigate('/offers-page'); // Navigate to the next page
    };

    return (
        <div style={styles.container}>
            <div style={styles.scrollableSection}>

                <div style={styles.topBar}>
                    <img src={Check24Logo} alt="Logo" style={styles.logo}/>
                </div>

                <h1 style={styles.heading}>We are negotiating the best price for you</h1>
                <div style={styles.loadingContainer}>
                    <h1>
                        The price we could come up with ${currentPrice.toFixed(2)}
                    </h1>
                    <div style={{...styles.loadingBar, width: `${loadingCompletion}%`}}></div>
                </div>
                <ItemGenerator/>
                {openTitle && (
                    <h1 style={styles.heading}>The offers are calculated</h1>
                )}
            </div>
            <div style={styles.footer}>
                <button style={styles.nextButton} onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '428px', // iPhone 12 Pro Max width
        margin: '0 auto',
    },
    centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    dateInput: {
        backgroundColor: '#EAF2FF',
        borderRadius: '3px',
        border: 'none', // Remove the default border
        fontWeight: 400,
        fontSize: 18,
        width: '50%',  // Set the input width to full
        height: '45px',
        padding: '0 10px', // Add some horizontal padding for better appearance
        boxSizing: 'border-box', // Ensure padding doesn't affect the total width
    },
    scrollableSection: {
        flex: 1,
        overflowY: 'scroll', // Allows scrolling of this section
    },
    topBar: {
        height: '80px',
        backgroundColor: '#063773',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '15px'
    },
    logo: {
        height: '60%',
    },
    heading: {
        fontSize: '24px',
        textAlign: 'center',
        margin: '20px 0',
        textTransform: 'uppercase',
    },
    label: {
        fontSize: '14px',
        color: '#71727A',
        textAlign: 'center',
        marginBottom: '10px',
    },
    loadingBar: {
        height: '40px',
        width: '0%',
        backgroundColor: 'green',
        animation: 'loadAnimation 5s forwards',
    },
    loadingContainer: {
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    nextButton: {
        width: '80%',
        height: '48px',
        borderRadius: '5px',
        backgroundColor: '#063773',
        color: '#fff',
        border: 'none',
        fontSize: '16px',
    },
    footer: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15vh',
    },
};