import React, { Component } from 'react';
import Home, { Hello } from './home';
import { Header } from './components/header'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            electronics: {
                "title": "Mobiles",
                "columns":
                    [
                        {
                            "title": "Mi",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 5000
                        },
                        {
                            "title": "Realme",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 7000
                        },
                        {
                            "title": "Samsung",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 15000
                        },
                        {
                            "title": "Lenovo",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 20000
                        },
                        {
                            "title": "OPPO",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 8000
                        },
                        {
                            "title": "Apple",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 50000
                        },
                        {
                            "title": "Vivo",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 18000
                        },
                        {
                            "title": "Honor",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 16000
                        },
                        {
                            "title": "Asus",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 5000
                        },
                        {
                            "title": "Google Pixel 3|3XL",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 10000
                        },
                        {
                            "title": "Lenovo K9",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 40000
                        },
                        {
                            "title": "Nokia 6.1 Plus",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 15000
                        },
                        {
                            "title": "POCO F1",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 20000
                        },
                        {
                            "title": "Realme 2 Pro",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 5000
                        },
                        {
                            "title": "Nokia 5.1 Plus",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 19000
                        },
                        {
                            "title": "iPhone XS and XS Max",
                            "url": "fa fa-mobile",
                            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                            "cost": 16000
                        }
                    ]
            }
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.state.electronics.columns.map((value, index) => {
                        return (
                            <div className="col-md-3">
                                <div class="card" style={{ width: '18rem' }}>
                                    <div className="card-body custom-body">
                                        <i class="fa fa-mobile" ></i>
                                    </div>
                                    <p className="item-cost">Rs. {value.cost} /-</p>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.title}</h5>
                                        <p class="card-text">{value.desc}</p>
                                        <a href="#" class="btn btn-primary">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        )
    }
}

export default Dashboard;