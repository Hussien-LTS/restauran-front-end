import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { updateCategoryFetch } from "../store/slices/categorySlices/updateCategorySlice";
import { getCategoriesFetch } from "../store/slices/categorySlices/getCategoriesSlice";

import styles from "./styles.module.css";
import CustomInput from "../Customs/CustomInput";
import CustomModal from "../Customs/CustomModal ";

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState({
    title: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateCategoryFetch(updatedCategory));
    setUpdatedCategory({
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
      Update Category
      </Button>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle="Update Category"
        handleSubmit={handleSubmit}
      >
        <CustomInput
          className={styles.input}
          controlId="formBasicTitle"
          placeholder="Category title"
          name="title"
          value={updatedCategory.title}
          onChange={(e) =>
            setUpdatedCategory({ ...updatedCategory, title: e.target.value })
          }
        />
        <CustomInput
          className={styles.input}
          controlId="formBasicImg"
          placeholder="Category Img"
          name="img"
          value={updatedCategory.img}
          onChange={(e) =>
            setUpdatedCategory({ ...updatedCategory, img: e.target.value })
          }
        />
      </CustomModal>
    </>
  );
};

export default UpdateCategory;
