/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import foodData from '../../../../../FakeData/favouriteFoodItem/favouriteFoodItem';
import { foodDetails } from '../../../../redux/foodDetails/foodDetailsAction';
import settings from './carouselSettingData';
import './FavouriteItem.css';

export default function FavouriteItem({ home }) {
    // react-router useHistory hook
    const history = useHistory();

    // react-redux useDispatch hook to dispatch an action
    const dispatch = useDispatch();

    // this function take all the selected food item
    const handleClick = (item) => {
        history.push(`/food/${item.title}`);

        // here dispatch the action and the dispatch takes an action creator which is a function
        dispatch(foodDetails(item));
    };

    return (
        <Slider {...settings}>
            {foodData.map((item) => (
                <div onClick={() => home && handleClick(item)}>
                    <div style={{ maxWidth: '15rem', margin: 'auto', cursor: home && 'pointer' }}>
                        <div>
                            <img className="img-fluid bd-radius" src={item.img} alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <h6>{item.review}</h6>
                                <h6>{item.like}</h6>
                            </Card.Text>
                            {home && <Button variant="danger">Details</Button>}
                        </Card.Body>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
