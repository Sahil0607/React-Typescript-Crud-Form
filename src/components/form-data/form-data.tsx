import type React from "react";
import { useState } from "react";
import type { IListData } from "../list-data/list-data";

const FormData: React.FC = () => {
  const [formData, setFormData] = useState<IListData>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  const handleOnChnageData = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    if (name != "" || value != null || value != "") {
      console.log("test name: " + name);
      console.log("test value: " + value);
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      // post call
      const postUrl = "https://jsonplaceholder.typicode.com/posts";
      const postJson = await fetch(postUrl, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!postJson.ok) {
        throw new Error("Issue in post call");
      }
      const postData = await postJson.json();
      if (postData && postData.id > 0) {
        console.log("Post call success Data: ", postData);
        setFormData({
          userId: 0,
          id: 0,
          title: "",
          body: "",
        });
      }
    } catch (e) {
      console.log("Error fetching post call", e);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData?.title}
          onChange={handleOnChnageData}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          name="body"
          value={formData?.body}
          onChange={handleOnChnageData}
        />
      </div>
      <div>
        <label htmlFor="userId">User Id</label>
        <input
          type="number"
          id="userId"
          name="userId"
          value={formData?.userId}
          onChange={handleOnChnageData}
        />
      </div>
      <div>
        <label htmlFor="id">Id</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData?.id}
          onChange={handleOnChnageData}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormData;
