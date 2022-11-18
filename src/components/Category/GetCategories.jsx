import { useEffect } from "react";
import {  Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

import CustomCard from "../Customs/CustomCard";
import { getCategoriesFetch } from "../store/slices/categorySlices/getCategoriesSlice";


const GetCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.getCategories);
  let { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCategoriesFetch());
  }, [dispatch]);
const showItemsHandler =(e)=>{
  categoryId =e.currentTarget.id
  console.log(categoryId);
   navigate(`/category/${categoryId}/items`);
}
  return (
    <>
      <p> categories</p>
      {categories.loading && <div>loading .......</div>}
      {!categories.loading && categories.error && (
        <div>Error: {categories.error}</div>
      )}
      {!categories.loading && categories.categories.length ? (
        categories.categories?.map((category) => (
          <div id={category._id} 
          onClick={showItemsHandler}
          >
          <Row xs={1} md={2} className="g-4" >
            <CustomCard title={category.title} />
          </Row>
          </div>
        ))
      ) : (
        <p>empty</p>
      )}
    </>
  );
};

export default GetCategories;
