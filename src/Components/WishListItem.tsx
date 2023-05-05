import React from "react";
import { Col } from "react-bootstrap"

function WishListItem() {
    let gameTitle: string = 'Super Mario Odyssey';
    let releaseYear: number = 2017;
    let platform: string = 'Nintendo Switch';

    let wishlistItemClass: string = 'add-to-wishlist';

    function AddItemHover () {
        wishlistItemClass = 'add-to-wishlist-visible add-visible';
    }

    return (
        <Col xs={2} className="image-with-overlay"
        onMouseOver={(AddItemHover)}
        >
            <div className="image-darken">
                <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
            </div>
            <p className={wishlistItemClass}>+ Add To Wishlist</p>

            {/* <div className="hover-overlay-effect"></div> */}
            <p>{gameTitle}</p>
            <p>Released: {releaseYear}</p>
            <p>Platform(s): {platform}</p>
        </Col>
    )
}

export { WishListItem }