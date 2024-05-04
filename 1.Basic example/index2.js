import React from 'react';
import {createRoot} from 'react-dom/client';
import CarClassComponent from './components/CarClassComponent.js';
import CarFunComponent from './components/CarFunComponent.js';

createRoot(document.getElementById('demo')).render(<>
    <CarClassComponent/>
    <CarFunComponent/>
</>);