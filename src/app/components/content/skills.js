export default function skills(props) {
    
    const list = props.items
    const color =["bg-red-500","bg-yellow-500", "bg-cyan-500", "bg-green-500"]
    const color_shadow = ["shadow-red-500/50", "shadow-yellow-500/50", "shadow-cyan-500/50", "shadow-green-500/50"]
    const listItems = list.map((number, i) => {
        return(
            <div className=" flex flex-wrap gap">
                {number.map((item,j)=>
                <div className={`first-letter:flex-2 ${color[i]} ${color_shadow[i]}  text-white rounded-md my-5 mr-5 px-5 w-fit shadow-lg`}>{item}</div>)}
            </div>
        )
        });
    
    return (
        <div id="cards" className="p-5 justify-center ">
                <h1 className="justify-center flex text-3xl text-black">{props.title}</h1>
                <div className="justify-center flex flex-wrap">
                   {listItems}
                </div>
        </div>
    )
}