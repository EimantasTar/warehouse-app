import { Button } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { ScreenLayout } from "../layouts";
import { PriceHistory, ProductDetails, QuantityHistory } from "../organisms";

const ProductPreviewPage: FC = (): JSX.Element => {
  const { id }: { id: string | undefined } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "productDetails" | "priceHistory" | "quantityHistory"
  >("productDetails");
  return (
    <ScreenLayout>
      <div>
        <header className="App-header">
          <p>ProductPreviewScreen {id}</p>
          <ul>
            <li>
              <Button onClick={() => setSelectedTab("productDetails")}>
                productDetails
              </Button>
            </li>
            <li>
              <Button onClick={() => setSelectedTab("priceHistory")}>
                priceHistory
              </Button>
            </li>
            <li>
              <Button onClick={() => setSelectedTab("quantityHistory")}>
                quantityHistory
              </Button>
            </li>
          </ul>
        </header>
        <body>
          {selectedTab === "productDetails" && id && <ProductDetails id={id} />}
          {selectedTab === "priceHistory" && id && <PriceHistory id={id} />}
          {selectedTab === "quantityHistory" && id && (
            <QuantityHistory id={id} />
          )}
        </body>
      </div>
    </ScreenLayout>
  );
};

export default ProductPreviewPage;
