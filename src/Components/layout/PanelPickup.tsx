const pickupCategories = [
  { id: "map", label: "지도", icon: "/icons/map.png" },
  { id: "dessert", label: "카페·디저트", icon: "/icons/dessert.png" },
  { id: "chicken", label: "치킨", icon: "/icons/chicken.png" },
  { id: "snack", label: "분식", icon: "/icons/snack.png" },
  { id: "fastfood", label: "패스트푸드", icon: "/icons/fastfood.png" },
  { id: "pizza", label: "피자", icon: "/icons/pizza.png" },
];

export const PanelPickup = () => {
  return (
    <div className="pickup-panel">
      {/* 왼쪽 큰 카드 */}
      <button className="pickup-main-card">
        <img src="/images/starbucks.png" alt="스타벅스 할인" />
      </button>

      {/* 오른쪽 아이콘 그리드 */}
      <div className="pickup-grid">
        {pickupCategories.map(category => (
          <button key={category.id} className="pickup-category-button">
            <img src={category.icon} alt={category.label} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};