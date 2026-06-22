import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: '/Paradise-Nursery/images/snake-plant.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: '/Paradise-Nursery/images/spider-plant.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: '/Paradise-Nursery/images/peace-lily.jpg',
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: '/Paradise-Nursery/images/lavender.jpg',
        description: 'Calming scent with stress-relief properties.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: '/Paradise-Nursery/images/jasmine.png',
        description: 'Sweet floral fragrance that uplifts the mood.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: '/Paradise-Nursery/images/rosemary.jpg',
        description: 'Boosts memory and improves concentration.',
        cost: '$15',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Oregano',
        image: '/Paradise-Nursery/images/oregano.jpg',
        description: 'Contains carvacrol that naturally repels insects.',
        cost: '$10',
      },
      {
        name: 'Mint',
        image: '/Paradise-Nursery/images/mint.jpg',
        description: 'Strong scent deters mosquitoes and ants.',
        cost: '$12',
      },
      {
        name: 'Marigold',
        image: '/Paradise-Nursery/images/marigold.jpg',
        description: 'Natural pyrethrum repels a wide range of pests.',
        cost: '$8',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Aloe Vera',
        image: '/Paradise-Nursery/images/aloe-vera.jpg',
        description: 'Soothes burns and skin irritations naturally.',
        cost: '$14',
      },
      {
        name: 'Echinacea',
        image: '/Paradise-Nursery/images/echinacea.jpg',
        description: 'Boosts immune system and fights cold symptoms.',
        cost: '$16',
      },
      {
        name: 'Peppermint',
        image: '/Paradise-Nursery/images/peppermint.jpg',
        description: 'Relieves headaches and aids digestion.',
        cost: '$13',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: '/Paradise-Nursery/images/zz-plant.jpg',
        description: 'Thrives in low light with minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: '/Paradise-Nursery/images/pothos.jpg',
        description: 'Fast-growing vine that tolerates neglect well.',
        cost: '$10',
      },
      {
        name: 'Cactus',
        image: '/Paradise-Nursery/images/cactus.jpg',
        description: 'Needs very little water and loves bright light.',
        cost: '$9',
      },
    ],
  },
];

function ProductList({ onCartClicked }) {
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prevState => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <>
          <header className="navbar">
            <div className="navbar-brand">
              <div className="brand-logo">🌿</div>
              <div className="brand-text">
                <span className="brand-name">Paradise Nursery</span>
                <span className="brand-tagline">Where Green Meets Serenity</span>
              </div>
            </div>
            <nav className="navbar-center">Plants</nav>
            <button className="cart-btn" onClick={handleCartClick}>
              <span className="cart-icon">🛒</span>
              {calculateTotalQuantity() > 0 && (
                <span className="cart-badge">{calculateTotalQuantity()}</span>
              )}
            </button>
          </header>

          <main className="main-content">
            <div className="product-grid">
              {plantsArray.map((category, index) => (
                <div key={index} className="category-section">
                  <h2 className="category-title">
                    <span className="category-line" />
                    {category.category}
                    <span className="category-line" />
                  </h2>
                  <div className="product-list">
                    {category.plants.map((plant, plantIndex) => (
                      <div className="product-card" key={plantIndex}>
                        <span className="sale-badge">SALE</span>
                        <div className="product-image-wrapper">
                          <img
                            className="product-image"
                            src={plant.image}
                            alt={plant.name}
                          />
                        </div>
                        <div className="product-info">
                          <div className="product-title">{plant.name}</div>
                          <div className="product-cost">{plant.cost}</div>
                          <div className="product-description">{plant.description}</div>
                          <button
                            className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={addedToCart[plant.name]}
                          >
                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default ProductList;
