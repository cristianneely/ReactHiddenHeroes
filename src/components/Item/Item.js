export const Item = ({title,price,image}) => {
  return (
    <>
    <img src={image} alt = {title} width= {'300px'}/>
    <h2>Título:{title}</h2>
    <h2>Precio:{price}</h2>
    
    </>
  )
}

export default Item;
