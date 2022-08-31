import React from 'react'
import ProductCarousel from '../component/Product/ProductCarousel';
import ProductPricing from '../component/Product/ProductPricing';
import ProducAddOn from '../component/Product/ProducAddOn';
import { Col, Container, Row } from 'react-bootstrap';
import Sub_Footer from '../layout/Sub_Footer';
import Footer from '../layout/Footer';
import BestSelling from '../component/Card/BestSelling';
import Slider from "react-slick";
import Divider from '../component/Divider/Divider';
import './product_details.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const bestSelling = [
    { 'icon': "official/Best_Selling_Gifts/1.png", "title": "Birthday Gift" },
    { 'icon': "official/Best_Selling_Gifts/2.png", "title": "Annivesary Gift" },
    { 'icon': "official/Best_Selling_Gifts/3.png", "title": "Flowers Gift" },
    { 'icon': "official/Best_Selling_Gifts/4.png", "title": "Cakes Gift" },
    { 'icon': "official/Best_Selling_Gifts/1.png", "title": "Birthday Gift" },
    { 'icon': "official/Best_Selling_Gifts/2.png", "title": "Annivesary Gift" },
    { 'icon': "official/Best_Selling_Gifts/3.png", "title": "Flowers Gift" },
    { 'icon': "official/Best_Selling_Gifts/4.png", "title": "Cakes Gift" },
];

const settingsBestSelling = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true
};

const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true
};

const settingVertical = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: true
};


function home() {
    // useEffect({
    //     document.querySelector();
    // }, [])
    return (
        <>
            {/* <Row>
                    <>
                        <ProductCarousel></ProductCarousel>
                        <ProductPricing></ProductPricing>
                        <ProducAddOn></ProducAddOn>

                    </>
                </Row > */}

            <Container style={{ padding: "20px 20px" }}>
            <div className="product_details">
                    <div className="left_image_details">
                        <div className="image_slider_vertical">
                            <Slider {...settingVertical}>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                                <div className="small_image_div">
                                    <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                                </div>
                            </Slider>
                        </div>
                        <div className="image_slider_hightlight_image">
                            <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                        </div>
                    </div>
                    <div className="left_image_details_2">
                        <div className="image_details_heading">
                            <h4>Timeless Love Red Roses Bouquet</h4>
                        </div>

                        <div class="bank-offers">
                            <table style={{ width: "100%" }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img class="offer-images" src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/first-orderCoupon-Code.png" />
                                        </td>
                                        <td>
                                            <span>Get 15% Off* on First Order</span>
                                        </td>
                                        <td>
                                            <div class="offer-tnc">
                                                <span class="offer-tnc-txt blue-text">*T&C</span>

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img class="offer-images" src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/first-orderCoupon-Code.png" />
                                        </td>
                                        <td>
                                            <span>Get 15% Off* on First Order</span>
                                        </td>
                                        <td>
                                            <div class="offer-tnc">
                                                <span class="offer-tnc-txt blue-text">*T&C</span>

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img class="offer-images" src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/first-orderCoupon-Code.png" />
                                        </td>
                                        <td>
                                            <span>Get 15% Off* on First Order</span>
                                        </td>
                                        <td>
                                            <div class="offer-tnc">
                                                <span class="offer-tnc-txt blue-text">*T&C</span>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div id="product-description" class="">
                            <div class="product-desc-desktop_productDescription__1hRLx"><div class="product-desc-desktop_descriptionTitle__2Q-Ha" itemprop="description"><h4>Description</h4><hr /><p><b>Product Details:</b></p><ul><li>Fall in love with this classic bouquet of red roses wrapped in red paper. Sprinkled with baby’s breath, this love-infused bunch looks simply magical. Let your special someone know how much you love them with the help of this spellbinding bouquet.</li><li>10 Red Roses</li><li>Baby's Breath </li><li>One Non-Woven Printed Red Paper</li><li>One Non-Woven Red Paper</li><li>Beautifully Tied with FNP Branded Ribbon</li></ul><p><b>Flowers Trivia:</b></p><ul><li>Did you know a rose bush can grow quite tall? The tallest ever recorded rose bush stands at over 23 feet (7 meters) tall.</li><li>Red Roses are perfect expressions of love and romance since ancient times!</li></ul></div><div class="product-desc-desktop_descriptionTitle__2Q-Ha"><h4>Delivery Information</h4><hr /><ul><li>The image displayed is indicative in nature.</li><li>Actual product may vary in shape or design as per the availability.</li><li>Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.</li><li>The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.</li><li>Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.</li><li>The delivery cannot be redirected to any other address.</li><li>This product is hand delivered and will not be delivered along with courier products.</li><li>Occasionally, substitution of flowers is necessary due to temporary and/or regional unavailability issues.</li></ul></div><div class="product-desc-desktop_descriptionTitle__2Q-Ha"><h4>Care Instructions</h4><hr /><ul><li>When your flowers arrive, just trim the stems and add water.</li><li>Re-cut 1-2” of the stems at a 45 degree angle.</li><li>Use a clean vase and clean water.</li><li>Remove the leaves below the waterline but do not remove all leaves along the stem length.</li><li>Check the water level daily and replenish as needed.</li><li>Don’t place flowers in direct sunlight or near any other source of excessive heat.</li><li>All flowers benefit from a daily mist of water.</li><li>Enjoy your flowers!</li></ul></div></div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid style={{ padding: "20px 20px" }}>
               
                <Row>
                    <button className="product_pricing_button_heading">
                        RECENTLY VIEWED PRODUCTS
                    </button>
                    <Slider {...settingsBestSelling}>
                        {
                            bestSelling.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><BestSelling source={el.icon} cardContent={"Product details here........"} cardClass="auto-height-cust" showContent={true} value="200" /></Col>)
                        }
                    </Slider>
                </Row>
                <Row>
                    <button className="product_pricing_button_heading">
                        RECENTLY VIEWED PRODUCTS
                    </button>
                    <div className="row customer-cards">
                        <Slider {...settings}>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="customer-card-section">
                                    <div className='left-card'>
                                        <div className="card-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className="left-card-img">
                                            <img src="official/Combos/1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='right-card'>
                                        <div className="">
                                            <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                            <p className="personName">
                                                Priya a
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <h6 className={"customer_cards_rating_heading"}>(Rated 4.6/5 based on 22497 ratings)</h6>

                    </div>
                </Row>
                <Row>
                    <button className="product_pricing_button_heading">
                        RECOMMENDED PRODUCTS
                    </button>
                    <Slider {...settingsBestSelling}>
                        {
                            bestSelling.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><BestSelling source={el.icon} cardContent={"Product details here........"} cardClass="auto-height-cust" showContent={true} value="200" /></Col>)
                        }
                    </Slider>
                </Row>
            </Container>
            <Sub_Footer />
            <Footer />
        </>
    )
}

export default home