import React, { useEffect, useState } from "react";
import type { IListData } from "../list-data/list-data";

interface IDetailDataProps {
  detailId: number | null;
}

const DetailData: React.FC<IDetailDataProps> = ({ detailId }) => {
  const [detailData, setDetailData] = useState<IListData>();

  useEffect(() => {
    getDetailData();
  }, [detailId]);

  const getDetailData = async (): Promise<void> => {
    try {
      const url: string =
        "https://jsonplaceholder.typicode.com/posts/" + detailId;
      const jsonData = await fetch(url);
      if (!jsonData.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await jsonData.json();
      if (data) {
        setDetailData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      This is Detail Component
      <h2>Title: {detailData?.title}</h2>
      <p>Body: {detailData?.body}</p>
      <p>UserId: {detailData?.userId}</p>
      <p>Id: {detailData?.id}</p>
    </>
  );
};

export default DetailData;
