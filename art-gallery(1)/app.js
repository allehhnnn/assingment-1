// Art Gallery Application JavaScript

// Application data
const artworks = [
  {
    id: 1,
    title: "Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "One of van Gogh's most famous works, painted during his stay at the asylum in Saint-Rémy-de-Provence. The painting features a swirling night sky filled with stars above a small village, capturing the artist's emotional intensity and unique vision.",
    medium: "Oil on canvas",
    dimensions: "73.7 x 92.1 cm",
    location: "Museum of Modern Art, New York",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1754828565/pplx_project_search_images/2e34a2f222e1185ee91563dc1620fcff2e0f69d5.png",
    category: "Post-Impressionism"
  },
  {
    id: 2,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: 1665,
    description: "Often referred to as the 'Mona Lisa of the North,' this masterpiece depicts a young woman wearing an exotic dress and turban, with an oversized pearl earring. The painting is renowned for its captivating gaze and masterful use of light.",
    medium: "Oil on canvas",
    dimensions: "44.5 x 39 cm",
    location: "Mauritshuis, The Hague",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1758942117/pplx_project_search_images/67d39de47670932254c463092249a8622e221935.png",
    category: "Dutch Golden Age"
  },
  {
    id: 3,
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: 1908,
    description: "A masterpiece of the Vienna Secession movement, depicting a couple embracing, covered in elaborate robes with geometric patterns and floral designs against a golden background. The painting represents the height of Klimt's 'Golden Period.'",
    medium: "Oil and gold leaf on canvas",
    dimensions: "180 x 180 cm",
    location: "Österreichische Galerie Belvedere, Vienna",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1761284129/pplx_project_search_images/8f1e9c6dc93336da618687fb789da506b84ad284.png",
    category: "Art Nouveau"
  },
  {
    id: 4,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: 1899,
    description: "Part of Monet's iconic series depicting his water garden at Giverny, this painting showcases a Japanese-style footbridge arching over a pond abundant with water lilies, demonstrating the artist's mastery in capturing natural light and reflections.",
    medium: "Oil on canvas",
    dimensions: "89.5 x 92 cm",
    location: "National Gallery, London",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1756150013/pplx_project_search_images/f9deaa25704339d8bc2b3079841bc7528f08edbd.png",
    category: "Impressionism"
  },
  {
    id: 5,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: 1512,
    description: "One of the most iconic images in art history, this fresco adorns the ceiling of the Sistine Chapel. The famous detail shows the hands of God and Adam nearly touching, symbolizing the biblical moment of God giving life to humanity.",
    medium: "Fresco",
    dimensions: "280 x 570 cm",
    location: "Sistine Chapel, Vatican City",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1758623509/pplx_project_search_images/90bb8ab0c8b6c49af874769e807f04f8f6f0c0ce.png",
    category: "High Renaissance"
  },
  {
    id: 6,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    description: "Perhaps the most famous surrealist painting, featuring melting clocks draped over various objects in a dream-like landscape. The work explores concepts of time, memory, and the subconscious mind with Dalí's characteristic precision and imagination.",
    medium: "Oil on canvas",
    dimensions: "24 x 33 cm",
    location: "Museum of Modern Art, New York",
    image_url: "https://pplx-res.cloudinary.com/image/upload/v1757407881/pplx_project_search_images/6a30937c7f1b5970d415b159f2834b46c74efbe3.png",
    category: "Surrealism"
  },
  {
    id: 7,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    description: "The world's most famous painting, depicting a woman with an enigmatic smile. This portrait exemplifies Leonardo's mastery of sfumato technique and has captivated viewers for centuries with its mysterious subject and innovative composition.",
    medium: "Oil on poplar panel",
    dimensions: "77 x 53 cm",
    location: "Louvre Museum, Paris",
    image_url: "https://via.placeholder.com/400x600/2c3e50/ecf0f1?text=Mona+Lisa",
    category: "Renaissance"
  },
  {
    id: 8,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: 1486,
    description: "A masterpiece of the Early Renaissance depicting the goddess Venus emerging from the sea as a fully grown woman. The painting illustrates the myth of Aphrodite's birth with graceful lines and ethereal beauty characteristic of Botticelli's style.",
    medium: "Tempera on canvas",
    dimensions: "172.5 x 278.9 cm",
    location: "Uffizi Gallery, Florence",
    image_url: "https://via.placeholder.com/400x600/8e44ad/ecf0f1?text=Birth+of+Venus",
    category: "Early Renaissance"
  },
  {
    id: 9,
    title: "The Scream",
    artist: "Edvard Munch",
    year: 1893,
    description: "An iconic Expressionist painting showing an agonized figure against a tumultuous orange sky. The work represents universal human anxiety and has become one of the most recognizable images in art, symbolizing modern existential angst.",
    medium: "Oil, tempera, pastel and crayon on cardboard",
    dimensions: "91 x 73.5 cm",
    location: "National Gallery, Oslo",
    image_url: "https://via.placeholder.com/400x600/e67e22/ecf0f1?text=The+Scream",
    category: "Expressionism"
  }
];

const artists = {
  "Vincent van Gogh": {
    birth_year: 1853,
    death_year: 1890,
    nationality: "Dutch",
    movement: "Post-Impressionism",
    bio: "Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in Western art history. Despite creating over 2,100 artworks in his lifetime, he remained poor and largely unknown. His bold colors, expressive brushwork, and emotional intensity have inspired countless artists."
  },
  "Johannes Vermeer": {
    birth_year: 1632,
    death_year: 1675,
    nationality: "Dutch",
    movement: "Dutch Golden Age",
    bio: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. Recognized for his masterful treatment of light and his poetic rendering of everyday activities, Vermeer created fewer than 50 paintings, yet each demonstrates exceptional technical skill."
  },
  "Gustav Klimt": {
    birth_year: 1862,
    death_year: 1918,
    nationality: "Austrian",
    movement: "Art Nouveau, Symbolism",
    bio: "Gustav Klimt was an Austrian symbolist painter and a prominent member of the Vienna Secession movement. His paintings are characterized by ornate decorative elements, gold leaf, and sensual forms. Klimt's work represents a fusion of decorative arts and fine arts."
  },
  "Claude Monet": {
    birth_year: 1840,
    death_year: 1926,
    nationality: "French",
    movement: "Impressionism",
    bio: "Claude Monet was a founder of French Impressionist painting and the most consistent practitioner of the movement's philosophy. His emphasis on plein-air painting and his lifelong dedication to capturing light and color revolutionized modern art."
  },
  "Michelangelo": {
    birth_year: 1475,
    death_year: 1564,
    nationality: "Italian",
    movement: "High Renaissance",
    bio: "Michelangelo Buonarroti was an Italian sculptor, painter, architect, and poet of the High Renaissance. Considered one of the greatest artists of all time, his works demonstrate a mastery of human anatomy and express profound spiritual themes."
  },
  "Salvador Dalí": {
    birth_year: 1904,
    death_year: 1989,
    nationality: "Spanish",
    movement: "Surrealism",
    bio: "Salvador Dalí was a Spanish Surrealist artist known for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. His imaginative paintings explored dreams, the subconscious, and Freudian psychology with meticulous detail."
  },
  "Leonardo da Vinci": {
    birth_year: 1452,
    death_year: 1519,
    nationality: "Italian",
    movement: "High Renaissance",
    bio: "Leonardo da Vinci was an Italian polymath whose areas of interest included invention, painting, sculpting, architecture, science, and more. Often described as the archetype of the Renaissance Man, his artistic innovations in composition, technique, and observation changed the course of art history."
  },
  "Sandro Botticelli": {
    birth_year: 1445,
    death_year: 1510,
    nationality: "Italian",
    movement: "Early Renaissance",
    bio: "Sandro Botticelli was an Italian painter of the Early Renaissance known for his graceful linear style and mythological subjects. His works embody the humanist spirit of the Renaissance with their elegant lines and classical themes."
  },
  "Edvard Munch": {
    birth_year: 1863,
    death_year: 1944,
    nationality: "Norwegian",
    movement: "Expressionism, Symbolism",
    bio: "Edvard Munch was a Norwegian painter whose emotionally charged works laid the groundwork for Expressionism. His exploration of psychological themes, human anxiety, and the darker aspects of human experience profoundly influenced modern art."
  }
};

const similarities = {
  1: [4, 6],
  2: [3, 7],
  3: [2, 8],
  4: [1, 8],
  5: [7, 8],
  6: [1, 9],
  7: [2, 5],
  8: [3, 5],
  9: [6, 1]
};

// Application state
let currentPage = 'login';
let currentArtwork = null;
let filteredArtworks = artworks;

// Utility functions
function showLoading() {
  const loadingOverlay = document.getElementById('loadingAnimation');
  loadingOverlay.classList.add('show');
}

function hideLoading() {
  const loadingOverlay = document.getElementById('loadingAnimation');
  loadingOverlay.classList.remove('show');
}

function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page with animation
  setTimeout(() => {
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      targetPage.classList.add('fade-in');
    }
  }, 100);
  
  currentPage = pageId;
}

// Authentication functions
function login(event) {
  event.preventDefault();
  showLoading();
  
  // Simulate login process
  setTimeout(() => {
    hideLoading();
    showGalleryHome();
  }, 1000);
}

function signUp(event) {
  event.preventDefault();
  showLoading();
  
  // Simulate signup process
  setTimeout(() => {
    hideLoading();
    showLogin();
  }, 1000);
}

function logout() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showLogin();
  }, 500);
}

// Navigation functions
function showLogin() {
  showPage('loginPage');
}

function showSignUp() {
  showPage('signUpPage');
}

function showGalleryHome() {
  showPage('galleryHomePage');
  renderFeaturedArtworks();
}

function showArtDisplay() {
  showPage('artDisplayPage');
  renderAllArtworks();
}

function showAbout() {
  showPage('aboutPage');
}

function showIndividualArt(artworkId) {
  currentArtwork = artworks.find(art => art.id === artworkId);
  if (currentArtwork) {
    showPage('individualArtPage');
    renderArtworkDetails();
  }
}

// Rendering functions
function createArtworkCard(artwork, isSmall = false) {
  const cardClass = isSmall ? 'similar-artwork-card' : 'artwork-card';
  const imageClass = isSmall ? 'similar-artwork-image' : 'artwork-image';
  const infoClass = isSmall ? 'similar-artwork-info' : 'artwork-info';
  const titleClass = isSmall ? 'similar-artwork-title' : 'artwork-title';
  const artistClass = isSmall ? 'similar-artwork-artist' : 'artwork-artist';
  
  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="${cardClass}" onclick="showIndividualArt(${artwork.id})">
        <img src="${artwork.image_url}" alt="${artwork.title}" class="${imageClass}">
        <div class="${infoClass}">
          <h5 class="${titleClass}">${artwork.title}</h5>
          <p class="${artistClass}">${artwork.artist}</p>
          ${!isSmall ? `<p class="artwork-year">${artwork.year}</p>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedArtworks() {
  const container = document.getElementById('featuredArtworks');
  if (!container) return;
  
  // Show first 6 artworks as featured
  const featuredArtworks = artworks.slice(0, 6);
  container.innerHTML = featuredArtworks.map(artwork => createArtworkCard(artwork)).join('');
}

function renderAllArtworks() {
  const container = document.getElementById('allArtworks');
  if (!container) return;
  
  container.innerHTML = filteredArtworks.map(artwork => createArtworkCard(artwork)).join('');
}

function renderArtworkDetails() {
  if (!currentArtwork) return;
  
  const container = document.getElementById('artworkDetails');
  if (!container) return;
  
  const artist = artists[currentArtwork.artist];
  const similarArtworkIds = similarities[currentArtwork.id] || [];
  const similarArtworks = similarArtworkIds.map(id => artworks.find(art => art.id === id)).filter(Boolean);
  
  container.innerHTML = `
    <div class="col-lg-8">
      <img src="${currentArtwork.image_url}" alt="${currentArtwork.title}" class="artwork-detail-image">
    </div>
    <div class="col-lg-4">
      <div class="artwork-details">
        <h2 class="mb-3">${currentArtwork.title}</h2>
        
        <div class="detail-item">
          <span class="detail-label">Artist:</span>
          <span class="detail-value">${currentArtwork.artist}</span>
        </div>
        
        <div class="detail-item">
          <span class="detail-label">Year:</span>
          <span class="detail-value">${currentArtwork.year}</span>
        </div>
        
        <div class="detail-item">
          <span class="detail-label">Medium:</span>
          <span class="detail-value">${currentArtwork.medium}</span>
        </div>
        
        <div class="detail-item">
          <span class="detail-label">Dimensions:</span>
          <span class="detail-value">${currentArtwork.dimensions}</span>
        </div>
        
        <div class="detail-item">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${currentArtwork.location}</span>
        </div>
        
        <div class="detail-item">
          <span class="detail-label">Category:</span>
          <span class="detail-value">${currentArtwork.category}</span>
        </div>
        
        <div class="mt-4">
          <h5>Description</h5>
          <p class="detail-value">${currentArtwork.description}</p>
        </div>
        
        <div class="mt-4">
          <button class="btn btn--primary btn--sm me-2">
            <i class="fas fa-share"></i> Share
          </button>
          <button class="btn btn--secondary btn--sm">
            <i class="fas fa-heart"></i> Favorite
          </button>
        </div>
      </div>
      
      ${artist ? `
        <div class="artist-bio">
          <h4>About the Artist</h4>
          <h5>${currentArtwork.artist}</h5>
          <p><strong>${artist.birth_year} - ${artist.death_year}</strong></p>
          <p><strong>Nationality:</strong> ${artist.nationality}</p>
          <p><strong>Movement:</strong> ${artist.movement}</p>
          <p>${artist.bio}</p>
        </div>
      ` : ''}
      
      ${similarArtworks.length > 0 ? `
        <div class="similar-artworks">
          <h4>Similar Artworks</h4>
          <div class="row g-3">
            ${similarArtworks.map(artwork => `
              <div class="col-6">
                <div class="similar-artwork-card" onclick="showIndividualArt(${artwork.id})">
                  <img src="${artwork.image_url}" alt="${artwork.title}" class="similar-artwork-image">
                  <div class="similar-artwork-info">
                    <h6 class="similar-artwork-title">${artwork.title}</h6>
                    <p class="similar-artwork-artist">${artwork.artist}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// Filter functions
function filterArtworks() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;
  
  const selectedCategory = categoryFilter.value;
  
  if (selectedCategory === 'all') {
    filteredArtworks = artworks;
  } else {
    filteredArtworks = artworks.filter(artwork => artwork.category === selectedCategory);
  }
  
  renderAllArtworks();
}

// Search function (visual only)
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      // This is just for visual feedback - actual search functionality would be implemented here
      console.log('Searching for:', e.target.value);
    });
  }
}

// Initialize application
function initializeApp() {
  // Show login page by default
  showLogin();
  
  // Setup search functionality
  setupSearch();
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add loading states to buttons
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('no-loading')) {
      e.target.classList.add('loading');
      setTimeout(() => {
        e.target.classList.remove('loading');
      }, 500);
    }
  });
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export functions for global access
window.login = login;
window.signUp = signUp;
window.logout = logout;
window.showLogin = showLogin;
window.showSignUp = showSignUp;
window.showGalleryHome = showGalleryHome;
window.showArtDisplay = showArtDisplay;
window.showAbout = showAbout;
window.showIndividualArt = showIndividualArt;
window.filterArtworks = filterArtworks;