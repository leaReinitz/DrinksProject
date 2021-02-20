
import React, { useState, useEffect } from 'react'
import './style.css';
export function Images(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const numbetOfPage = React.Children.count(props.children)
    function pageComponnet(pageIndex) {
        const img = React.Children.toArray(props.children)[pageIndex]
        return React.cloneElement(img)
    }
    return (
        <div >
            <h1>Carousel</h1>
            <br></br><br></br>
            <button disabled={currentPage === 0} className="btn btn-link" onClick={(e) => { setCurrentPage(value => value - 1) }}>&lt;</button>
            {pageComponnet(currentPage)}
            <button disabled={currentPage >= numbetOfPage - 1} className="btn btn-link" onClick={(e) => { setCurrentPage(value => value + 1) }}> &gt;</button>
            {/* Bootstrap */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {React.Children.toArray(props.children)[0]}
                    </div>
                    {(React.Children.toArray(props.children)).map((item, index) => {
                        if (index !== 0)
                            return (
                                <div key={index} className="carousel-item">
                                    {item}
                                </div>
                            )
                    })
                    }
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}
