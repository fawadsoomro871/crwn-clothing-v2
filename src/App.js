import "./categories.styles.scss"

const App = () => {

  const categories = [
    {id: 1, title: "Sneakers"},
    {id: 2, title: "Hats"},
    {id: 3, title: "Womens"},
    {id: 4, title: "Mens"},
  ]


  return (
    <div className="categories-container">
      {categories.map(({title}) => {
      return <div className="category-container">
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      })}
    </div>
  );
}

export default App;
