"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[533],{533:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var r=s(43),a=s(269),n=s(579);const i=()=>{const{cartItems:e,updateItemQuantity:t,removeFromCart:s,clearCart:i}=(0,r.useContext)(a.M),[l,c]=(0,r.useState)(!1),d=e.reduce(((e,t)=>e+t.price*t.quantity),0);return(0,n.jsxs)("div",{className:"bg-background text-foreground p-4 min-h-screen pt-20",children:[l&&(0,n.jsx)("div",{className:"fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg",children:"Commande ajout\xe9e au panier !"}),(0,n.jsx)("h1",{className:"text-3xl font-bold text-purple mb-6 text-center",children:"Votre Panier"}),0===e.length?(0,n.jsx)("p",{className:"text-center",children:"Votre panier est vide."}):(0,n.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,n.jsxs)("table",{className:"w-full mb-6",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"text-left",children:"Produit"}),(0,n.jsx)("th",{className:"text-right",children:"Prix"}),(0,n.jsx)("th",{className:"text-center",children:"Quantit\xe9"}),(0,n.jsx)("th",{className:"text-right",children:"Total"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:e.map((e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.title}),(0,n.jsxs)("td",{className:"text-right",children:[e.price,"\u202f\u20ac"]}),(0,n.jsxs)("td",{className:"text-center",children:[(0,n.jsx)("button",{onClick:()=>t(e.id,e.quantity-1),className:"bg-gray-700 text-white px-2 py-1 rounded-l",children:"-"}),(0,n.jsx)("span",{className:"px-2",children:e.quantity}),(0,n.jsx)("button",{onClick:()=>t(e.id,e.quantity+1),className:"bg-gray-700 text-white px-2 py-1 rounded-r",children:"+"})]}),(0,n.jsxs)("td",{className:"text-right",children:[e.price*e.quantity,"\u202f\u20ac"]}),(0,n.jsx)("td",{className:"text-right",children:(0,n.jsx)("button",{onClick:()=>s(e.id),className:"text-red-500",children:"Supprimer"})})]},e.id)))})]}),(0,n.jsx)("div",{className:"text-right mb-6",children:(0,n.jsxs)("p",{className:"text-xl font-bold",children:["Total : ",d,"\u202f\u20ac"]})}),(0,n.jsxs)("div",{className:"flex justify-end space-x-4",children:[(0,n.jsx)("button",{onClick:i,className:"bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-150 active:scale-95 focus:outline-none focus:ring focus:ring-purple-300",children:"Vider le Panier"}),(0,n.jsx)("button",{onClick:async()=>{c(!0),setTimeout((()=>c(!1)),2e3)},className:"bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-150 active:scale-95 focus:outline-none focus:ring focus:ring-purple-300",children:"Proc\xe9der au Paiement"})]})]})]})}}}]);
//# sourceMappingURL=533.a4c875d2.chunk.js.map