import React, { useState } from "react";
import "./costco-main.css";

const CostcoMain: React.FC = () => {
  const [inStockItems, setInStockItems] = useState<string[]>([
    "Onion",
    "Banana",
    "Mango",
    "Tomato",
    "SpringOnion",
  ]);
  const [outStockItems, setOutStockItems] = useState<string[]>([
    "Cups",
    "Torch",
    "Cloths",
    "Jackets",
    "Meat",
  ]);

  const handleItemStockEvent = (itemIdx: number, move: string) => {
    if (move === "Move to Out Stock") {
      const selectedInStockItem = inStockItems[itemIdx];
      setInStockItems(
        inStockItems.filter((eachItem) => eachItem !== selectedInStockItem)
      );
      setOutStockItems([...outStockItems, selectedInStockItem]);
    } else {
      const selectedOutStockItem = outStockItems[itemIdx];
      setOutStockItems(
        outStockItems.filter((eachItem) => eachItem !== selectedOutStockItem)
      );
      setInStockItems([...inStockItems, selectedOutStockItem]);
    }
  };

  const handleAllItemStockEvent = (move: string) => {
    if (move === "Move All Out Stock") {
      const allInStockItems = inStockItems;
      setInStockItems([]);
      setOutStockItems([...outStockItems, ...allInStockItems]);
    } else {
      const allOutStockItems = outStockItems;
      setOutStockItems([]);
      setInStockItems([...inStockItems, ...allOutStockItems]);
    }
  };

  return (
    <div className="container">
      <h2>This is Costco Component</h2>
      <div className="lists">
        <div className="list">
          {inStockItems.length === 0 ? (
            <p>No In Stock itrems left</p>
          ) : (
            <ul>
              {inStockItems.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                  <button
                    onClick={() =>
                      handleItemStockEvent(index, "Move to Out Stock")
                    }
                  >
                    Move to Out Stock
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="list">
          {outStockItems.length === 0 ? (
            <p>No Out Stock itrems left</p>
          ) : (
            <ul>
              {outStockItems.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                  <button
                    onClick={() =>
                      handleItemStockEvent(index, "Move to In Stock")
                    }
                  >
                    Move to In Stock
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleAllItemStockEvent("Move All In Stock")}>
          Move All to In Stock
        </button>
        <button onClick={() => handleAllItemStockEvent("Move All Out Stock")}>
          Move All to Out of stock
        </button>
      </div>
    </div>
  );
};

export default CostcoMain;
