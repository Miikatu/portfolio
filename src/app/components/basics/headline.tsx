export default function Headline(headline: any) {
  return (
    <div id="headline" className="font-bold px-10 pt-12 text-md md:text-lg ">
      {headline.headline}
    </div>
  );
}
