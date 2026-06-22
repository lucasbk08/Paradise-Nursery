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
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&q=80',
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
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&q=80',
        description: 'Calming scent with stress-relief properties.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80',
        description: 'Sweet floral fragrance that uplifts the mood.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&q=80',
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
        image: 'https://images.unsplash.com/photo-1466193080668-4d95033f9c28?w=400&q=80',
        description: 'Contains carvacrol that naturally repels insects.',
        cost: '$10',
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80',
        description: 'Strong scent deters mosquitoes and ants.',
        cost: '$12',
      },
      {
        name: 'Marigold',
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&q=80',
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
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea6?w=400&q=80',
        description: 'Soothes burns and skin irritations naturally.',
        cost: '$14',
      },
      {
        name: 'Echinacea',
        image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80',
        description: 'Boosts immune system and fights cold symptoms.',
        cost: '$16',
      },
      {
        name: 'Peppermint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80',
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
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80',
        description: 'Thrives in low light with minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&q=80',
        description: 'Fast-growing vine that tolerates neglect well.',
        cost: '$10',
      },
      {
        name: 'Cactus',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
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
