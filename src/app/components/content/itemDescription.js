export default function itemDescription(props) {
    return (
    <div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p>{props.content}</p>
    </div>
    )
}