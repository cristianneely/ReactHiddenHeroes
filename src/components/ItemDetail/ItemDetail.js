
const ItemDetail = ({detail})=>{
    return(
        <>
        <img src={detail.image} width= {'300px'}/>
        <h4>Descripción: {detail.description}</h4>
        <h4>Categoría: {detail.categoryName}</h4>


        </>
    )}

    export default ItemDetail;