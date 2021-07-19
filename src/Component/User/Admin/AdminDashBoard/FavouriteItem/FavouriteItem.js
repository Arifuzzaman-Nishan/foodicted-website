/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import biryanis from '../../../../../images/foodItem/biryanis.jpg';
import burger from '../../../../../images/foodItem/burgers.jpg';
import dal from '../../../../../images/foodItem/dals.jpg';
import vegetablejalfrezi from '../../../../../images/foodItem/main.jpg';
import noodles from '../../../../../images/foodItem/noodles.jpg';
import subziyan from '../../../../../images/foodItem/subziyan.jpg';
import './FavouriteItem.css';

export default function FavouriteItem() {
    const foodData = [
        {
            title: 'Biryanis',
            img: biryanis,
            review: '150 Review',
            like: '12K',
        },
        {
            title: 'burger',
            img: burger,
            review: '150 Review',
            like: '12K',
        },
        {
            title: 'dal',
            img: dal,
            review: '150 Review',
            like: '12K',
        },
        {
            title: 'vegetableJalfrez',
            img: vegetablejalfrezi,
            review: '150 Review',
            like: '12K',
        },
        {
            title: 'noodles',
            img: noodles,
            review: '150 Review',
            like: '12K',
        },
        {
            title: 'subziyan',
            img: subziyan,
            review: '150 Review',
            like: '12K',
        },
    ];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const { infinite, speed, slidesToShow, slidesToScroll, autoplay, autoplaySpeed, pauseOnHover } =
    //     settings;
    return (
        <div className="mt-5 ">
            {/* <Container className="box mt-5"> */}
            <Card style={{ maxWidth: '95%' }} className="bd-radius p-3 mx-auto">
                <h4 className="text-center mb-4">Favourite Items</h4>
                <Slider {...settings}>
                    {foodData.map((item) => (
                        <div>
                            <div style={{ maxWidth: '15rem', margin: 'auto' }}>
                                <div>
                                    <img className="img-fluid bd-radius" src={item.img} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <h6>{item.review}</h6>
                                        <h6>{item.like}</h6>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Card>
            {/* </Container> */}
        </div>
    );
}
