import type React from "react";
import { useEffect, useState } from "react";
import DetailData from "../detail-data/detail.data";

export interface IListData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ListData: React.FC = () => {
  const [listData, setListData] = useState<IListData[]>([]);
  const [detailId, setDetailId] = useState<number | null>(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    getData(url);
  }, []);

  const getData = async (url: string): Promise<void> => {
    try {
      const getData = await fetch(url);
      if (!getData.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await getData.json();
      if (data && Array.isArray(data)) {
        setListData(data);
        console.log("Fetched data:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (id: number): void => {
    if (id !== null) {
      setDetailId(id);
    }
  };

  return (
    <>
      {listData.length === 0 ? (
        <p>No Record Found</p>
      ) : (
        {detailId != null && (
            <>
                <DetailData detailId={detailId} />
                <br />
            </>

        )}

        <ul>
          {listData.map((data, index) => (
            <li key={index} onClick={() => handleClick(data.id)}>
              <strong>{data.title}</strong>
              <p>{data.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListData;
