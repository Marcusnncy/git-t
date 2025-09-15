
async function loadProducts(){
  try{
    const res = await fetch('/api/products');
    const products = await res.json();
    const el = document.getElementById('products');
    el.innerHTML = '';
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
        <h3>${p.name}</h3>
        <div class="desc">${p.description}</div>
        <div class="price">${formatVND(p.price)}</div>
      `;
      el.appendChild(card);
    });
  }catch(err){
    console.error('Lỗi khi tải sản phẩm', err);
  }
}

function formatVND(n){
  return new Intl.NumberFormat('vi-VN', {style:'currency',currency:'VND'}).format(n);
}

window.addEventListener('DOMContentLoaded', loadProducts);
