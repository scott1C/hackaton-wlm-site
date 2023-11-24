import './scss/styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<>
    <Header />
    <Main />
    <Footer />
</>);