export default function noteBox(props: { cards: Card[] }) {
  return (
    <>
      <div id="cards" className="p-10 h-full">
        <div></div>
        <div className="rounded bg-black">
          <div
            id="box-violet"
            className="pl-10 pt-5 pb-20 space-y-10 space-x-2 rounded -translate-x-4 -translate-y-4  shadow-l-lg  bg-white"
          ></div>
        </div>
      </div>
    </>
  );
}
