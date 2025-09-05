import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
{/*--- Card ---*/}
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1679212839469-fb16a48919ce?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md animate-fade-down animation-ease-in-out">
    {/*--- Avatar ---*/}
      <div className="avatar">
        <div className="w-24 rounded m-5">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </div>
      </div>
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Justice, FOR GOTHAM!<br/>
        Software Developer / Web Developer from the Netherlands
      </p>
    {/*--- Buttons ---*/}
      <div className="flex justify-center gap-2.5">
        <button className="btn btn-outline">
          <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
          Follow
        </button>
        <button className="btn btn-outline">
          <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
          LinkedIn
        </button>
        <button className="btn btn-outline">
          <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
          Github
        </button>
      </div>
    </div>
  </div>
</div>
{/*--- Hero ---*/}
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse delay-[300ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0" data-taos-offset="400">
    <img
      src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">About me</h1>
      <p className="py-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore excepturi deserunt magnam corrupti ab voluptatem nobis fugiat placeat assumenda. Doloribus porro aperiam consectetur tenetur! Provident atque quam sed nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit eaque adipisci numquam vel autem. Praesentium, alias? Iste veniam perspiciatis cum sapiente, at pariatur temporibus nesciunt nemo similique, alias deserunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, tempore, vero minima molestiae earum ipsam consequatur veniam omnis dolorum voluptate dignissimos consectetur excepturi soluta? A minus illo hic alias blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus cupiditate est sapiente velit, deserunt optio doloribus tenetur quod animi voluptas necessitatibus, inventore ad, qui minima molestiae aliquam in ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut minima illum delectus est quam, numquam dolorum nobis consequatur. At, ipsum eos. Veniam ea non eius similique dolorum eos facere labore.
      </p>
    </div>
  </div>
</div>
{/*--- Footer ---*/}
<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by IJsbrand van de Lindt</p>
  </aside>
</footer>
    </>
  );
}

export default App;
