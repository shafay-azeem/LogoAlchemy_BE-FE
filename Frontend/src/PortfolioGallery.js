import React, { useEffect } from "react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../src/PortfolioGallery.css";

const PortfolioGallery = ({ image }) => {
    const [data, setData] = useState({ img: "", i: 0 });

    const images = image

    const viewImage = (img, i) => {
        setData({ img, i });
    };

    const imageAction = (action) => {
        let i = data.i;
        if (action === "next-img") {
            setData({ img: images[i + 1], i: i + 1 });
        }
        if (action === "previous-img") {
            setData({ img: images[i - 1], i: i - 1 });
        }
        if (!action) {
            setData({ img: "", i: 0 });
        }
    };


    return (
        <>


            {data.img && (
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        background: "black",
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <button
                        style={{ position: "absolute", top: "10px", right: "10px" }}
                        onClick={() => imageAction()}
                    >
                        X
                    </button>
                    <button onClick={() => imageAction("previous-img")}>Previous</button>
                    <img
                        src={data.img}
                        style={{ width: "auto", maxWidth: "90%", maxHeight: "990%" }}
                    />
                    <button onClick={() => imageAction("next-img")}>Next</button>
                </div>
            )}
            <div style={{ padding: "10px", backgroundColor: 'white' }}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <div className="box">
                                <div class="box-content">
                                    <span >The Logo Alchemy</span>
                                </div>
                                <img
                                    key={i}
                                    src={image}
                                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                                    onClick={() => viewImage(image, i)}
                                />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default PortfolioGallery;