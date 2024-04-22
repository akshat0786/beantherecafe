import React, { useEffect, useState } from "react";
import "./menu.css";

const Menu = () => {
  const [menuItem, setmenuItem] = useState();
  // const [menuItems, setmenuItems] = useState(second);
  useEffect(() => {
    const items = document.querySelectorAll(".item");

    function insertViewTransitionName() {
      items.forEach((item, i) => {
        item.style.viewTransitionName = `item-${i++}`;
      });
    }

    function updateBtn(btn) {
      document.querySelector(".active").classList.remove("active");
      btn.classList.add("active");
    }

    const resetMenu = () =>
      items.forEach((item) => item.classList.remove("hide"));

    function updateMenu(tag) {
      resetMenu();
      items.forEach((item) => {
        if (item.dataset.type !== tag && tag !== "all") {
          item.classList.add("hide");
        }
      });
    }

    function activate(e) {
      updateMenu(e.target.dataset.tag);
      updateBtn(e.target);
    }

    function init(e) {
      if (!e.target.matches("button")) return;
      insertViewTransitionName();
      !document.startViewTransition
        ? activate(e)
        : document.startViewTransition(() => activate(e));
    }

    window.addEventListener("click", init, false);
  });

  const MenuItems = [
    {
      type: "desserts",
      name: "Chocolate Ice Cream",
      description: "Creamy rich chocolate ice cream with a sprinkle ",
      imageUrl: "https://source.unsplash.com/W-p5xm_hGSw",
      price: 50,
    },
    {
      type: "drinks",
      name: "Classic Pilsner",
      description: "A pale lager with a crisp, refreshing taste",
      imageUrl: "https://source.unsplash.com/2uSnxq3M4GE",
      price: 70,
    },
    {
      type: "entries",
      name: "Pesto Pasta",
      description: "Freshly made Pesto pasta with sliced tomatoes",
      imageUrl: "https://source.unsplash.com/12eHC6FxPyg",
      price: 90,
    },
    {
      type: "entries",
      name: "Vegetarian Delight",
      description: "Cooked rice with quinoa salad, pinto beans",
      imageUrl: "https://source.unsplash.com/oYvZ-stypr4",
      price: 110,
    },
    {
      type: "apetizers",
      name: "House Salad",
      description: "Fresh local vegetables pair with homemade",
      imageUrl: "https://source.unsplash.com/xeTv9N2FjXA",
      price: 130,
    },
    {
      type: "entries",
      name: "Coconut Rice",
      description: "Indonesian coconut rice pair with fried pork",
      imageUrl: "https://source.unsplash.com/szQFiGZH8wU",
      price: 150,
    },
    {
      type: "apetizers",
      name: "Pumpkin Soup",
      description: "Homemade pumpkin soup with pumpkin ",
      imageUrl: "https://source.unsplash.com/17SvN08MV_s",
      price: 170,
    },
    {
      type: "apetizers",
      name: "Tomato Soup",
      description: "Slow cooked tomato soup with a side",
      imageUrl: "https://source.unsplash.com/uBnIROT_p5M",
      price: 190,
    },
    {
      type: "entries",
      name: "Mississippi Gumbo",
      description: "Southern Cajun flavored gumbo with shrimps ",
      imageUrl: "https://source.unsplash.com/SDprf7W3NUc",
      price: 210,
    },
    {
      type: "entries",
      name: "Porterhouse Special",
      description: "Succulent porterhouse steak with a side of mashed ",
      imageUrl: "https://source.unsplash.com/7WJV-SDSj6c",
      price: 230,
    },
    {
      type: "entries",
      name: "Jamaican Chicken",
      description: "Exotic Jamaican chicken pair with mango salad, rice ",
      imageUrl: "https://source.unsplash.com/8eIuOTnqbjA",
      price: 250,
    },
    {
      type: "entries",
      name: "Classic Pork Chop",
      description: "Succulently grilled pork chop pair with",
      imageUrl: "https://source.unsplash.com/XRcwELmjLgs",
      price: 270,
    },
    {
      type: "desserts",
      name: "Rose Pudding",
      description: "Rose flavor tapioca pudding",
      imageUrl: "https://source.unsplash.com/8yji1QSu58U",
      price: 290,
    },
    {
      type: "apetizers",
      name: "Spring Rolls",
      description: "Indonesian style spring roll fill with carrots",
      imageUrl: "https://source.unsplash.com/1ugpo9WYPXs",
      price: 310,
    },
    {
      type: "desserts",
      name: "Blueberry Cheese Cake",
      description: "Rich creamy melt in your mouth ",
      imageUrl: "https://source.unsplash.com/EbRBhZ-I_p8",
      price: 330,
    },
    {
      type: "drinks",
      name: "Lemonade",
      description: "Freshly squeezed lemonade with a ",
      imageUrl: "https://source.unsplash.com/6n_kXdPJa3s",
      price: 350,
    },
    {
      type: "desserts",
      name: "Strawberry Banana Crepe",
      description: "Classic southern strawberry banana crepe",
      imageUrl: "https://source.unsplash.com/vT5xrj3z1OE",
      price: 370,
    },
    {
      type: "apetizers",
      name: "Clam Chowder",
      description: "Classic New England clam chowder",
      imageUrl: "https://source.unsplash.com/SH8_JmrsQcw",
      price: 390,
    },
    {
      type: "entries",
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with side of beets salad",
      imageUrl: "https://source.unsplash.com/tkfRSPt-jdk",
      price: 410,
    },
    {
      type: "drinks",
      name: "Espresso",
      description: "Classic freshly grounded Italian espresso",
      imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
      price: 430,
    },
  ];

  const MenuItem = ({ item }) => (
    <li className="item" data-type={item.type}>
      <img src={item.imageUrl} alt="productImg" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div className="menuItem">
        <p>Price: ₹{item.price}</p>
        <button type="submit">Shop Now</button>
      </div>
    </li>
  );

  return (
    <div>
      <main>
        <h1 className="heading" id="food-menu">
          MENU
        </h1>
        <nav className="nav-items">
          <button className="active" data-tag="all">
            All
          </button>
          <button data-tag="apetizers">Apetizers</button>
          <button data-tag="entries">Entries</button>
          <button data-tag="desserts">Desserts</button>
          <button data-tag="drinks">Drinks</button>
        </nav>

        {/* Product Listing */}
        <ul className="menu">
          {MenuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Menu;
