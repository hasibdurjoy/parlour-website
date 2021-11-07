import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <MiddleBanner />
        </div>
    );
};

export default Home;