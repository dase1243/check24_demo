// SearchPage.js
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AttachIcon from './images/attach.png';
import SendIcon from './images/send.png';
import Check24Logo from './images/check24.svg';
import DeleteSearchIcon from './images/deleteSearch.png';

export const SearchPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleDelete = (indexToDelete) => {
        const newHistory = searchHistory.filter((_, index) => index !== indexToDelete);
        setSearchHistory(newHistory);
    };

    useEffect(() => {
        const storedSearches = localStorage.getItem('recentSearches');
        if (storedSearches) {
            setSearchHistory(JSON.parse(storedSearches));
        }
    }, []);

    const addSearch = (searchTerm) => {
        setSearchHistory(prevSearches => {
            const newSearches = [...prevSearches, searchTerm];
            localStorage.setItem('recentSearches', JSON.stringify(newSearches));
            return newSearches;
        });
    }

    const handleSubmit = async () => {
        if (inputValue.length < 3) {
            setError('Input should be at least 3 symbols');
            return;
        }

        addSearch(inputValue);

        setError('');

        localStorage.setItem('lastSearch', JSON.stringify(inputValue));

        // Send selectedFile via API
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const fileResponse = await fetch('https://file-upload.example-domain.com/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!fileResponse.ok) {
                    throw new Error('File upload API call failed!');
                }

                // Handle successful file upload response if necessary
                // const fileUploadData = await fileResponse.json();

            } catch (error) {
                console.error(error);
                // Optionally navigate to an error page or show an error message
                // navigate('/error-page');
            }
        }

        navigate('/parameters-page'); // Navigate to the next page
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadIconClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.topBar}>
                    <img src={Check24Logo} alt="Logo" style={styles.logo}/>
                </div>
                <div style={styles.inputWrapper}>
                    <div style={styles.uploadIcon} onClick={handleUploadIconClick}></div>
                    <input
                        style={styles.input}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter search..."
                    />
                    <div style={styles.sendIcon} onClick={handleSubmit}></div>
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}

                <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    style={styles.fileInput}
                />

                {/*<button style={styles.button} onClick={handleSubmit}>Submit</button>*/}

                <div style={styles.historyContainer}>
                    <p>Recent searches:</p>
                    <ul>
                        {searchHistory.map((search, index) => (
                            <li key={index} style={styles.historyItem}>
                                {search}
                                <img
                                    src={DeleteSearchIcon}
                                    alt="Delete"
                                    style={styles.deleteIcon}
                                    onClick={() => handleDelete(index)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

};

const styles = {
    container: {
        maxWidth: '428px',
        margin: '0 auto',
        padding: '5px',
        backgroundColor: '#F5F5F5',
        minHeight: '926px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',  // Align the content to start from the top
    },
    topBar: {
        backgroundColor: '#063773',
        height: '80px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0 5px 10px',  // Top, right, bottom, left padding
        marginBottom: '20px',  // Margin added to separate the topBar from the inputWrapper
    },
    logo: {
        height: '60%',  // Adjust as needed
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F8F9FE',
        borderRadius: '70px',
        padding: '10px',
        width: '80%',
        boxSizing: 'border-box',
        position: 'relative',
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '16px',
        borderRadius: '70px',
        paddingLeft: '40px',
        paddingRight: '40px',
        outline: 'none',
    },
    uploadIcon: {
        position: 'absolute',
        left: '10px',
        width: '24px',
        height: '24px',
        background: `url(${AttachIcon}) no-repeat center`,
        backgroundSize: 'contain',
        cursor: 'pointer',
    },
    sendIcon: {
        position: 'absolute',
        right: '10px',
        width: '24px',
        height: '24px',
        background: `url(${SendIcon}) no-repeat center`,
        backgroundSize: 'contain',
        cursor: 'pointer',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#0271C2',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '80%',
    },
    historyContainer: {
        marginTop: '20px',
        width: '80%',  // To match other central elements like the input
        textAlign: 'left',  // Center the text within the container
    },
    historyItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 0',
    },
    deleteIcon: {
        height: '16px',  // Adjust as needed
        cursor: 'pointer',
        marginLeft: '10px',
    },
    fileInput: {
        display: 'none',
    }
};
