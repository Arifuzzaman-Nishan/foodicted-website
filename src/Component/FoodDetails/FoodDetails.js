/* eslint-disable radix */
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rate } from 'antd';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Navigationbar from '../Navigationbar/Navigationbar';

export default function FoodDetails() {
    // useSelector is a react-redux hook using this we can access the data of redux
    const selectedItem = useSelector((state) => state.items);

    const { img, like, review, title, price } = selectedItem;
    // console.log(img, like, review, title);

    const [quantityValue, setQuantityValue] = useState(1);

    const handleChange = (value) => {
        console.log(value);
        const integerValue = parseInt(value) || 0;

        if (integerValue >= 0) {
            setQuantityValue(integerValue);
        }
    };

    const [addCart, setAddCart] = useState({});

    const handleAddCart = () => {
        setAddCart({ ...addCart, img, title, price, quantityValue });
    };
    console.log(addCart);

    return (
        <div>
            <Navigationbar />
            <Container className="">
                <h2 className="text-center mb-5">Food Details</h2>
                <Row>
                    {/* selected food details */}
                    <Col md={8}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <img className="bd-radius img-fluid" src={img} alt="" />
                            </div>
                            <div>
                                <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>
                                <Rate style={{ color: '#F78630' }} disabled defaultValue={5} />
                                <h4>{review}</h4>
                                <h5>Price: ${price}</h5>
                                <h6>{like}</h6>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3>Description</h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                                natus nemo excepturi qui mollitia ea fuga cupiditate ab perferendis
                                optio at autem ratione nobis officia, consequuntur voluptatum
                                laborum, aliquid nihil explicabo magni eius corporis esse. Neque
                                quae dicta dignissimos illo? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo maiores autem adipisci similique nesciunt,
                                rerum, vitae at excepturi eveniet culpa cupiditate. Tempore quos
                                reiciendis exercitationem odit facilis cumque possimus, tenetur
                                culpa! Exercitationem possimus ullam doloremque blanditiis natus
                                maxime provident architecto?
                            </p>
                        </div>
                    </Col>
                    {/* food cart */}
                    <Col style={{ borderLeft: '1px solid lightgray' }} className="ml-auto" md={3}>
                        <Card className="p-4">
                            <div className="text-center">
                                <h5>Your Cart</h5>
                                <p>
                                    <small>Start adding items to your cart</small>
                                </p>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h5>Price:</h5>
                                    <h5>${price * quantityValue}</h5>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5>Status:</h5>
                                    <h5>in stock</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>Quantitiy:</h5>
                                    <FontAwesomeIcon
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            quantityValue !== 1 &&
                                            setQuantityValue((prevState) => prevState - 1)
                                        }
                                        icon={faMinus}
                                    />

                                    <input
                                        style={{ width: '40px', border: 'none' }}
                                        className="form-control text-center"
                                        onChange={(e) => handleChange(e.target.value)}
                                        value={quantityValue}
                                        type="text"
                                    />

                                    <FontAwesomeIcon
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            setQuantityValue((prevState) => prevState + 1)
                                        }
                                        icon={faPlus}
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <Button onClick={handleAddCart} variant="danger">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
