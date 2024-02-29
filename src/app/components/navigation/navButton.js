export default function navButton(props) {
    return (
        <a className="hover:bg-slate-200
         bg-rounded 
         bg-clip-bprder border-8 border-transparent rounded-2xl" href={"/#"+props.target} >{props.field}</a>
    )

}