const ProductActionCreator=(data)=>{
    return {
        type: "PRODUCTS",
        payload: data,

    };
};

export default ProductActionCreator;