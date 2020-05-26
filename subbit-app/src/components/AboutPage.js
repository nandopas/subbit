import React, { Component } from 'react'

export class AboutPage extends Component {
    render() {
        return (
            <>
            <div className="card p-4 mb-4">
                <h1 className="mb-0">About Subbit</h1> <hr />
                <p className="card-text">
                    Subbit is a forum of activities, events, and restaurants occuring near New York City Subway Stops.
                </p>
                <p className="card-text">
                    The idea is to have a central source for happenings in the city that don't necesarily appear on
                    sites such as Yelp and Google and posts are voted on by users, so best stuff by public opinion goes to the top.
                </p>
                <p className="card-text">
                    Could be anything from fun street entertainment, to a food truck, to a random fat squirrel!
                </p>

                <p className="card-text">
                    Looking to tag up with people? Post on a subway stop page if you're bored to meet up with locals and find a new hangout spot!
                </p>

                <p className="card-text">
                    <strong>COVID UPDATE:</strong> Social distance and wear your masks though!!
                </p>

                <p className="card-text">
                    Reach out to us at mail@subbit.net for suggestions and features!
                </p>

            </div>

            <div className="card p-4">
                <h1 className="mb-0">News and Updates</h1> <hr />
                <p className="card-text">
                    <li>
                        <strong>May 26, 2020:</strong> Subbit is currently going under maintenance. The look and fuctionality is currently being redesigned
                        with React.js to allow a more dynamic experience without having to re-render pages. Comments are currently disabled, but will be back soon!
                    </li>
                </p>
            </div>
            </>
        )
    }
}

export default AboutPage
