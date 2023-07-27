import { Outlet } from "react-router-dom";

export default function Schedule() {
  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Schedule by Day
          </h1>
        </div>
        {/* schedule */}
        <div className="container page-padding py-[10rem]">
          <Outlet />
        </div>
      </section>
    </>
  );
}
