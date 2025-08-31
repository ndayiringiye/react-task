import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBar() {
  return (
    <Navbar
      fluid
      className="w-full mx-auto bg-blue-400 
                 backdrop-blur-lg border-b border-slate-700/50 shadow-xl sticky top-0 z-50"
    >
      {/* Brand Logo */}
      <NavbarBrand href="/" className="flex items-center space-x-3 group">
        <div className="relative">
          <img
            src="/favicon.svg"
            className="h-8 sm:h-10 transition-transform duration-300 group-hover:scale-110"
            alt="Brand Logo"
          />
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <span className="self-center whitespace-nowrap text-xl sm:text-2xl font-bold 
                         bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent
                         group-hover:from-blue-300 group-hover:to-white transition-all duration-300">
          YourBrand
        </span>
      </NavbarBrand>

      {/* Avatar + Toggle (Right Side) */}
      <div className="flex items-center gap-4 md:order-2">
        {/* Notification Bell */}
        <button className="relative p-2 text-slate-300 hover:text-white transition-colors duration-200
                          hover:bg-slate-700/50 rounded-lg group">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M15 17h5l-5 5-5-5h5V3h0z"/>
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white 
                          rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>

        {/* User Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="relative group">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="ring-2 ring-slate-600 group-hover:ring-blue-500 
                          transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          }
        >
          <DropdownHeader className="bg-slate-50">
            <span className="block text-sm font-semibold text-slate-900">Bonnie Green</span>
            <span className="block truncate text-sm text-slate-600">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem className="hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
            </svg>
            Dashboard
          </DropdownItem>
          <DropdownItem className="hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Settings
          </DropdownItem>
          <DropdownItem className="hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            Earnings
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem className="hover:bg-red-50 hover:text-red-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            Sign out
          </DropdownItem>
        </Dropdown>

        <NavbarToggle className="text-slate-300 hover:text-white hover:bg-slate-700/50 
                                 rounded-lg p-2 transition-all duration-200" />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse className="md:flex md:items-center md:space-x-1">
        <NavbarLink 
          href="#" 
          active 
          className="relative px-4 py-2 text-white font-medium rounded-lg
                     bg-blue-600/80 hover:bg-blue-600 transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                     before:bg-blue-400 before:scale-x-100 before:transition-transform before:duration-300"
        >
          Home
        </NavbarLink>
        <NavbarLink 
          href="#" 
          className="relative px-4 py-2 text-slate-300 hover:text-white font-medium 
                     rounded-lg hover:bg-slate-700/50 transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                     before:bg-blue-400 before:scale-x-0 hover:before:scale-x-100 
                     before:transition-transform before:duration-300"
        >
          About
        </NavbarLink>
        <NavbarLink 
          href="#" 
          className="relative px-4 py-2 text-slate-300 hover:text-white font-medium 
                     rounded-lg hover:bg-slate-700/50 transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                     before:bg-blue-400 before:scale-x-0 hover:before:scale-x-100 
                     before:transition-transform before:duration-300"
        >
          Services
        </NavbarLink>
        <NavbarLink 
          href="#" 
          className="relative px-4 py-2 text-slate-300 hover:text-white font-medium 
                     rounded-lg hover:bg-slate-700/50 transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                     before:bg-blue-400 before:scale-x-0 hover:before:scale-x-100 
                     before:transition-transform before:duration-300"
        >
          Pricing
        </NavbarLink>
        <NavbarLink 
          href="#" 
          className="relative px-4 py-2 text-slate-300 hover:text-white font-medium 
                     rounded-lg hover:bg-slate-700/50 transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                     before:bg-blue-400 before:scale-x-0 hover:before:scale-x-100 
                     before:transition-transform before:duration-300"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavBar;