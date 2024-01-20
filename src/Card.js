import React from "react";

const Card = ({ id, name, username, email }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow tc">
            <img alt="Robots" src={`https://robohash.org/${username}?200x200`}></img>
            <div>
                <h3>{id}</h3>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;