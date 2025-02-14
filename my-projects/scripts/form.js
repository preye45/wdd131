const products = [
    { id: "fc-1888", name: "JEANS", averagerating: 4.5 },
    { id: "fc-2050", name: "TOPS", averagerating: 4.7 },
    { id: "fs-1987", name: "POLO", averagerating: 3.5 },
    { id: "ac-2000", name: "GOWNS", averagerating: 3.9 },
    { id: "jj-1969", name: "JUMPSUIT", averagerating: 5.0 }
  ];
  
  // Populate product options
  window.onload = function () {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  };
  
  // Counter for reviews in localStorage
  if (window.location.pathname.endsWith('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    console.log(`Total reviews submitted: ${reviewCount}`);
  }
