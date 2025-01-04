import { useState } from 'react';

export default function SideBar({ navItems , onActiveItemChange}) {
  const [items, setItems] = useState(navItems);

  const handleItemClick = (clickedIndex) => {
    const updatedItems = items.map((item, index) => ({
      ...item,
      active: index === clickedIndex,
    }
  ));

    setItems(updatedItems);
    const activeItem = navItems[clickedIndex];
    onActiveItemChange(activeItem); 
  };

  return (
    <>
      <nav className={`w-full md:w-64 bg-white p-4 rounded-lg`}>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(index)}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  item.active ? 'bg-amber-100 text-amber-800' : 'hover:bg-amber-800'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
