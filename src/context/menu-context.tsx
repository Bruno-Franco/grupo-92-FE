'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

export type MenuContextType = {
  isOpen: boolean;
  handleMenu: () => void;
  setIsOpen: (string: boolean) => void;
};

const MenuContext = createContext({} as MenuContextType);

export default function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu(): void {
    setIsOpen(!isOpen);
  }

  return (
    <MenuContext.Provider value={{ setIsOpen, isOpen, handleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
