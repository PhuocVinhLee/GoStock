import Nav from "./_components/nav";

const DashbroardLayout = ({ children }: { children: React.ReactNode  }) => {
  return (
    <div className=" h-full  ">
      <Nav></Nav>

      <main className="">{children}</main>
    </div>
  );
};

export default DashbroardLayout;
