import React, { useState, useEffect } from 'react';
import './Products.css';
import { products } from '../Data/productsData';

function Products({ categorys = 0, searchTerm = '' }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categorys === 0 || product.categoryId === categorys;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const matchesSearch = searchLower === '' || 
      product.name?.toLowerCase().includes(searchLower) ||
      product.description?.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [categorys, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('Products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Container-products-wrapper">
      <div className="Container-products" id="Products">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="item-products" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="price-box">
                {product.originalPrice && (
                  <del><span className="price red">{product.originalPrice.toLocaleString()} تومان</span></del>
                )}
                <br />
                <span className="price green">{product.discountPrice?.toLocaleString()} تومان</span>
              </div>
              <div className='btn-buy'>
                <button>افزودن به سبد</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">محصولی در این دسته‌بندی پیدا نشد.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            قبلی
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;