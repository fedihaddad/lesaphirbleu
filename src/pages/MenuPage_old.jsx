import React, { useState } from 'react'

function Item({ name, price, desc }){
  return (
    <div className="menu-item group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] bg-white border border-slate-200 hover:shadow-xl hover:border-blue-200 shadow-sm">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="text-lg font-bold leading-tight mb-2 text-slate-800 group-hover:text-blue-800">
              {name}
            </h4>
            {desc && (
              <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-90">
                {desc}
              </p>
            )}
          </div>
          
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-full text-base font-bold shadow-md transition-all duration-200 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-200 group-hover:shadow-lg">
              {price} DT
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay for hover effect */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </div>
  )
}

function CategoryCard({ category, onClick, image }){
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
    >
      {/* Category Image */}
      <div className="relative h-32 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl opacity-60">
            {image || "🍽️"}
          </div>
        </div>
      </div>
      
      {/* Category Content */}
      <div className="p-4">
        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 text-center">
          {category}
        </h3>
        <div className="flex items-center justify-center mt-2">
          <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

const menuData = {
  "ŒUFS BÉNÉDICTE": [
    { name: "Œufs bénédicte au jambon", price: "9,800", desc: "(mini pain, tartinée, jambon, œuf poché, fromage)" },
    { name: "Œufs bénédicte au saumon", price: "14,900", desc: "(mini pain, tartinée, saumon, œuf poché, fromage)" }
  ],
  "PETIT-DÉJ": [
    { name: "Beau Matin", price: "14,900", desc: "(café au choix, mini jus, croissant, beignet, confiture, fromage)" },
    { name: "Business Woman", price: "28,400", desc: "(café au choix, mini jus, croissant, beignet, confiture, fromage, crêpe chocolat, bubble waffle, salade de fruits, gâteau du jour, cheesecake)" }
  ],
  "BRUNCH": [
    { name: "Brunch Classique", price: "28,700", desc: "(œufs brouillés, croissant, beignet, mini jus, salade César, café au choix, fromage, charcuterie, crêpe chocolat)" },
    { name: "Brunch Royal", price: "39,000", desc: "(œufs brouillés, croissant, beignet, mini jus, salade César, café au choix, fromage, charcuterie, crêpe chocolat, pancakes, salade de fruits, cheesecake)" }
  ],
  "CRÊPE & GAUFFRE": [
    { name: "Nutella", price: "15,000" },
    { name: "Nutella Oréo", price: "16,000" },
    { name: "Spéculoos", price: "16,000" },
    { name: "Nutella Fruits Secs", price: "16,500" },
    { name: "Nutella Banane", price: "17,000" },
    { name: "Kinder Bueno", price: "19,000" },
    { name: "Nutella Snickers", price: "19,000" },
    { name: "Saphir Bleu", price: "31,000", desc: "(Nutella, banane, fruits secs, Spéculoos, Kinder, Mars, Snickers, Oréo, glace)" }
  ],
  "PAIN CAKE": [
    { name: "Nutella", price: "16,000" },
    { name: "Spéculoos", price: "17,000" },
    { name: "Nutella Banane", price: "18,000" },
    { name: "Nutella Fruits Secs", price: "19,000" },
    { name: "Kinder", price: "19,000" },
    { name: "Snickers", price: "19,000" },
    { name: "Nutella Banane Fruits Secs", price: "22,500" },
    { name: "Saphir Bleu", price: "32,500", desc: "(Nutella, banane, fruits secs, Spéculoos, Kinder, Mars, Snickers, Oréo, glace)" }
  ],
  "BUBBLE WAFFLE": [
    { name: "Nutella Banane", price: "16,500" },
    { name: "Nutella Banane Fruits Secs", price: "18,500" },
    { name: "Nutella Pistache", price: "20,500" },
    { name: "Saphir Bleu", price: "33,000", desc: "(Nutella, banane, fruits secs, Spéculoos, Kinder, Mars, Snickers, Oréo, glace)" }
  ],
  "CRÊPE FOURRÉE": [
    { name: "Escalope", price: "19,500" },
    { name: "Viande Hachée", price: "22,000" },
    { name: "Cigare aux Crevettes", price: "23,800" }
  ],
  "CRÊPE SALÉE": [
    { name: "Jambon Fromage", price: "11,500" },
    { name: "Thon Fromage", price: "14,000" },
    { name: "Poulet", price: "15,500" },
    { name: "Royal", price: "18,300", desc: "(thon, fromage, jambon, œuf)" }
  ],
  "HAMBURGER": [
    { name: "Burger Classique", price: "16,000", desc: "(pain hamburger, steak haché, laitue, tomate, fromage)" },
    { name: "Chicken Burger", price: "16,000", desc: "(pain hamburger, blanc de poulet pané, laitue, tomate, fromage, oignon caramélisé)" },
    { name: "Cheeseburger", price: "19,500", desc: "(pain hamburger, steak haché, laitue, tomate, fromage cheddar, sauce fromagère)" },
    { name: "Le Saphir Bleu", price: "27,000", desc: "(pain hamburger, double steak, fromage cheddar, sauce cheddar parmesan, laitue, tomate, oignon caramélisé)" }
  ],
  "GLACES": [
    { name: "Nutella Fruits Secs", price: "17,000" },
    { name: "Caramel", price: "17,000" },
    { name: "Spéculoos", price: "17,000" },
    { name: "Oréo", price: "17,000" },
    { name: "Ferrero Noisette", price: "19,500" },
    { name: "Banane Framboise", price: "19,000" },
    { name: "Pêche Melon", price: "20,000" },
    { name: "Exotique", price: "20,000" },
    { name: "Fruits de Saison", price: "21,000" }
  ],
  "MENU ENFANT": [
    { name: "Mickey Mouse", price: "14,300", desc: "(6 nuggets, soda, frites, œuf surprise, riz)" },
    { name: "Tom & Jerry", price: "15,400", desc: "(escalope panée, soda, frites, œuf surprise, riz)" },
    { name: "Spongy Bot", price: "16,200", desc: "(mini pizza, soda, frites, œuf surprise)" },
    { name: "Hello Kitty", price: "13,800", desc: "(mini tacos, soda, frites, œuf surprise)" }
  ],
  "PÂTES": [
    { name: "Pasta Alfredo", price: "25,700", desc: "(poulet, champignon)" },
    { name: "Pasta Carbonara", price: "23,200" },
    { name: "Pasta Crevettes Champignon", price: "32,400" },
    { name: "Pasta Bolognaise", price: "26,400" },
    { name: "Pasta Fruits de Mer", price: "37,400" },
    { name: "Pasta 4 Fromages", price: "26,300" },
    { name: "Pasta Norvégienne", price: "33,600", desc: "(crevettes, saumon)" },
    { name: "Rigatoni Trois Saveurs", price: "36,400", desc: "(courgettes, tomates séchées, crevettes, parmesan)" },
    { name: "Rigatoni Florentine", price: "31,600", desc: "(poulet, champignon, parmesan)" },
    { name: "Ravioli Crevettes Saumon", price: "34,500" },
    { name: "Ravioli 4 Fromages", price: "28,800" },
    { name: "Ravioli Ricotta Épinard", price: "26,200" },
    { name: "Ravioli Ricotta Parmesan", price: "27,300" },
    { name: "Ravioli aux Truffes", price: "36,700" },
    { name: "Ravioli aux Crevettes", price: "37,300" },
    { name: "Risotto Crevettes Champignon", price: "38,400" },
    { name: "Risotto Fruits de Mer", price: "42,800" },
    { name: "Risotto Poulet Champignon", price: "34,500" },
    { name: "Risotto Façon Chef", price: "43,400", desc: "(fruits de mer, filet de poisson)" }
  ],
  "LASAGNES & OMELETTES": [
    { name: "Lasagne Bolognaise", price: "26,800" },
    { name: "Lasagne Fruits de Mer", price: "32,400", desc: "(sauce blanche et rouge)" },
    { name: "Lasagne Poulet", price: "24,600", desc: "(sauce blanche)" },
    { name: "Omelette Végétale", price: "14,500", desc: "(oignon, poivron, tomate, champignon)" },
    { name: "Omelette Thon Fromage", price: "16,800", desc: "(thon, fromage)" }
  ]
}

// Category images mapping
const categoryImages = {
  "ŒUFS BÉNÉDICTE": "🥚",
  "PETIT-DÉJ": "☕",
  "BRUNCH": "🥐", 
  "CRÊPE & GAUFFRE": "🥞",
  "PAIN CAKE": "🍰",
  "BUBBLE WAFFLE": "🧇",
  "CRÊPE FOURRÉE": "🌯",
  "CRÊPE SALÉE": "🥙",
  "HAMBURGER": "🍔",
  "GLACES": "🍨",
  "MENU ENFANT": "🎈",
  "PÂTES": "🍝",
  "LASAGNES & OMELETTES": "🍳"
}

export default function MenuPage(){
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const categories = Object.keys(menuData)
  const currentItems = selectedCategory ? menuData[selectedCategory] || [] : []

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setIsLoading(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsLoading(false)
    }, 300)
  }

  // Function to go back to categories
  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with bigger cover */}
      <header className="relative">
        <div 
          className="relative h-60 md:h-72 lg:h-80 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/cover.jpg?v=2')",
          }}
        >
          {/* Professional overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
          
          {/* Header Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top bar with back button */}
            <div className="flex items-center justify-between p-4">
              <a 
                href="/" 
                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm hover:bg-white transition-all shadow-lg border border-white/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Retour
              </a>
              
              {selectedCategory && (
                <button 
                  onClick={handleBackToCategories}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-lg text-sm text-white hover:bg-blue-700 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Catégories
                </button>
              )}
            </div>
            
            {/* Center content */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img 
                    src="/assets/saphir.jpg?v=2" 
                    alt="Le Saphir Bleu Profile" 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shadow-xl border-4 border-white" 
                  />
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl shadow-lg">
                    <img 
                      src="/assets/icon.png" 
                      alt="Menu Icon" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {selectedCategory ? selectedCategory : "Notre Menu"}
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                  {selectedCategory ? "Sélectionnez votre plat" : "Le Saphir Bleu"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          /* Categories Grid View */
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Nos Catégories</h2>
              <p className="text-slate-600">Choisissez une catégorie pour voir nos délicieux plats</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category}
                  className="opacity-0 animate-fadeInUp"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <CategoryCard
                    category={category}
                    onClick={() => handleCategorySelect(category)}
                    image={categoryImages[category]}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Items View for Selected Category */
          <div>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-3 border-blue-600 border-t-transparent"></div>
                  <span className="text-slate-600 font-medium">Chargement...</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-4xl">{categoryImages[selectedCategory]}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{selectedCategory}</h2>
                  </div>
                  <p className="text-slate-600">{currentItems.length} plats disponibles</p>
                </div>
                
                <div className="grid gap-4 md:gap-6">
                  {currentItems.map((item, index) => (
                    <div
                      key={`${selectedCategory}-${index}`}
                      className="opacity-0 animate-fadeInUp"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <Item
                        name={item.name}
                        price={item.price}
                        desc={item.desc}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}