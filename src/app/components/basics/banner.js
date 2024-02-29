export default function Banner(banner) {

    return (
        <div className="transition-all hidden sm:flex hover:skew-x-12 sm:w-fit sm:border-r-8 hover:border-l-8 hover:border-r-0  border-black bg-orange-300 col-start-2 col-span-2">
            <img src={banner.banner} />
        </div>
    )
}
