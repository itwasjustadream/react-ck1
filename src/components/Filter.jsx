function Filter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { value: 'all', label: 'Все товары' },
    { value: 'electronics', label: 'Электроника' },
    { value: 'clothing', label: 'Одежда' },
    { value: 'books', label: 'Книги' },
  ];

  return (
    <div className="filter">
      <label htmlFor="category">Категория: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;