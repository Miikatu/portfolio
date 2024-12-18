export default function navButton(props: { target: string; field: string }) {
  return (
    <a
      className="hover:bg-slate-200
         bg-rounded
		 text-black 
         bg-clip-bprder border-8 border-transparent rounded-2xl"
      href={"/portfolio/#" + props.target}
    >
      {props.field}
    </a>
  );
}
