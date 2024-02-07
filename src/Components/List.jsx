export default function List (props) {
    return (
        <div>
            <ul>
                {props.result.length == 0 ? 
                'No items ' : 
                props.result.map((item,key) => {
                    return <li key={key}>{item.nom}</li>
                }) }
            </ul>
        </div>
    )
}