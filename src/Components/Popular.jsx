const Popular = ({ Categories }) => {
  return (
    <div className="container px-4 mx-auto my-12 md:my-20">
      <h1 className="mb-8 text-3xl font-bold text-center md:mb-12 md:text-4xl lg:text-5xl text-primary">
        Popular Categories
      </h1>
      
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
        {Categories.map((category) => (
          <div 
            key={category.index} 
            className="py-4 text-center transition-all duration-300 bg-accent rounded-2xl hover:cursor-pointer hover:brightness-95"
          >
            <div className="px-2">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-32 mx-auto mb-2 rounded-2xl sm:h-40 md:h-48"
              />
            </div>
            <h3 className="text-lg font-semibold sm:text-xl">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;