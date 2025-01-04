import { Bookmark, Eye } from 'lucide-react';
import { useState } from 'react';

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
  large?: boolean;
  description: string;
}

export default function BookCard({ title, description, author, imageUrl, large = false }: BookCardProps) {
  const [openModal, setOpenModal] = useState(false);
  // function handleSaving(){
  //   let book = {
  //     title: title,
  //     description: description,
  //     author: author,
  //     image: imageUrl
  //   }
  //   let books: { title: string; description: string; author: string; image: string }[] = [];

  //   let storedBooks  = localStorage.getItem('books');


  //   if (books) {
  //     books = JSON.parse(books);
  //     books.push(book);
  //   } else {
  //     books = [book];
  //   }


  // }
  return (
    <div className={`relative group ${large ? 'col-span-1' : 'col-span-2 md:col-span-1'}`}>
      <img src={imageUrl} alt={title} className="w-full rounded-lg object-cover shadow-lg transition-transform group-hover:scale-105" style={{ aspectRatio: '2/3' }} />
      <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Bookmark className="h-4 w-4 text-amber-500" />
      </button>
      <button onClick={() => setOpenModal(!openModal)} type="button" data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="absolute top-4 right-14 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Eye className="h-4 w-4 text-amber-500" />
      </button>

      {openModal && (
        <div onClick={() => setOpenModal(false)} id="popup-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 !right-0 !left-[30%] z-50 justify-center items-center w-full md:inset-0 max-h-full max-sm:!left-0">
          <div onClick={(e) => e.stopPropagation()} className="relative p-4 w-full max-w-xl max-h-full" >
            <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button onClick={() => setOpenModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <h2 className="text-2xl font-bold !text-amber-900">{title}</h2>
                <p className="text-gray-600 mt-1">{description} <span className='!text-amber-400'>By{author}</span></p>
              </div>
            </div>
          </div>
        </div>

      )}

      <div className=" flex justify-center mt-3">
        <button className=" px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors">
          Barrow a Book
        </button>
      </div>
    </div>
  );
}