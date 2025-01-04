import Books from '../Components/Books';
import Categories from '../Components/Categories';
import SideBar from '../Components/sideBar'
import { Home, BookOpen, Star, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';


export const navItems = [
  { id: "/", icon: Home, label: 'Home', active: true },
  { id: "/", icon: Star, label: 'Highlights' },
  { id: "/", icon: BookOpen, label: 'Saved' },
  { id: "/dashbaord", icon: Settings, label: 'Dashboard' },
  { id: "/logout", icon: LogOut, label: 'Log out' }
];

function Acceuil() {
  const [activeItem, setActiveItem] = useState(navItems[0]);

  const handleActiveItemChange = (item) => {
    // console.log("actiiiiiive:", item);
    setActiveItem(item);
  };
  return (
    <div className="min-h-screen " >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-64">
            <SideBar onActiveItemChange={handleActiveItemChange} navItems={navItems} />
          </aside>
          <main className="flex-1">
            {activeItem.label === "Home" && (
              <>
                <Categories />
                <Books />
              </>
            )}
            {activeItem.label === "Highlights" && (
              <>
                <h1>Highlights</h1>
              </>
            )}
            {activeItem.label === "Saved" && (
              <>
                <h1>Saved</h1>
              </>
            )}
            {activeItem.label === "Dashboard" && (
              <>
                <h1>Dashboard</h1>
              </>
            )}
            {activeItem.label === "Log out" && (
              <>
                <h1>Log out</h1>
              </>
            )}


          </main>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;