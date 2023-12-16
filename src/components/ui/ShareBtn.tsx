"use client";
import { Share2 } from "lucide-react";
import { FacebookIcon, FacebookShareButton } from "react-share";

export default function ShareBtn() {
  return (
    <>
      <button className="group flex flex-col justify-center items-center hover:text-blue-light">
        <Share2 className="group-hover:fill-blue-light" />
        <span className="text-sm">Condividi</span>
      </button>
      {/* <FacebookShareButton
        url={window.location.href}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton> */}
    </>
  );
}
