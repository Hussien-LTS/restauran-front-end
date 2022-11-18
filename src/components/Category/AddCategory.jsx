import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addCategoryFetch } from "../store/slices/categorySlices/addCategorySlice";
import { getCategoriesFetch } from "../store/slices/categorySlices/getCategoriesSlice";

import styles from "./styles.module.css";
import CustomInput from "../Customs/CustomInput";
import CustomModal from "../Customs/CustomModal ";

const AddCategory = () => {
  const dispatch = useDispatch();
  

  const [modalShow, setModalShow] = useState(false);
  const [newCategory, setNewCategory] = useState({
    title: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
console.log('newCategory',newCategory);
    dispatch(addCategoryFetch(newCategory));
    setNewCategory({
      title: "",
      img: "",
    });
   
  };

  useEffect(() => {
    dispatch(getCategoriesFetch());
  }, [dispatch]);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add categories
      </Button>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle="Add categories"
        handleSubmit={handleSubmit}
      >
        <CustomInput
          className={styles.input}
          controlId="formBasicTitle"
          placeholder="Category title"
          name="title"
          value={newCategory.title}
          onChange={(e) =>
            setNewCategory({ ...newCategory, title: e.target.value })
          }
        />
        <CustomInput
          className={styles.input}
          controlId="formBasicImg"
          placeholder="Category Img"
          name="img"
          value={newCategory.img}
          onChange={(e) =>
            setNewCategory({ ...newCategory, img: e.target.value })
          }
        />
      </CustomModal>
    </>
  );
};

export default AddCategory;
