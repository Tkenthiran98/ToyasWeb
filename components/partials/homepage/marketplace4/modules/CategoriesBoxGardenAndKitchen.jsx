import React from 'react';
import Link from 'next/link';

const CategoriesBoxClothings = () => (
    <div className="ps-block--categories-box">
        <div className="ps-block__header">
            <h3>Home, Garden & Kitchen</h3>
            <ul>
                <li>
                    <Link href="/shop">
                        <a>New Arrivals</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Best Seller</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="ps-block__content">
            <div className="ps-block__banner">
                <img src="/static/img/categories/kitchen/large.jpg" alt="Martfury " />
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/1.jpg" alt="Martfury " />
                <p>Furniture</p>
                <span>2 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/2.jpg" alt="Martfury " />
                <p>Decoration</p>
                <span>2 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/3.jpg" alt="Martfury " />
                <p>Utensil &amp; Gadget</p>
                <span>4 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/4.jpg" alt="Martfury " />
                <p>Cookware</p>
                <span>5 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/5.jpg" alt="Martfury " />
                <p>Powers And Hand Tools</p>
                <span>10 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/6.jpg" alt="Martfury " />
                <p>Garden Tools</p>
                <span>2 Items</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/kitchen/7.jpg" alt="Martfury " />
                <p>Home Improvement</p>
                <span>3 Items</span>
            </div>
        </div>
    </div>
);

export default CategoriesBoxClothings;
