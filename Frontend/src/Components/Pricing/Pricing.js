import React, { useEffect, useState } from "react";
import "../Pricing/Pricing.css";

const Pricing = (props) => {
  const [pricingData, setPricingData] = useState(props?.price);
  const divStyle = {
    padding: "2px",
    borderRadius: "30px",
    background:
      "linear-gradient(to right, #B91532, #9E3040, #9B3342, #8E4049, #755A56, #5F7061, #48876D, #3C9373, #1F8C8A, #207E8C, #226E8E, #236190, #245891, #273C95, #273B95 )",
  };
  const inputStyle = {
    padding: "15px",
    backgroundColor: "#FFFFFF",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    width: "100%",
    cursor: "pointer",
    fontSize: "20px",
    color: "#000000",
  };

  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let rh = screenDimensions.height;
  let rw = screenDimensions.width;

  async function handleCheckout(sessionId) {
    const stripe = await window.Stripe(
      "pk_live_51Lo4vSK2JoN1TlrtlsLVgTkQ3bkJi5o0RSCR7MgjAlcvsdLd30k1Wwr9h0mwvbAAvNhC5oQhlsb4oCVljyjpHgWg00qUYVBIwr"
    );
    await stripe.redirectToCheckout({
      sessionId,
    });
  }

  function testStripe(packageName, packagePrice) {
    fetch("https://localhost:7000/api/product/V1/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: packagePrice,
        product: packageName,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => handleCheckout(data.sessionId))
      .catch((error) => console.error(error));
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h3
            className="text-center red font-face-im"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            OUR TOP NOTCH POCKET FRIENDLY SERVICE PLANS
          </h3>
          <h1
            className="text-center black font-face-im "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            BEST SELLING POCKET-FRIENDLY PRICING PLAN
          </h1>
        </div>
      </div>

      <div class="container py-5">
        <div class="row" style={{ padding: "50px 0" }}>
          {pricingData?.map((x, index) => {
            return (
              <div class="glass col-md-8 col-sm-4 col-lg-4">
                <div class="twrap">
                  <div class="title">{x?.packageName}</div>
                </div>
                <div class="div1 mb-3">
                  <div class="div2">
                    <div class="div3">
                      <h3 className="text-center">
                        <del className="font-face-ex text-center red">$ {x?.orignalPrice}.00</del>
                      </h3>
                      <h1
                        style={{ color: "#343b3e" }}
                        className="font-face-ex text-center "
                      >
                        $ {x?.discountedPrice}.00
                      </h1>
                      <div className="Package-Description">
                        <p
                          style={{ color: "#5c5d5f" }}
                          className="Package-Description-inner text-center"
                        >
                          {x?.description}
                          <br />
                          {x?.features1}
                          <br />
                          {x?.features2}
                          <br />
                          {x?.features3}
                          <br />
                          {x?.features4}
                          <br />
                          {x?.features5}
                          <br />
                          {x?.features6}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bwrap">
                  <div onClick={() => testStripe(x.packageName, x?.discountedPrice)} class="purchase">Purchase Now!</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;