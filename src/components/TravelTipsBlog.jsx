
const TravelTipsBlog = () => {

  const posts = [
    {
      id: 1,
      title: "Exploring Local Cuisine",
      author: "John Doe",
      date: "May 15, 2024",
      content:
        "Discover the flavors of local cuisine and embark on a culinary journey through the streets of our featured destinations. From street food stalls to fine dining restaurants, indulge in delicious dishes and uncover the secrets of traditional recipes.",
    },
    {
      id: 2,
      title: "Hidden Gems to Explore",
      author: "Jane Smith",
      date: "June 2, 2024",
      content:
        "Venture off the beaten path and uncover hidden gems waiting to be explored. From secluded beaches to charming villages, these lesser-known destinations offer unforgettable experiences and opportunities for unique adventures.",
    },

  ];

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-3xl items-center py-4 text-gray-500  text-center font-semibold ">
        Travel Tips & Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Author:</span> {post.author}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Date:</span> {post.date}
            </p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTipsBlog;
