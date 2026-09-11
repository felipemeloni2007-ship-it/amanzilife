import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Menu,
  Mail,
  Phone,
} from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'Serviços',
      href: '#servicos',
    },
    {
      label: 'Telemedicina',
      href: '#telemedicina',
    },
    {
      label: 'A Amanzi',
      href: '#quem-somos',
    },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Barra superior */}
      <div className="border-b border-white/20 bg-primary py-2 text-sm text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-white/70"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-white/70"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 text-xs md:flex-row md:gap-6 md:text-sm">
              <a
                href="mailto:contato@amanzilife.com.br"
                className="flex items-center gap-2 transition-colors hover:text-white/70"
              >
                <Mail size={16} />
                <span>contato@amanzilife.com.br</span>
              </a>

              <a
                href="tel:+5515996529535"
                className="flex items-center gap-2 transition-colors hover:text-white/70"
              >
                <Phone size={16} />
                <span>(15) 99652-9535</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="bg-primary py-1 text-white md:py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="flex-shrink-0"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick('#home');
              }}
            >
              <img
                src="https://horizons-cdn.hostinger.com/0ea0605c-d0d7-4515-bd89-8512f054966e/9619a06a656158088c01a02222f9e34e.png"
                alt="Logo da Amanzi Life"
                className="h-16 w-auto object-contain brightness-0 invert transition-all duration-300 md:h-24 lg:h-28"
              />
            </a>

            {/* Menu para computador */}
            <div className="hidden items-center gap-8 md:flex">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-white transition-colors hover:text-white/70"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Menu para celular */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu"
                  className="text-white hover:bg-primary/80 hover:text-white/70 md:hidden"
                >
                  <Menu size={28} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-primary bg-primary text-white"
              >
                <div className="mt-8 flex flex-col gap-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-xl font-medium text-white transition-colors hover:text-white/70"
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;