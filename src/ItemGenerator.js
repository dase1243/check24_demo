import React, {useState, useEffect} from 'react';

function ItemGenerator() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Decide on the total number of items (between 5 and 7)
        const totalItems = 5 + Math.floor(Math.random() * 3);

        // Calculate the time interval based on the totalItems
        const intervalTime = 5000 / totalItems; // Total time is 5 seconds (5000 ms)

        // Generate items steadily over time and add them to the state
        for (let i = 0; i < totalItems; i++) {
            setTimeout(() => {
                setItems(prevItems => [...prevItems, `Supplier ${Math.floor(Math.random() * (29 + i))}`]);
            }, i * intervalTime);
        }
    }, []);

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default ItemGenerator;
