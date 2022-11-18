import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItemsFetch } from "../store/slices/itemSlices/getCategoryItemsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import CustomCard from "../Customs/CustomCard";
const GetCategoryItems = () => {
  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.getCategoryItems);
  let { categoryId } = useParams();
  console.log(categoryItems);
  useEffect(() => {
    console.log("categoryId");
    dispatch(getCategoryItemsFetch({ categoryId }));
  }, [categoryId, dispatch]);
 

  return (
    <>
      <p>categoryItems</p>
      {categoryItems.loading && <div>loading .......</div>}
      {!categoryItems.loading && categoryItems.error && (
        <div>Error: {categoryItems.categoryItems.error}</div>
      )}
      {!categoryItems.loading._productId && categoryItems.categoryItems._productId
        ? categoryItems.categoryItems._productId &&
          categoryItems.categoryItems._productId?.map((item) => (
            <Row xs={1} md={2} key= {item._id} className="g-4">
              <CustomCard
                title={item.name}
                desc={item.desc}
                price={item.price}
              />
            </Row>
           
          ))
        : "null"}
    </>
  );
};

export default GetCategoryItems;
