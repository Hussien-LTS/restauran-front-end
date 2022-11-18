import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsFetch } from "../store/slices/itemSlices/itemsSlice";
 import GetCategoryItems from "./getCategoryItems";

const GetItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  // const GetCategoryItems = lazy(() => import("./getCategoryItems"));
  // useEffect(() => {
  //   dispatch(itemsFetch());
  // }, [dispatch]);

  return (
    <>
      <GetCategoryItems />
      {/* <p>items</p>
      {items.loading && <div>loading .......</div>}
      {!items.loading && items.error && <div>Error: {items.error}</div>}
      {!items.loading && items.items.length?( items.items &&
        items.items?.map((item) => (
          <div key={item._id} className="items">
            <h3>{item.name}</h3>
            <div className="details">
              <span>{item.desc}</span><br/>
              <span className="price">${item.price}</span>
            </div>
          </div>
        ))):null } */}
    </>
  );
};

export default GetItems;
