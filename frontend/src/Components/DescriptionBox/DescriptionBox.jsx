import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box"> Description</div>
                <div className="descriptionbox-nav-box fade"> Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, officia quibusdam,
                    repellendus iste minus earum, doloribus voluptas quasi veniam voluptatum aspernatur molestias non illum sint reprehenderit quis.
                    Aspernatur, eum doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non qui unde voluptate adipisci doloribus,
                    illo animi aliquid quas minima. Excepturi itaque reprehenderit fuga sequi eum qui autem obcaecati eveniet quia!
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;