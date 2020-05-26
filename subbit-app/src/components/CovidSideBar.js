import React, { Component } from 'react'

export class CovidSideBar extends Component {
    render() {
        return (
            <div>
                <div className="card sticky-top">

					<div className="card-header" style={{ backgroundColor: "#52b788", color: "white" }}>
						<h5 className="mb-0">COVID-19 Update</h5>
					</div>

					<div className="card-body">
                        <p className="card-text">
                            Make sure to maintain social distancing during the COVID-19 crisis 
                            and wear masks in public to protect yourself and others around you!
                        </p>

                        <p className="card-text">
                            <strong>Helpful resources: </strong>
                            <ul>
                                <li>
                                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC Covid-19 info page</a>
                                </li>
                                <li>
                                    <a href="https://www1.nyc.gov/site/coronavirus/index.page">NYC Covid-19 Citywide info portal</a>
                                </li>
                            </ul>
                        </p>
                    </div>

				</div>
            </div>
        )
    }
}

export default CovidSideBar
