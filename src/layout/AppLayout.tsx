import { Header } from "./Header";

const AppLayout = (props: any) => {
  return (
    <div className="mx-auto min-h-screen">
      <Header />
      {props.children}
    </div>
  );
};

export default AppLayout;
