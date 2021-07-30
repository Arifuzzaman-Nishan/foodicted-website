import React from 'react';
import { useSelector } from 'react-redux';

export default function FoodDetails() {
    const selectedItem = useSelector((state) => state.items);
    return (
        <div>
            <h1>nishan</h1>
            <li>{selectedItem.title}</li>
        </div>
    );
}
