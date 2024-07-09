export default function itemDescription(props:{title: String, content: String}) {
  return (
    <div>
      <h1 className="text-xl pl-5 pt-2 text-[#2b2e3a] font-bold">
        {props.title}
      </h1>
      <p className="text-black">{props.content}</p>
    </div>
  );
}
