document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const lastModified = document.getElementById("lastModified");
    const currentYear = document.getElementById("currentyear");

    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
    });

   
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    
    currentYear.textContent = new Date().getFullYear();

    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navLinks.classList.remove('show');
            hamburger.textContent = '☰';
        }
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Austin Texas",
        location: "Cedar Park, Texas, United States",
        dedicated: "2024, August, 17",
        area: 30000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361.jpg"

    },
    {
        templeName: "Moses Lake Washington",
        location: "Moses Lake, Washington, United States",
        dedicated: "2020, October, 10",
        area: 28933,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/moses-lake-washington-temple/moses-lake-washington-temple-39147-thumb.jpg"
    }
  ];

  
function createTempleCard(templesArray) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
  
    templesArray.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
  
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);
  
      gallery.appendChild(card);
    });
  }
  
  
  createTempleCard(temples);
  
  
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTemples = temples.filter(temple =>
      temple.templeName.toLowerCase().includes(searchTerm) ||
      temple.location.toLowerCase().includes(searchTerm)
    );
    createTempleCard(filteredTemples);
  });
  
 
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter");
      let filteredTemples;
      
      if (filter === "old") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 2000);
      } else if (filter === "new") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
      } else if (filter === "large") {
        filteredTemples = temples.filter(temple => temple.area > 50000);
      } else if (filter === "small") {
        filteredTemples = temples.filter(temple => temple.area <= 50000);
      } else {
        filteredTemples = temples;
      }
  
      createTempleCard(filteredTemples); // Mostrar los templos filtrados
    });
  });
