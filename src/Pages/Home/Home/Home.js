import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HandleForm from '../HandleForm/HandleForm';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <MiddleBanner />
            <Testimonial />
            <HandleForm />
            <Footer />
        </div>
    );
};

export default Home;