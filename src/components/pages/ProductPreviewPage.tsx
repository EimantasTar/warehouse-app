import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { PriceHistory, ProductDetails, QuantityHistory } from "../organisms";

export const ProductPreviewPage: FC = (): JSX.Element => {
  let { id }: { id: string | undefined } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "productDetails" | "priceHistory" | "quantityHistory"
  >("productDetails");
  return (
    <div>
      <header className="App-header">
        <p>ProductPreviewScreen {id}</p>
        <ul>
          <li onClick={() => setSelectedTab("productDetails")}>
            productDetails
          </li>
          <li onClick={() => setSelectedTab("priceHistory")}>priceHistory</li>
          <li onClick={() => setSelectedTab("quantityHistory")}>
            quantityHistory
          </li>
        </ul>
      </header>
      <body>
        {selectedTab === "productDetails" && id && <ProductDetails id={id} />}
        {selectedTab === "priceHistory" && id && <PriceHistory id={id} />}
        {selectedTab === "quantityHistory" && id && <QuantityHistory id={id} />}
      </body>
    </div>
  );
};
