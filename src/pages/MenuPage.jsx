import React, { useState, useMemo, useRef, useEffect } from 'react'

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

function CategoryCard({ category, onClick, image, itemCount, isSelected }){
  return (
    <div 
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onMouseLeave={() => {
        // Force remove any stuck hover states
        if (document.activeElement === document.body) return;
        document.activeElement?.blur();
      }}
      tabIndex={0}
      role="button"
      aria-label={`Voir les plats de la catégorie ${category}`}
      className={`group relative overflow-hidden rounded-2xl bg-white border transition-all duration-400 cursor-pointer transform focus:outline-none ${
        isSelected 
          ? 'border-blue-400 ring-2 ring-blue-200 shadow-xl scale-[1.01]' 
          : 'border-slate-200/50 hover:border-blue-300/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-md hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1'
      }`}
    >
      {/* Horizontal Layout: Image Left, Text Right */}
      <div className="flex items-center h-28">
        {/* Left Side - Image */}
        <div className="w-28 h-28 flex-shrink-0 relative">
          <img 
            src={image || '/assets/cover.jpg'} 
            alt={category}
            className="w-full h-full object-cover rounded-l-2xl transition-transform duration-400 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 rounded-l-2xl"></div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className="flex-1 p-5 pl-4">
          <div className="flex flex-col justify-center h-full">
            <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 text-xl mb-2 leading-tight">
              {category}
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/30">
                {itemCount} plats disponibles
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <span>Découvrir les plats</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/8 group-hover:via-indigo-600/6 group-hover:to-purple-600/4 transition-all duration-400 rounded-2xl"></div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-400 rounded-2xl"></div>
    </div>
  )
}

const menuData = {
  "Entrée froide": [
    { name: "Salade César (poulet, parmesan)", price: "21.600" },
    { name: "Salade César aux crevettes (crevette, parmesan)", price: "24.300" },
    { name: "Salade niçoise", price: "19.200" },
    { name: "Salade méditerranéenne au fruit de mer", price: "28.600", desc: "(Sèche, crevette, moule, calamar)" },
    { name: "Salade de poulpe façon chef", price: "29.400" }
  ],

  "Entrée chaude": [
    { name: "Brik au thon garnie avec salade et frites", price: "11.400" },
    { name: "Brik aux crevettes garnie avec salade et frites", price: "12.600" },
    { name: "Crevette sautée à l’ail", price: "28.400" },
    { name: "Gratin fruit de mer", price: "26.000" },
    { name: "Ojja merguez", price: "24.000" },
    { name: "Ojja aux crevettes", price: "29.200" }
  ],

  "Oeufs Bénédicte": [
    { name: "Œufs bénédicte au jambon", price: "9.800", desc: "(Pain tartiné, jambon, œuf poché, fromage fondu)" },
    { name: "Œufs bénédicte au saumon", price: "14.800", desc: "(Pain tartiné, saumon, œuf poché, fromage fondu)" }
  ],

  "Petit-déj": [
    { name: "Beau matin", price: "14.900", desc: "Café, mini jus, eau, viennoiserie, beurre, confiture, omelette fromage" },
    { name: "Business Women", price: "28.400", desc: "Café, eau, mini jus, viennoiserie, fruit coupé, crêpe, waffle chocolat, gâteau, cheese cake, charcuterie, beurre, confiture, miel, nutella" },
    { name: "Business Men", price: "35.400", desc: "Café, mini jus, eau, pains maison, croque monsieur, charcuterie, poulet assorti, omelette, crêpe fourrée escalope, pizza, harissa, huile d’olive, olives" },
    { name: "Healthy", price: "29.400", desc: "Lait détox, chia pudding, omelette blanc d'œuf, toasts, pain cake au miel, pains perdus, fruits" }
  ],

  "Brunch": [
    { name: "Brunch Saphir Bleu", price: "62.800", desc: "2 cafés, mini jus, eau, viennoiserie, 2 jwajem, crêpe, waffle, brownies, cookies, omelette, ojja, crêpe fourrée, charcuterie, poulet, pizza, miel, confiture" },
    { name: "Duo sucré-salé", price: "38.600", desc: "Café, mini jus, eau, viennoiserie, poulet, omelette, crêpe, pancake, miel, confiture" }
  ],

  "Pasta Italien": [
    { name: "Rigattoni Trois Saveurs", price: "36.400", desc: "Courgette, tomate séchée, crevette, parmesan" },
    { name: "Rigattoni Forestière", price: "31.600", desc: "Poulet, champignon, parmesan" },
    { name: "Ravioli Crevette Saumon", price: "34.500" },
    { name: "Ravioli 4 Fromages", price: "28.800" },
    { name: "Ravioli Ricotta Épinard", price: "26.200" },
    { name: "Ravioli Ricotta Parmesan", price: "27.300" },
    { name: "Ravioli au Truffe", price: "36.700" },
    { name: "Ravioli aux Crevettes", price: "37.300" },
    { name: "Risotto crevette champignon", price: "38.400" },
    { name: "Risotto fruit de mer", price: "42.800" },
    { name: "Risotto poulet champignon", price: "34.500" },
    { name: "Risotto façon chef", price: "43.400", desc: "Fruit de mer, filet de poisson" },
    { name: "Pasta Alfredo", price: "25.700", desc: "Poulet, champignon" },
    { name: "Pasta Carbonara", price: "23.200" },
    { name: "Pasta crevette champignon", price: "32.400" },
    { name: "Pasta Bolognaise", price: "26.400" },
    { name: "Pasta fruit de mer", price: "37.400" },
    { name: "Pasta 4 fromages", price: "26.300" },
    { name: "Pasta Norvégienne", price: "33.600", desc: "Crevette, saumon" }
  ],

  "Les Lasagnes": [
    { name: "Lasagne Bolognaise", price: "26.800" },
    { name: "Lasagne fruit de mer", price: "32.400", desc: "Sauce rouge, sauce blanche" },
    { name: "Lasagne poulet", price: "24.600" }
  ],

  "Les Omelettes": [
    { name: "Omelette à l’Espagnole", price: "14.500", desc: "(Oignon, poivron, tomate, champignon)" },
    { name: "Omelette Thon Fromage", price: "16.800" },
    { name: "Omelette jambon Fromage", price: "15.900" }
  ],

  "Pizza Sauce Blanche": [
    { name: "Angel", price: "21.400", desc: "Sauce blanche, mozzarella fraiche, pepperoni, olive, pomme de terre" },
    { name: "Florentine", price: "25.900", desc: "Sauce blanche, mozzarella fraiche, escalope grillée, ricotta, épinard, olive" },
    { name: "4 Fromages", price: "26.000", desc: "Sauce blanche, Mozzarella fraiche, edam, gruyère, roquefort, parmesan" },
    { name: "Mia-more", price: "29.300", desc: "Sauce Blanche, Mozzarella, courgette, crevettes" },
    { name: "Al Fonso", price: "33.400", desc: "Sauce blanche, Mozzarella fraiche, Saumon fumé, crevettes" }
  ],

  "Pizza Sauce Rouge": [
    { name: "Margherita", price: "17.400", desc: "(Sauce tomato, mozzarella fraiche, basilic, huile d’olive)" },
    { name: "Diavola", price: "21.300", desc: "Sauce tomato, Mozzarella, viande hachée, pepperoni, harissa" },
    { name: "Thon", price: "22.500", desc: "(Sauce tomato, mozzarella fraiche, thon, basilic, huile d’olive)" },
    { name: "Capricciosa", price: "23.800", desc: "Mozzarella, oignon, poivron, champignon, jambon fumé, artichaut, tomate" },
    { name: "Al Polo", price: "24.500", desc: "Escalope grillée, oignon, olive" },
    { name: "Fruits de mer", price: "34.200" }
  ],

  "Volaille": [
    { name: "Escalope Mili-Melo", price: "23.400", desc:"(Escalope de poulet pané + Escalope de poullet grillée)" },
    { name: "Suprême panée aux amandes", price: "24.700" },
    { name: "Pilon pané au fromage", price: "26.400" },
    { name: "Cordon Bleu Tagliatelle", price: "28.700" },
    { name: "Ballotine Ricotta Épinard", price: "27.400" },
    { name: "Suprême de poulet sauce au choix", price: "26.400", desc:"(CChampignon, poivre, parmesan, Roquefort)" },
    { name: "Mille-feuille Chicken Gambas", price: "28.800",desc:"(Mille-feuille d'escalope farcie aux crevettes)" },
    { name: "Escalope Normandie", price: "29.600", desc: "(Crevette, saumon, sauce crustacée)" },
    { name: "Chicken Crispy sauce chili", price: "26.400" }
  ],

  "Viande Rouge": [
    { name: "Filet de Bœuf sauce au choix", price: "52.800", desc: "Champignon, poivre, roquefort, parmesan" },
    { name: "Émincé de Bœuf Stroganoff", price: "44.900" },
    { name: "Côte à l’os maturée", price: "50.900" },
    { name: "Côtelettes d’agneau", price: "52.400" },
    { name: "Grillade chasseur", price: "57.800", desc: "(Cotelette, fois d'agneau ,merguez, Brochette de poulet, steak)" }
  ],

  "Poisson et Fruit de Mer": [
    { name: "Complet de poisson", price: "32.500" },
    { name: "Filet de reine", price: "43.400" },
    { name: "Pavé de Saumon Toscana", price: "47.200" },
    { name: "Trésor de fruit de mer", price: "96.800" },
    { name: "Marmite pêcheur", price: "62.400" },
    { name: "Crevette Royale", price: "42.700" }
  ],

  "Tacos": [
    { name: "Escalope poulet grillée (XL)", price: "14.600" },
    { name: "Cordon bleu (XL)", price: "14.900" },
    { name: "Escalope panée (XL)", price: "14.800" },
    { name: "Chawarma poulet (XL)", price: "15.200" },
    { name: "Escalope grillée + panée (XXL)", price: "16.800" },
    { name: "Escalope grillée + cordon bleu (XXL)", price: "16.800" },
    { name: "Escalope panée + cordon bleu (XXL)", price: "16.800" },
    { name: "Escalope grillée + chawarma (XXL)", price: "16.900" }
  ],

  "Penazzo": [
    { name: "Thon", price: "15.900" },
    { name: "Escalope panée", price: "16.700" },
    { name: "Escalope grillée", price: "15.800" },
    { name: "Escalope cordon bleu", price: "17.200" }
  ],

  "Crêpe & Gaufre": [
    { name: "Nutella", price: "15.000" },
    { name: "Nutella-Oréo", price: "16.000" },
    { name: "Spéculose", price: "16.000" },
    { name: "Nutella fruits secs", price: "16.500" },
    { name: "Nutella banane", price: "17.000" },
    { name: "Kinder Bueno", price: "19.000" },
    { name: "Nutella Snickers", price: "19.000" },
    { name: "Saphir Bleu", price: "31.000" }
  ],

  "Pain Cake": [
    { name: "Nutella", price: "16.000" },
    { name: "Spéculose", price: "17.000" },
    { name: "Nutella banane", price: "18.000" },
    { name: "Nutella fruits secs", price: "19.000" },
    { name: "Kinder", price: "19.000" },
    { name: "Snickers", price: "19.000" },
    { name: "Nutella banane fruits secs", price: "22.500" },
    { name: "Saphir Bleu", price: "32.500" }
  ],

  "Dessert": [
    { name: "Fondant chocolat", price: "11.500" },
    { name: "Gâteau du jour", price: "13.000" },
    { name: "Fondant pistache", price: "13.500" },
    { name: "Cheesecake", price: "14.500" },
    { name: "Saint Sébastien", price: "17.500" },
    { name: "Assiette de fruits", price: "25.000" },
    { name: "Tapas sucrés", price: "45.000" }
  ],

  "Boissons Froides": [
    { name: "Eau 1L", price: "3.400" },
    { name: "Gazifier 1L", price: "3.700" },
    { name: "Eau 0.5L", price: "2.000" },
    { name: "Canette", price: "4.300" },
    { name: "Schweppes", price: "6.300" },
    { name: "Énergétique", price: "10.500" }
  ],

  "Chocolats Chauds": [
    { name: "Chocolat au lait", price: "3.800" },
    { name: "Classique", price: "8.000" },
    { name: "Nutella banane", price: "11.500" },
    { name: "Nutella fruits secs", price: "13.500" },
    { name: "Spéculose biscuit", price: "14.000" },
    { name: "Kinder Oreo", price: "14.500" },
    { name: "Ferrero Noisette", price: "15.000" }
  ],

  "Ice (Glacé)": [
    { name: "Caramel", price: "12.000" },
    { name: "Nutella", price: "12.000" },
    { name: "Coco fruits secs", price: "13.500" },
    { name: "Kinder Banane", price: "13.700" },
    { name: "Oréo chocolat blanc", price: "14.000" },
    { name: "Ferrero gaufre", price: "14.500" }
  ],

  "JwaJem": [
    { name: "Baklawa", price: "17.000" },
    { name: "Azur", price: "18.000" },
    { name: "Le Saphir Bleu", price: "26.000" }
  ],

  "Thés": [
    { name: "Pêche glacé", price: "14.800" },
    { name: "Passion glacé", price: "14.400" },
    { name: "Lémen", price: "14.300" },
    { name: "Framboise", price: "14.300" },
    { name: "Saphir Bleu", price: "17.800" },
    { name: "Thé à la menthe", price: "3.800" },
    { name: "Infusion verveine", price: "4.000" },
    { name: "Thé aux amandes", price: "6.800" },
    { name: "Thé au pignon", price: "8.800" }
  ],

  "Jus Classiques": [
    { name: "Orange", price: "6.000" },
    { name: "Citron", price: "6.500" },
    { name: "Fraise", price: "8.000" },
    { name: "Banane", price: "9.000" }
  ],

  "Jus Combinés": [
    { name: "Orange Banane", price: "9.000" },
    { name: "Fraise Banane", price: "10.500" },
    { name: "Kiwi Banane", price: "14.000" },
    { name: "Citron amande", price: "11.500" },
    { name: "Datte Banane", price: "10.500" },
    { name: "Cocktail Fruits", price: "13.000" }
  ],

  "Cocktails": [
    { name: "Maitai", price: "15.800" },
    { name: "Miami", price: "15.800" },
    { name: "Punchi", price: "15.800" },
    { name: "Mimosa", price: "15.800" },
    { name: "Framboise", price: "15.800" },
    { name: "Crazy", price: "14.300" },
    { name: "Hawaï", price: "15.800" },
    { name: "Océan", price: "16.300" },
    { name: "Turbo", price: "18.900" }
  ],

  "Mojitos": [
    { name: "Virgin", price: "12.500", desc: "(citron, menthe, glacon, mojito, gingembre)" },
    { name: "Red Label", price: "15.500", desc: "(citron, menthe, glacon, mojito, fruit rouges, gingembre)" },
    { name: "Blue Lagona", price: "16.500", desc: "(bleu berry, noix de coco, citron, menthe, bleu coraco)" },
    { name: "Summer", price: "18.500", desc: "(citron, menthe, mojito, pastéque)" },
    { name: "Midori", price: "18.500", desc: "(citron, menthe, glacon, mojito, midori)" },
    { name: "V.I.P", price: "22.000", desc: "(citron, menthe, fruit saisons, mojito, gingembre, boisson énergétique)" },
    { name: "Saphir Bleu (2 pers.)", price: "31.000" }
  ],

  "Smoothies": [
    { name: "Classique", price: "15.500", desc: "(Mangue, ananas, fraise, ...)" },
    { name: "Exotique", price: "16.500", desc: "(Mangue, ananas)" },
    { name: "Tropical", price: "16.500", desc: "(Kiwi, noix de coco)" },
    { name: "Bubble Gum", price: "16.500", desc: "(Ananas, buble)" },
    { name: "Black Ice", price: "16.500", desc: "(Lychée, Myrtil)" },
    { name: "Summer", price: "16.500", desc: "(Pastéque, Melon)" }
  ],

  "Frappuccinos": [
    { name: "Caramel banane", price: "16.500" },
    { name: "Pistache", price: "17.500" },
    { name: "Nutella fruits secs", price: "18.500" },
    { name: "Noisette Ferrero", price: "18.500" },
    { name: "Oréo chocolat", price: "18.500" },
    { name: "Kinder chocolat blanc", price: "18.500" }
  ],

  "Cafés": [
    { name: "Expresso grain", price: "3.500" },
    { name: "Capucin grain", price: "3.800" },
    { name: "Café crème grain", price: "4.000" },
    { name: "Cappuccino grain", price: "6.500" },
    { name: "Expresso Dolce Gusto", price: "5.800" },
    { name: "Capucin Dolce Gusto", price: "6.800" },
    { name: "Crème Dolce Gusto", price: "7.000" },
    { name: "Cappuccino Dolce Gusto", price: "8.500" },
    { name: "Affogato Nutella", price: "10.400" },
    { name: "Affogato Oréo amande", price: "10.600" },
    { name: "Affogato Caramel Noisette", price: "11.000" },
    { name: "Affogato Pistache", price: "11.800" },
    { name: "Ice Latte Oréo", price: "12.500" },
    { name: "Ice Latte Nutella", price: "12.700" },
    { name: "Ice Latte Noisette", price: "13.500" },
    { name: "Ice Latte Caramel", price: "13.700" }
  ],

  "Chicha": [
    { name: "Fakher Kaloud", price: "10.000" },
    { name: "Adalya Kaloud", price: "12.000" },
    { name: "Chicha glaçon fruits", price: "36.000" },
    { name: "Saphir Bleu", price: "60.000", desc: "Fruits, eau 1L, 2 mojitos, pâtisserie tunisienne, 2 chichas" }
  ],

  "Menu Enfant": [
    { name: "Mickey Mouse", price: "14.300", desc: "Nuggets, soda, frites, œuf surprise, riz" },
    { name: "Tom & Jerry", price: "15.400", desc: "Escalope panée, soda, frites, riz" },
    { name: "Sponge Bob", price: "16.200", desc: "Mini pizza, soda, frites, œuf surprise" },
    { name: "Hello Kitty", price: "13.800", desc: "Mini tacos, soda, frites, œuf surprise" }
  ],

  "Spécialités Saphir Bleu": [
    { name: "Paella Royale", price: "86.700" },
    { name: "Couscous au fruit de mer", price: "37.400" },
    { name: "Couscous au mérou", price: "42.800" },
    { name: "Couscous Royale", price: "44.200", desc: "(Agneau, merguez, poulet, œuf)" },
    { name: "Symphonie Volaille", price: "96.200", desc: "Escalope sauce champignon, grillé, pané, brochette poulet, cordon bleu, pilon pané, Alfredo, salade césar, frites" },
    { name: "Bateau Pirate", price: "140.000", desc: "Crevette, poulpe, sèche, calamars, filet poisson pané, amandes, moule marinée, fruits de mer sautés, tempura crevettes, frites, pâte aux crevettes" }
  ]
};


// Category images mapping using local files from public/assets
const categoryImages = {
  "Entrée froide": "/assets/entreefroid.webp",
  "Entrée chaude": "/assets/entreechaud.webp",

  "Oeufs Bénédicte": "/assets/oeufs.webp",
  "Petit-déj": "/assets/petitdej.webp",
  "Brunch": "/assets/brunch.jpg",

  "Pasta Italien": "/assets/pastaitalien.jpg",
  "Les Lasagnes": "/assets/lasagne.png",
  "Les Omelettes": "/assets/lesomlettes.webp",

  "Pizza Sauce Blanche": "/assets/pizzablanche.png",
  "Pizza Sauce Rouge": "/assets/pizzarouge.webp",

  "Volaille": "/assets/volaille.webp",
  "Viande Rouge": "/assets/vianderouge.webp",
  "Poisson et Fruit de Mer": "/assets/poisoon.webp",

  "Tacos": "/assets/tacos.webp",
  "Penazzo": "/assets/pennazo.webp",

  "Crêpe & Gaufre": "/assets/crepes.webp",
  "Pain Cake": "/assets/paincake.webp",
  "Dessert": "/assets/fruity.webp",

  "Boissons Froides": "/assets/boissanfroid.jpg!d",
  "Chocolats Chauds": "/assets/chocolatchaud.webp",
  "Ice (Glacé)": "/assets/glaces.webp",
  "JwaJem": "/assets/jwajem.webp",

  "Thés": "/assets/thes.webp",
  "Jus Classiques": "/assets/jusclassiques.webp",
  "Jus Combinés": "/assets/juscombiner.webp",

  "Cocktails": "/assets/cocktail.webp",
  "Mojitos": "/assets/mojitos.webp",

  "Smoothies": "/assets/smoothie.webp",
  "Frappuccinos": "/assets/frapuccino.webp",

  "Cafés": "/assets/café.jpg",
  "Chicha": "/assets/chicha.webp",

  "Menu Enfant": "/assets/menuenfant.webp",

  // keep the specialité key name unchanged as requested
  "Spécialités Saphir Bleu": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",

  // fallback for categories not explicitly mapped
  default: "/assets/cover.jpg"
};



export default function MenuPage(){
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const pendingScrollRef = useRef(null)

  // helper to create safe ids for DOM elements; identifier can be index or item name
  const makeId = (category, identifier) => {
    const clean = (str = '') => str.toString().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-]/g, '')
    return `menuitem-${clean(category)}-${clean(identifier ?? '')}`
  }

  // Normalize string: remove accents/diacritics and lowercase for robust search
  const normalizeStr = (s = '') =>
    s
      .toString()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()

  // open a category and optionally scroll to a specific item (index or name)
  const openCategory = (category, itemIndex = null) => {
    // determine an itemName if an index was provided so the scroll target remains stable
    let itemName = null
    if (itemIndex !== null && itemIndex !== undefined) {
      if (typeof itemIndex === 'number') {
        itemName = menuData[category]?.[itemIndex]?.name ?? null
      } else {
        itemName = itemIndex // assume it's a name string
      }
    }
    // set pending scroll so effect can execute after render
    pendingScrollRef.current = { category, itemName }
    // clear any active search when opening a category
    setSearchTerm('')
    setIsLoading(true)
    setTimeout(() => {
      setSelectedCategory(category)
      // push a history entry so browser Back returns to categories view
      try {
        window.history.pushState({ category }, '', `?category=${encodeURIComponent(category)}`)
      } catch (e) {}
      setIsLoading(false)
    }, 200)
  }

  // when selectedCategory changes, if there's a pending scroll for it, scroll to the element
  useEffect(() => {
    const pending = pendingScrollRef.current
    if (!pending) return
    if (pending.category !== selectedCategory) return

    const id = makeId(pending.category, pending.itemName ?? '')
    // wait a tick for the DOM to render
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      pendingScrollRef.current = null
    }, 250)
  }, [selectedCategory])

  // Prefer showing beverages first (Cafés, Boissons Froides, Thés, Jus, Mojitos, Frappuccinos, etc.) then the rest
  const categories = (() => {
    const preferred = [
      "Cafés",
      "Boissons Froides",
      "Thés",
      "Jus Classiques",
      "Jus Combinés",
      "Mojitos",
      "Frappuccinos",
      "Smoothies",
      "Cocktails",
      "Chocolats Chauds",
      "Ice (Glacé)"
    ]
    const all = Object.keys(menuData)
    const set = new Set(preferred)
    const ordered = preferred.filter((c) => all.includes(c))
    const rest = all.filter((c) => !set.has(c))
    return [...ordered, ...rest]
  })()
  const currentItems = selectedCategory ? menuData[selectedCategory] || [] : []

  // Helper to parse numeric price from price strings like "15 DH" or "9,50 DH"
  const parsePrice = (p) => {
    if (p == null) return Infinity
    if (typeof p === 'number') return p
    const s = String(p).replace(',', '.').replace(/[^0-9.]/g, '')
    const n = parseFloat(s)
    return Number.isNaN(n) ? Infinity : n
  }

  // Sorted items in current category by price (min -> max)
  const sortedItems = selectedCategory
    ? [...(menuData[selectedCategory] || [])].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    : []

  // Build search results from menuData when user types
  const searchResults = useMemo(() => {
    const q = normalizeStr((searchTerm || '').trim())
    if (!q) return []

    const results = []
    Object.entries(menuData).forEach(([category, items]) => {
      const categoryKey = normalizeStr(category || '')
      const categoryMatches = categoryKey.includes(q)

      const matching = (items || []).filter(it => {
        const name = normalizeStr(it.name || '')
        const desc = normalizeStr(it.desc || '')
        return name.includes(q) || desc.includes(q)
      })

      if (matching.length || categoryMatches) {
        // if category matches but no specific matching items, show the first few items as preview
        const previewItems = matching.length ? matching : (items || []).slice(0, 6)
        results.push({ category, image: categoryImages[category] || categoryImages.default, items: previewItems, categoryMatches })
      }
    })

    return results
  }, [searchTerm])

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    // clear any active search when selecting a category from the grid
    setSearchTerm('')
    setIsLoading(true)
    // Scroll to top of page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      setSelectedCategory(category)
      try {
        window.history.pushState({ category }, '', `?category=${encodeURIComponent(category)}`)
      } catch (e) {}
      setIsLoading(false)
    }, 300)
  }

  // Function to go back to categories
  const handleBackToCategories = () => {
    // prefer navigating back in history if possible (keeps native Back behavior)
    try {
      const st = window.history.state
      if (st && typeof st.category !== 'undefined') {
        // go back to previous history state
        window.history.back()
        return
      }
    } catch (e) {}
    setSelectedCategory(null)
    // Clear any active focus states
    if (document.activeElement && document.activeElement !== document.body) {
      document.activeElement.blur()
    }
    // Scroll to top when going back to categories
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Manage browser history/popstate so Back/Forward toggles category view
  useEffect(() => {
    // On mount, initialize base state and open category from URL if present
    try {
      const params = new URLSearchParams(window.location.search)
      const initialCategory = params.get('category')
      window.history.replaceState({ category: initialCategory || null }, '', window.location.pathname + (initialCategory ? `?category=${encodeURIComponent(initialCategory)}` : ''))
      if (initialCategory) {
        setSelectedCategory(initialCategory)
      }
    } catch (e) {}

    const onPop = (e) => {
      const state = e.state
      if (state && typeof state.category !== 'undefined') {
        setSelectedCategory(state.category)
      } else {
        // fallback: parse URL
        try {
          const params = new URLSearchParams(window.location.search)
          const c = params.get('category')
          setSelectedCategory(c)
        } catch (err) {
          setSelectedCategory(null)
        }
      }
    }

    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      {/* Header with bigger cover */}
      <header className="relative">
        <div 
          className={`relative ${selectedCategory ? 'h-72 md:h-80 lg:h-96' : 'h-60 md:h-72 lg:h-80'} bg-cover bg-center`}
          style={{
            backgroundImage: selectedCategory ? `url('${categoryImages[selectedCategory] || '/assets/cover.jpg'}')` : "url('/assets/cover.jpg?v=2')",
          }}
        >
          {/* Professional overlay - stronger when category selected for readability */}
          <div className={`absolute inset-0 ${selectedCategory ? 'bg-gradient-to-b from-black/40 via-black/50 to-black/60' : 'bg-gradient-to-b from-black/30 via-black/40 to-black/60'}`}></div>
          
          {/* Header Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top bar with navigation buttons */}
            <div className="flex items-center justify-between p-4">
              {!selectedCategory ? (
                // Show "Retour" button when on main page (categories view)
                <a 
                  href="/" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm hover:bg-white transition-all shadow-lg border border-white/50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour
                </a>
              ) : (
                // Show "Catégories" button on the LEFT when in a category
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
              
              {/* Empty div to maintain flex spacing */}
              <div></div>
            </div>
            
            {/* Center content */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="text-center w-full">
                {/* header uses large cover image; small logo removed to keep cover-only */}
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
      <main className="container mx-auto px-4 py-12">
        {/* Search bar - searches across all plats and shows category images in results */}
        {!selectedCategory && (
          <div className="max-w-4xl mx-auto mb-8">
            <label className="relative block">
              <span className="sr-only">Rechercher un plat</span>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Rechercher un plat, ingrédient ou description..."
                className="w-full py-3 px-4 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-100 hover:bg-slate-200 rounded-full p-2 text-sm"
                  aria-label="Effacer la recherche"
                >
                  ✕
                </button>
              )}
            </label>
          </div>
        )}

        {/* If there is a search term, show smart results */}
        {searchTerm.trim() !== '' && (
          <div className="max-w-6xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4">Résultats pour "{searchTerm}"</h3>
            {searchResults.length === 0 ? (
              <p className="text-slate-600">Aucun plat trouvé.</p>
            ) : (
              <div className="grid gap-4">
                {searchResults.map((group) => (
                  <div key={group.category} className="bg-white rounded-2xl border p-4 shadow-sm">
                    <div className="flex items-center gap-4 mb-3 cursor-pointer" onClick={() => openCategory(group.category)}>
                      <img src={group.image || '/assets/cover.jpg'} alt={group.category} className="w-20 h-20 object-cover rounded-lg shadow" />
                      <div>
                        <h4 className="font-bold text-lg">{group.category} {group.categoryMatches && <span className="ml-2 text-sm text-blue-600">(catégorie)</span>}</h4>
                        <p className="text-sm text-slate-500">{group.items.length} résultat(s)</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {group.items.map((it, i) => (
                        <div key={`${group.category}-${i}`} className="flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded" onClick={() => openCategory(group.category, i)}>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-4">
                              <h5 className="font-semibold text-slate-900">{it.name}</h5>
                              <div className="text-sm font-bold text-blue-700">{it.price} DT</div>
                            </div>
                            {it.desc && <p className="text-sm text-slate-600">{it.desc}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {!selectedCategory ? (
          /* Categories Grid View */
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4">Nos Catégories</h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">Découvrez notre sélection de plats authentiques et savoureux, préparés avec passion</p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                    itemCount={menuData[category]?.length || 0}
                    isSelected={false}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Items View for Selected Category */
          <div>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
                  <div className="absolute inset-0 animate-pulse rounded-full bg-blue-100/20"></div>
                </div>
                <p className="mt-4 text-slate-600 font-medium animate-pulse">Chargement du menu...</p>
                <p className="mt-1 text-sm text-slate-400">Préparation de vos délicieux plats</p>
              </div>
            ) : (
              <div>
                {/* category title is shown in the header cover; remove duplicate title here */}
                
                <div className="grid gap-4 md:gap-6">
                  {sortedItems.map((item, index) => (
                    <div
                        id={makeId(selectedCategory, item.name)}
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