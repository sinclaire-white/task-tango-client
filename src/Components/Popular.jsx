const Popular = ({ Categories }) => {
  // console.log(Categories)
  return (
    <div>
      <h1 className="mb-10 text-5xl font-bold text-center text-primary">Populr Categories</h1>
      <div className="grid grid-cols-4 gap-4">
        {Categories.map((category) => (
          <div key={category.index} className="py-4 text-center bg-accent rounded-2xl hover:cursor-pointer">
            <div className=""> 
              <img
                src={category.image}
                alt={category.name}
                className="h-40 mx-auto mb-2 w-60 rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
