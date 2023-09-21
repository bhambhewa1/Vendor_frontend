import { toast } from "react-toastify";
import { ADD_PRODUCT,PRODUCT_LIST,PRODUCT_DETAILS,PRODUCT_DELETE } from "../actionCreator";
import AdminApi from "../../services/AdminPage";


export const SaveProduct = () => {
    return {
      type: ADD_PRODUCT,
    };
  };
  
  export const ProductList = () => {
    return {
      type: PRODUCT_LIST,
    };
  };
  
  export const ProductDetails = () => {
    return {
      type: PRODUCT_DETAILS,
    };
  };

  export const ProductDelete = () => {
    return {
      type: PRODUCT_DELETE,
    };
  };
  
export const SaveProductDetails = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.SaveProductDet(data);
  
      if (response?.data) {
        dispatch(SaveProduct(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };
  
  export const getProductList = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.getProductListData(data);
  
      if (response?.data) {
        dispatch(ProductList(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };


  export const fetchProductDetails = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.fetchProductDet(data);
  
      if (response?.data) {
        dispatch(ProductDetails(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };


  export const deleteProducts = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.deletingProduct(data);
  
      if (response?.data) {
        dispatch(ProductDelete(response?.data));
        toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };