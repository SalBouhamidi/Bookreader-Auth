import BookCard from './BookCard';

interface BookSectionProps {
  title: string;
  description: string;
  books: Array<{
    title: string;
    author: string;
    imageUrl: string;
    description: string;
  }>;
  showViewAll?: boolean;
}

export default function BookSection({ title, description, books, showViewAll = true }: BookSectionProps) {
  return (
    <section className="py-10 max-sm:py-6">
      <div className="flex justify-between items-end mb-6 max-sm:flex-col max-sm:justify-center">
        <div>
          <h2 className="text-2xl font-bold text-amber-900 max-sm:text-2xl max-sm:whitespace-nowrap">{title}</h2>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        {showViewAll && (
          <button className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors max-sm:hidden ">
            Watch full list
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </section>
  );
}