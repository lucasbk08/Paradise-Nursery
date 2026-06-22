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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Single_Mother_in_Laws_Tongue.jpg/440px-Single_Mother_in_Laws_Tongue.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_Vittatum_001.JPG/450px-Chlorophytum_comosum_Vittatum_001.JPG',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/400px-Spathiphyllum_cochlearispathum_RTBG.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wisteria_sinensis_002.jpg/800px-Wisteria_sinensis_002.jpg',
        description: 'Calming scent with stress-relief properties.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jasminum_sambac1.jpg/440px-Jasminum_sambac1.jpg',
        description: 'Sweet floral fragrance that uplifts the mood.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rosemary_bush.jpg/1200px-Rosemary_bush.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Origanum_vulgare_-_harilik_pune.jpg/450px-Origanum_vulgare_-_harilik_pune.jpg',
        description: 'Contains carvacrol that naturally repels insects.',
        cost: '$10',
      },
      {
        name: 'Mint',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mojito_Mint_-_Mentha_x_villosa.jpg/440px-Mojito_Mint_-_Mentha_x_villosa.jpg',
        description: 'Strong scent deters mosquitoes and ants.',
        cost: '$12',
      },
      {
        name: 'Marigold',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Calendula_Officinalis_Fleurie.jpg/440px-Calendula_Officinalis_Fleurie.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png',
        description: 'Soothes burns and skin irritations naturally.',
        cost: '$14',
      },
      {
        name: 'Echinacea',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Echinacea_purpurea.jpg/440px-Echinacea_purpurea.jpg',
        description: 'Boosts immune system and fights cold symptoms.',
        cost: '$16',
      },
      {
        name: 'Peppermint',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Yerevan-Botanical_Garden_-_Mentha_piperita.jpg/1024px-Yerevan-Botanical_Garden_-_Mentha_piperita.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Zamioculcas_zamiifolia.jpg/440px-Zamioculcas_zamiifolia.jpg',
        description: 'Thrives in low light with minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Epipremnum_pinnatum.jpg/440px-Epipremnum_pinnatum.jpg',
        description: 'Fast-growing vine that tolerates neglect well.',
        cost: '$10',
      },
      {
        name: 'Cactus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thlocactus_bicolor.jpg/440px-Thlocactus_bicolor.jpg',
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
