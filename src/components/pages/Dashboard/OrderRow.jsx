const OrderRow = ({ orderData, index }) => {
  const {
    productID,
    productImage,
    productName,
    productPrice,
    userName,
    userEmail,
    createdAt,
  } = orderData || {};

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={productImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <p className="font-bold">{productName}</p>
      </td>
      <td>{productPrice}</td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{createdAt.slice(0, 10)}</td>
    </tr>
  );
};

export default OrderRow;
