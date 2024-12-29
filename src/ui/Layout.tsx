import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Add your header or navbar here */}
      <main>{children}</main>
      {/* Add your footer here */}
    </div>
  );
};

export default Layout;
