import { Coffee, Croissant, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const menuItems = [
    { name: "Espresso", price: "$3.50" },
    { name: "Cappuccino", price: "$4.50" },
    { name: "Avocado Toast", price: "$8.00" },
    { name: "Blueberry Pancakes", price: "$9.50" },
    { name: "Fresh Orange Juice", price: "$5.00" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px]">
        <Image
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cafe interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Brew & Bloom</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
            Specialty coffee and homemade pastries in the heart of the city
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            View Menu
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2015, Brew & Bloom started as a small coffee cart with big dreams. 
              Today we're a beloved neighborhood cafe serving artisanal coffee and fresh, 
              seasonal food made with locally-sourced ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="text-amber-600" />
                <span>Specialty Coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Croissant className="text-amber-600" />
                <span>Fresh Pastries</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Coffee preparation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-stone-200 pb-4">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <span className="text-amber-600 font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <MapPin className="text-amber-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">Location</h3>
            <p>123 Coffee Street</p>
            <p>Downtown, CA 90210</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <Clock className="text-amber-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">Hours</h3>
            <p>Mon-Fri: 7am - 6pm</p>
            <p>Sat-Sun: 8am - 5pm</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <Phone className="text-amber-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">Contact</h3>
            <p>(555) 123-4567</p>
            <p>hello@brewandbloom.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Brew & Bloom</h2>
            <p className="text-stone-400 mt-2">© 2023 All Rights Reserved</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}