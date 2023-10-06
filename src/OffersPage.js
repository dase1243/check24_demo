import Check24Logo from "./images/check24.svg";
import React from "react";
import {useState, useEffect} from 'react';
import './index.css';
import {useNavigate} from "react-router-dom";
import {OfferItem, OfferItemGrey} from "./OfferItem";

export const OffersPage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [bestPrice, setBestPrice] = useState('');
    const [bestOffer, setBestOffer] = useState([]);
    const [bestOffers, setBestOffers] = useState([]);

    const handleSubmit = async () => {
        navigate('/'); // Navigate to the next page
    };

    const buttonStyle = {
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        backgroundColor: 'D9D9D9',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        fontSize: '18px'
    };

    useEffect(() => {
        const bestPrice = localStorage.getItem('bestPrice');
        const bestOffers = localStorage.getItem('bestOffers');
        const bestOffer = localStorage.getItem('bestOffer');
        const bestOffersLength = localStorage.getItem('bestOffersLength') || 7;
        if (bestPrice) {
            setBestPrice(JSON.parse(bestPrice));
        }
        if (bestOffer) {
            setBestOffer(JSON.parse(bestOffer));
        }
        if (bestOffers) {
            setBestOffers(JSON.parse(bestOffers).slice(0, bestOffersLength - 1));
        }

    }, []);

    // return (
    //     <ul>
    //         {data.map(item => (
    //             <li key={item.id}>{item.name}</li>
    //         ))}
    //     </ul>
    // );


    return (
        <div style={styles.container}>
            <div style={styles.scrollableSection}>
                <div style={styles.topBar}>
                    <img src={Check24Logo} alt="Logo" style={styles.logo}/>
                </div>

                <h1 style={styles.heading}>Your Best Offer</h1>

                {/*<OfferItem*/}
                {/*    imageUrl="https://avatars.githubusercontent.com/u/97165289"*/}
                {/*    recommendation="82% Recommendation"*/}
                {/*    renewable="100% renewable"*/}
                {/*    tariffName="Tariff eprimoStrom PrimaKlima"*/}
                {/*    price="100$"*/}
                {/*/>*/}

                <OfferItem
                    imageUrl="https://avatars.githubusercontent.com/u/97165289"
                    providerName={bestOffer.providerName}
                    recommendation={bestOffer.providerSatisfaction}
                    renewable={bestOffer.type_offer}
                    tariffName={bestOffer.name}
                    price={bestOffer.price}
                />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={buttonStyle}
                >
                    {isOpen ? 'Close ▲' : 'More Offers ▼'}
                </button>

                {isOpen && (
                    <div style={styles.offersList}>
                        {/*{Array.from({length: 10}).map((_, index) => (*/}
                        {bestOffers.map((bf, index) => (
                            <OfferItemGrey
                                key={index}
                                imageUrl="https://avatars.githubusercontent.com/u/97165289"
                                providerName={bf.providerName}
                                recommendation={bf.providerSatisfaction}
                                renewable={bf.type_offer}
                                tariffName={bf.name}
                                price={bf.price}
                            />
                        ))}
                    </div>
                )}

            </div>


            <div style={styles.footer}>
                <button style={styles.nextButton} onClick={handleSubmit}>Start it over</button>
            </div>
        </div>
    );
}

const styles = {
    offersList: {
        display: 'flex',
        flexDirection: 'column',
        gap: "20px",
    },
    mainContainer: {
        backgroundColor: '#C8FFCC',
        borderRadius: 16,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    innerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    imageContainer: {
        flex: 1,
        // Use your image URL here
        backgroundImage: 'url(https://avatars.githubusercontent.com/u/97165289)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    smallDiv: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconAndText: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '8px',
        // Use placeholder styles for the icon or replace with actual icon
        width: '24px',
        height: '24px',
        backgroundColor: 'gray',
    },
    btnContinue: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '16px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
    },


    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '428px', // iPhone 12 Pro Max width
        margin: '0 auto',
        backgroundColor: '#F5F5F5',
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
    },
    footer: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15vh',
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
};