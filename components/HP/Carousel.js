import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 bg-blueWine">
        <h1 className="text-white text-center pt-16 text-4xl sm:text-5xl">« Entre nous »</h1>
        <div className="embla py-10">
          <div className="embla__viewport cursor-grab" ref={viewportRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide m-auto" key={index}>
                  <div className="embla__slide__inner sm:px-24 text-center">
                    <p className="text-3xl sm:text-4xl text-white font-light">{mediaByIndex(index).commentaire}</p>
                    <p className="mt-5 text-sm text-white">{mediaByIndex(index).pseudo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev hidden sm:block"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next hidden sm:block"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

const media1 = {
  commentaire:
    "Je trouve ce concept très sympa, notamment pour quelqu'un qui ne veut/peut pas constituer de stock.",
  pseudo: "Jérôme D. (78)",
};
const media2 = {
  commentaire:
    'Pour le blanc (domaine de Saint Cosme, "Les Deux Albions"), ma fille restauratrice a pour expression "Une tuerie !"\n D\'ailleurs s\'il en reste deux cartons, je suis preneur.',
  pseudo: "Chantal P. (69)",
};
const media3 = {
  commentaire:
    "Je trouve ce concept très sympa, notamment pour quelqu'un qui ne veut/peut pas constituer de stock.",
  pseudo: "Jérôme D. (78)",
};

const media = [media1, media2, media3];
const mediaByIndex = (index) => media[index % media.length];
