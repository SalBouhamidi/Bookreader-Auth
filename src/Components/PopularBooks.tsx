import BookSection from "./Booksection"
export default function PopularBooks(){
    const popularBooks = [
        {
          title: 'Anxious People',
          author: 'Fredrik Backman',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"

        },
        {
          title: 'A Man Called Ove',
          author: 'Fredrik Backman',
          imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"

        },
        {
          title: 'The Paying Guests',
          author: 'Sarah Waters',
          imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"

        },
      ];
      
      const interestingBooks = [
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          imageUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"
        },
        {
          title: 'Beauty and Wonder',
          author: 'Jane Doe',
          imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=750&fit=crop',
          description: "test tets dshj"

        },
        {
          title: 'The Beautiful Ones',
          author: 'Prince',
          imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"

        },
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=750&fit=crop',
          description: "We picked up the most popular books for you, based on your taste. Check it!"

        },
      ];

    return(
        <>
        <section className="mx-6 ">
        <BookSection title="POPULAR BESTELLERS" description="We picked up the most popular books for you, based on your taste. Check it!" books={popularBooks}/> 
        <BookSection title="CAN BE INTERESTING" description="Check this list of books, picked up for you and choose" books={interestingBooks}/>
        </section>
        </>
    )
}