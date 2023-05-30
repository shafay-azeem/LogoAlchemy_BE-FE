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
      "pk_test_51MbQxgIpk2q02uGFw8n1203C8RXnBHdnA1L4N1bMJr6sp91hSrt8XlbO2yKrjW7LPBlvfphQkCm5MbGdkw00imAJ00vRlmUGQl"
    );
    await stripe.redirectToCheckout({
      sessionId,
    });
  }

  function testStripe(packageName, packagePrice, route) {
    fetch("https://thelogoalchemy.com/api/product/V1/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: packagePrice,
        product: packageName,
        quantity: 1,
        route: route
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
            OUR POCKET FRIENDLY SERVICE PLANS
          </h3>
          <h1
            className="text-center black font-face-im "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Budget and requirement prioritized with tailored packages.
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
                      {/* <h3 className="text-center">
                        <del className="font-face-ex text-center red">
                          $ {x?.orignalPrice}.00
                        </del>
                      </h3> */}
                      <h1
                        style={{ color: "#343b3e" }}
                        className="font-face-ex text-center "
                      >
                        $ {x?.orignalPrice}.00
                      </h1>
                      <div className="Package-Description">
                        <p className="Package-Description-inner text-start">
                          {x?.description ? "• " + x?.description : null}
                          <br />

                          {x?.features1 ? "• " + x?.features1 : null}
                          <br />

                          {x?.features2 ? "• " + x?.features2 : null}
                          <br />

                          {x?.features3 ? "• " + x?.features3 : null}
                          <br />

                          {x?.features4 ? "• " + x?.features4 : null}
                          <br />

                          {x?.features5 ? "• " + x?.features5 : null}
                          <br />

                          {x?.features6 ? "• " + x?.features6 : null}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bwrap">
                  <div
                    onClick={() => testStripe(x.packageName, x?.orignalPrice, x?.route)}
                    class="purchase"
                  >
                    Purchase Now!
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
