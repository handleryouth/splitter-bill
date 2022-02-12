import { LayoutProps } from "types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-lightGrayishCyan min-w-[320px] min-h-screen  flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default Layout;
