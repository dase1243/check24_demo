import React, {useState} from 'react';
import Check24Logo from './images/check24.svg';
import RightIcon from './images/right.png';
import WrongIcon from './images/wrong.png';
import SmileIcon from './images/smiley_4.png';
import SadIcon from './images/smiley_3.png';
import NoMatterIcon from './images/no-matter.png';
import BioIcon from './images/biodegradable.png';
import PlanetIcon from './images/planet-earth.png';
import RenewIcon from './images/renewable-energy.png';
import {useNavigate} from "react-router-dom";

export const ParametersPage = () => {
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [usage, setUsage] = useState('');
    const [selectedPower, setSelectedPower] = useState('');
    const [selectedRecommendation, setSelectedRecommendation] = useState('');
    const [contractTerm, setContractTerm] = useState('');
    const navigate = useNavigate();

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleUsageChange = (e) => {
        setUsage(e.target.value);
    };

    const handleSubmit = async () => {
        navigate('/offers-loading-page'); // Navigate to the next page
    };

    return (
        <div style={styles.container}>
            <div style={styles.scrollableSection}>
                <div style={styles.topBar}>
                    <img src={Check24Logo} alt="Logo" style={styles.logo}/>
                </div>

                <h1 style={styles.heading}>Personalise your query</h1>
                <label style={styles.label}>Choose your filters.</label>

                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        value={postcode}
                        placeholder="Postcode"
                        onChange={handlePostcodeChange}
                        style={{
                            ...styles.postcodeInput,
                            backgroundColor: postcode ? '#EAF2FF' : '#C5C6CC'
                        }}
                    />
                    <img
                        src={postcode ? RightIcon : WrongIcon}
                        alt={postcode ? "Filled" : "Empty"}
                        style={styles.icon}
                    />
                </div>
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        value={city}
                        placeholder="City"
                        onChange={handleCityChange}
                        style={{
                            ...styles.postcodeInput,
                            backgroundColor: city ? '#EAF2FF' : '#C5C6CC'
                        }}
                    />
                    <img
                        src={city ? RightIcon : WrongIcon}
                        alt={city ? "Filled" : "Empty"}
                        style={styles.icon}
                    />
                </div>
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        value={usage}
                        placeholder="Usage"
                        onChange={handleUsageChange}
                        style={{
                            ...styles.postcodeInput,
                            backgroundColor: usage ? '#EAF2FF' : '#C5C6CC'
                        }}
                    />
                    <img
                        src={usage ? RightIcon : WrongIcon}
                        alt={usage ? "Filled" : "Empty"}
                        style={styles.icon}
                    />
                </div>

                <div style={styles.inputWrapper}>
                    <p>Organic power</p>
                </div>

                <div style={styles.radioButtons}>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedPower === 'option1' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedPower('option1')}
                    >
                        <img src={RenewIcon} alt="Description" style={styles.imageInsideButton}/>
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedPower === 'option2' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedPower('option2')}
                    >
                        <img src={PlanetIcon} alt="Description" style={styles.imageInsideButton}/>
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedPower === 'option3' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedPower('option3')}
                    >
                        <img src={BioIcon} alt="Description" style={styles.imageInsideButton}/>
                    </button>
                </div>

                <div style={styles.radioWrapper}>
                    <p>Recommendation</p>
                </div>

                <div style={styles.radioButtons}>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedRecommendation === 'no matter' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedRecommendation('no matter')}
                    >
                        No matter
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedRecommendation === 'sad' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedRecommendation('sad')}
                    >
                        <img src={SadIcon} alt="Description" style={styles.imageInsideButton}/>
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: selectedRecommendation === 'happy' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setSelectedRecommendation('happy')}
                    >
                        <img src={SmileIcon} alt="Description" style={styles.imageInsideButton}/>
                    </button>
                </div>

                <div style={styles.radioWrapper}>
                    <p>Max. contract term</p>
                </div>

                <div style={styles.radioButtons}>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: contractTerm === 'No matter' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setContractTerm('No matter')}
                    >
                        {'No matter'}
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: contractTerm === '1 month' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setContractTerm('1 month')}
                    >
                        {'1 month'}
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: contractTerm === 'up to 12 month' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setContractTerm('up to 12 month')}
                    >
                        {'up to 12 month'}
                    </button>
                    <button
                        style={{
                            ...styles.radioButton,
                            borderColor: contractTerm === 'up to 24 month' ? '#5B90E7' : '#C3DAFF'
                        }}
                        onClick={() => setContractTerm('up to 24 month')}
                    >
                        {'up to 24 month'}
                    </button>
                </div>


                <div style={styles.radioWrapper}>
                    <p>Start date</p>
                </div>

                <div style={styles.centerContainer}>
                    <input type="date" style={styles.dateInput}/>
                </div>
            </div>

            <div style={styles.footer}>
                <button style={styles.nextButton} onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        backgroundColor: '#F5F5F5',
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
        marginBottom: '10px',
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
    label: {
        fontSize: '14px',
        color: '#71727A',
        textAlign: 'center',
        marginBottom: '10px',
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        position: 'relative',
        width: '100%'
    },
    radioWrapper: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%'
    },
    postcodeInput: {
        width: '100%',
        backgroundColor: '#C5C6CC',
        borderRadius: '3px',
        padding: '10px',
        flex: 1,
        marginRight: '10px'
    },
    disabledInput: {
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: '3px',
        padding: '10px',
        flex: 1,
        marginRight: '10px'
    },
    icon: {
        position: 'absolute',
        marginRight: '10px',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '24px',
        height: '24px',
    },

    radioButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        // marginBottom: 'px'
    },
    radioButton: {
        width: '70px',
        height: '78px',
        backgroundColor: '#EAF2FF',
        border: '1px solid #C3DAFF',
        borderRadius: '3px',
        margin: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    imageInsideButton: {
        // marginRight: '10px',  // Adjust as necessary for spacing between the image and the text
        verticalAlign: 'middle',
        height: '48px',  // Adjust as necessary
        width: '48px',   // Adjust as necessary
    },
};