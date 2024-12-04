
import { SanityDocument } from "next-sanity";
import { getWishList, sanityFetch } from "@/sanity/client";
import { WishItem, WishList } from "@/types";
import { GetServerSideProps, GetStaticProps } from "next";
import { Bell, Gift, Snowflake, SquareArrowOutUpRight } from 'lucide-react';
import "@/app/globals.css";
import { useState } from "react";



export default function ChristmasWishlist(props: {wishList:WishItem[]}){
  const [isSnowing, setIsSnowing] = useState(false)
  const toggleSnow = () => setIsSnowing(!isSnowing)

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-green-700 text-white">
      {isSnowing && <Snowfall />}
      <header className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
          <Gift className="mr-2" /> 2024<Gift className="ml-2" />
        </h1>
        <p className="text-xl">joo</p>
        <button
          onClick={toggleSnow}
          className="mt-4 bg-white text-red-700 px-4 py-2 rounded-full hover:bg-red-100 transition-colors duration-300"
        >
          <Snowflake className="inline-block mr-2" />
          {isSnowing ? 'Lopeta heti' : 'Lumisadetta'}
        </button>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.wishList.map((item) => (
            <WishlistItem key={item._id} item={item} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6">
        <p>© 2024 </p>
      </footer>
    </div>
  )
}
function WishlistItem({ item }: { item: WishlistItem }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col h-full">
      <div className="relative pt-[75%] overflow-hidden">
        <img
          className="pt-5 absolute inset-0 w-full max-h-64 object-contain"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xl mb-2 text-red-700">{item.name}</h2>
          <p className="text-gray-700 text-base mb-4">{item.description}</p>
        </div>
        {item.productLink && (
          <a
            href={item.productLink}
            className="inline-block bg-green-500 text-white rounded-full px-4 py-2 font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
          >
            Näytä verkkokaupassa <SquareArrowOutUpRight className="inline-block ml-1" />
          </a>
        )}
      </div>
    </div>
  )
}


function Snowfall() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-80 animate-snowfall"
          style={{
            width: `${Math.random() * 5 + 5}px`,
            height: `${Math.random() * 5 + 5}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}