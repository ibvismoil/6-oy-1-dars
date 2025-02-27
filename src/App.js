import React from "react";
import './App.css';

// === 1-misol ===


// const Greeting = ({ isLoggedIn }) => {
//   return (
//     <div className="text-center text-xl font-semibold p-4">
//       {isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Greeting isLoggedIn={fal} />
//     </div>
//   );
// }

// export default App;



// === 2-misol ===


// const Product = ({ product }) => {
//   return (
//     <div className="text-center text-xl font-semibold p-4">
//       {`Mahsulot: ${product.name}, Narxi: ${product.price} so'm`}
//     </div>
//   );
// };

// const Greeting = ({ isLoggedIn }) => {
//   return (
//     <div className="text-center text-xl font-semibold p-4">
//       {isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}
//     </div>
//   );
// };

// function App() {
//   const product = { name: "Telefon", price: 2500000 };
//   return (
//     <div>
//       <Greeting isLoggedIn={true} />
//       <Product product={product} />
//     </div>
//   );
// }

// export default App;

// let


// === 3-misol ===


// const Greeting = ({ isLoggedIn }) => (
//   <div className="text-center text-xl font-semibold p-4">
//     {isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}
//   </div>
// );

// const Product = ({ product }) => (
//   <div className="text-center text-xl font-semibold p-4">
//     {`Mahsulot: ${product.name}, Narxi: ${product.price} so'm`}
//   </div>
// );

// const CityList = ({ cities }) => (
//   <ul className="text-center text-lg p-4">
//     {cities.map((city, index) => <li key={index}>{city}</li>)}
//   </ul>
// );

// const MathOperations = ({ a, b }) => (
//   <div className="text-center text-lg p-4">
//     <p>{`Yig'indi: ${a + b}`}</p>
//     <p>{`Ayirma: ${a - b}`}</p>
//     <p>{`Ko'paytma: ${a * b}`}</p>
//     <p>{`Bo'linma: ${b ? (a / b).toFixed(2) : "Nolga bo‘lish mumkin emas"}`}</p>
//   </div>
// );

// function App() {
//   const product = { name: "Telefon", price: 2500000 };
//   const cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Andijon"];
//   const a = 10, b = 5;
  
//   return (
//     <div>
//       <Greeting isLoggedIn={true} />
//       <Product product={product} />
//       <CityList cities={cities} />
//       <MathOperations a={a} b={b} />
//     </div>
//   );
// }

// export default App;




// === 4,5-misol ===


// export default function MathOperations() {
//   let num1 = 0;
//   let num2 = 0;

//   function handleInputChange() {
//     num1 = Number(document.getElementById("num1").value);
//     num2 = Number(document.getElementById("num2").value);
//     document.getElementById("sum").textContent = `Yig‘indi: ${num1 + num2}`;
//     document.getElementById("diff").textContent = `Ayirma: ${num1 - num2}`;
//     document.getElementById("prod").textContent = `Ko‘paytma: ${num1 * num2}`;
//     document.getElementById("div").textContent = `Bo‘linma: ${num2 !== 0 ? (num1 / num2).toFixed(2) : "Bo‘linmaydi"}`;
//   }

//   return (
//     <div>
//       <h2 style={{ color: "blue", fontSize: "24px" }}>Matematika Amallari</h2>
//       <input id="num1" type="number" defaultValue={0} onInput={handleInputChange} />
//       <input id="num2" type="number" defaultValue={0} onInput={handleInputChange} />
//       <p id="sum" style={{ color: "red", fontSize: "18px" }}>Yig‘indi: 0</p>
//       <p id="diff" style={{ color: "green", fontSize: "18px" }}>Ayirma: 0</p>
//       <p id="prod" style={{ color: "purple", fontSize: "18px" }}>Ko‘paytma: 0</p>
//       <p id="div" style={{ color: "orange", fontSize: "18px" }}>Bo‘linma: Bo‘linmaydi</p>
//     </div>
//   );
// }



// === 6-misol ===

// const Product = ({ isAvailable }) => {
//     return (
//       <div>
//         {isAvailable && <p>Sotuvda mavjud</p>}
//       </div>
//     );
//   };

//   export default function App() {
//     return (
//       <div>
//         <Product isAvailable={true} />
//         <Product isAvailable={false} />
//       </div>
//     );
//   }
  


// === 7-misol ===

// const SubscriptionButton = ({ isSubscribed }) => {
//    return (
//      <button>
//        {isSubscribed ? "Obunani bekor qilish" : "Obuna bo‘lish"}
//      </button>
//    );
//  };

//  export default function App() {
//    return (
//      <div>
//        <SubscriptionButton isSubscribed={true} /> 
//        <br/>
//        <SubscriptionButton isSubscribed={false} />
//      </div>
//    );
//  }



// === 8-misol ===


// const Greeting = ({ lang }) => {
//    const greetings = {
//      uz: "Salom!",
//      en: "Hello!",
//      ru: "Привет!"
//    };
 
//    return <p>{greetings[lang] || "Hello!"}</p>;
//  };

//  export default function App() {
//    return (
//      <div>
//        <Greeting lang="uz" /> {}
//        <Greeting lang="en" /> {}
//        <Greeting lang="ru" /> {}
//        <Greeting lang="fr" /> {}
//      </div>
//    );
// }


// === 9-misol ===

// const NameList = ({ names }) => {
//     return (
//       <ul>
//         {names
//           .filter(name => name.length > 5) 
//           .map((name, index) => (
//             <li key={index}>{name}</li> 
//           ))}
//       </ul>
//     );
//   };export default function App() {
//     const names = ["Ali", "Sarvar", "Diyor", "Muhammad", "Nodirbek", "Aziz"];
//     return (
//       <div>
//         <h2>5 harfdan uzun ismlar:</h2>
//         <NameList names={names} />
//       </div>
//     );
//   }
  

//  === 10-misol ===

// const ImageDisplay = ({ imgUrl }) => {
//    return (
//      <div>
//        {imgUrl ? <img src={imgUrl} alt="Rasm" width="200" /> : <p>Rasm topilmadi</p>}
//      </div>
//    );
//  }; export default function App() {
//    return (
//      <div>
//        <h2>Rasm namunasi</h2>
//         <ImageDisplay imgUrl="data:image/png;base64,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" /> {}
//      </div>
//    );
//  }
  

// === 11-misol ===

// const StatusButton = ({ isActive }) => {
//    return (
//      <button style={{ backgroundColor: isActive ? "green" : "red", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
//        {isActive ? "Faol" : "Nofaol"}
//      </button>
//    );
//  };export default function App() {
//    return (
//      <div>
//        <h2>Tugma holati</h2>
//        <StatusButton isActive={true} />  {}
//        <StatusButton isActive={false} /> {}
//      </div>
//    );
//  }
  

// === 12-misol ===

// const UserInfo = ({ user }) => {
//     return (
//       <div>
//         <p>Ism: {user.firstName}</p>
//         <p>Familiya: {user.lastName}</p>
//         <p>Yosh: {user.age}</p>
//       </div>
//     );
//   }; export default function App() {
//     const user = {
//       firstName: "Ali",
//       lastName: "Karimov",
//       age: 25
//     };
  
//     return (
//       <div>
//         <h2>Foydalanuvchi ma‘lumotlari</h2>
//         <UserInfo user={user} />
//       </div>
//     );
//   }
  

// === 13-misol ===

const NumberCheck = ({ number }) => {
    return (
      <p>
        {number > 0 ? "Musbat raqam" : number < 0 ? "Manfiy raqam" : "Bu nol"}
      </p>
    );
  }; export default function App() {
    return (
      <div>
        <h2>Raqamni tekshirish</h2>
        <NumberCheck number={10} />  {}
        <NumberCheck number={-5} />  {}
        <NumberCheck number={0} />   {}
      </div>
    );
  }
  