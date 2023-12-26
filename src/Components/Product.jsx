export default function Product ({product}) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><span className="badge badge-pill bg-dark">{product.category}</span></td>
            <td><img src={product.image} width={250}/></td>
            <td>{product.rating.rate} count={product.rating.count}</td>
        </tr>
    )
}