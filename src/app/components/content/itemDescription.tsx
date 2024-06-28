export default function itemDescription(props: any) {
  return (
    <div>
      <h1 className="text-lg  text-black font-bold">{props.title}</h1>
      <p className="text-black">{props.content}</p>
    </div>
  );
}
