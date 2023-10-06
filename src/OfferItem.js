import React from 'react';

// Sample styles
const styles = {
    mainContainer: {
        backgroundColor: '#C8FFCC',
        borderRadius: 16,
        padding: '16px',
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    mainContainerGrey: {
        backgroundColor: '#B1BBB2',
        borderRadius: 16,
        padding: '16px',
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    innerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    imageContainer: {
        flex: 1,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    smallDiv: {
        flex: 1,
        display: 'flex',
        marginLeft: '15px',
        marginTop: '-15px',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
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
    footer: {
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
};


export function OfferItemGrey({ imageUrl, providerName, recommendation, renewable, tariffName, price}) {
    return (
        <div style={styles.mainContainerGrey}>
            <div style={styles.innerContainer}>
                <div style={{ ...styles.imageContainer, backgroundImage: `url(${imageUrl})` }}></div>
                <div style={styles.smallDiv}>
                    <p><b>Provider:</b> {providerName}</p>
                    <p><b>{recommendation}%</b> recommendation</p>
                {/*</div>*/}
                {/*<div style={styles.smallDiv}>*/}
                    <p><b>Type:</b> {renewable}</p>
                    <p><b>Price:</b> {price}€</p>
                </div>
            </div>
            <div style={styles.footer}>
                <p><b>Tariff name:</b> {tariffName}</p>
                <button style={styles.button}>Continue</button>
            </div>
        </div>
    );
}

export function OfferItem({ imageUrl, providerName, recommendation, renewable, tariffName, price}) {
    return (
        <div style={styles.mainContainer}>
            <div style={styles.innerContainer}>
                <div style={{ ...styles.imageContainer, backgroundImage: `url(${imageUrl})` }}></div>
                <div style={styles.smallDiv}>
                    <p><b>Provider:</b> {providerName}</p>
                    <p><b>{recommendation}%</b> recommendation</p>
                {/*</div>*/}
                {/*<div style={styles.smallDiv}>*/}
                    <p><b>Type:</b> {renewable}</p>
                    <p><b>Price:</b> {price}€</p>
                </div>
            </div>
            <div style={styles.footer}>
                <p><b>Tariff name:</b> {tariffName}</p>
                <button style={styles.button}>Continue</button>
            </div>
        </div>
    );
}
