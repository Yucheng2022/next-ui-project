'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      isBordered
      className="bg-background/70 backdrop-blur-md backdrop-saturate-150 border-b border-divider"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient">
            NextUI Project
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link 
              color="foreground" 
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                className="hover:bg-default-100"
              >
                {mounted && (theme === "light" ? "🌙" : "☀️")}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Theme selection">
              <DropdownItem key="light" onClick={() => setTheme("light")}>
                ☀️ Light
              </DropdownItem>
              <DropdownItem key="dark" onClick={() => setTheme("dark")}>
                🌙 Dark
              </DropdownItem>
              <DropdownItem key="system" onClick={() => setTheme("system")}>
                💻 System
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color="foreground"
              className="w-full hover:text-primary transition-colors"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
