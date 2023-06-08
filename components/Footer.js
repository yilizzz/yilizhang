import React from "react";
import Link from "next/link";
import Image from 'next/image'

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id="contact" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          <p>{description}</p>
          <div className="">
            {buttons.map((value, index) =>
              value.isPrimary ? (
                <Link
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="btn btn-primary my-1 mx-3"
                >
                  {value.title}
                </Link>
              ) : (
                <Link
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="btn btn-outline-primary my-1 mx-3"
                >
                  {value.title}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
            Yili
          {' '}
          <Image src="/favicon.ico" alt="icon" width={25} height={25} />{' '}
          yilizhang3@gmail.com
        </small>
      </div>
    </footer>
  );
};
