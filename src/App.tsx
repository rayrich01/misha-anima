import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { WelcomeSection } from "@/sections/WelcomeSection";
import { ServicesGrid } from "@/sections/ServicesGrid";
import { ServicesGridAlt } from "@/sections/ServicesGridAlt";
import { ServicesGridExtended } from "@/sections/ServicesGridExtended";
import { SectionHeading } from "@/components/SectionHeading";
import { GallerySection } from "@/sections/GallerySection";
import { VideoSection } from "@/sections/VideoSection";
import { NichesSection } from "@/sections/NichesSection";
import { Footer } from "@/sections/Footer";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-apple_system">
      <div className="box-border caret-transparent"></div>
      <div className="absolute box-border caret-transparent hidden left-[-20000px]">
        <img
          src="https://c.animaapp.com/mho76w1tvCmShf/assets/3484811.png"
          alt="builderall"
          title="builderall"
          className="box-border caret-transparent"
        />
        <h5 className="text-xl font-medium box-border caret-transparent mb-2">
          <span className="box-border caret-transparent block leading-7">
            <span className="text-white box-border caret-transparent">
              <span className="text-[37px] box-border caret-transparent leading-[51.8px]">
                <span className="box-border caret-transparent font-montserrat">
                  Discover The Amazing Works of...
                </span>
              </span>
            </span>
          </span>
        </h5>
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] mb-2">
          <span className="box-border caret-transparent font-lato_black">
            <span className="text-[50px] box-border caret-transparent leading-[60px]">
              <span className="box-border caret-transparent block leading-[70px]">
                <span className="text-white box-border caret-transparent">
                  Misha Creations
                </span>
              </span>
            </span>
          </span>
        </h2>
        <h6 className="text-black text-[17px] font-medium box-border caret-transparent leading-[17px] mb-2 font-muli">
          <span className="text-white box-border caret-transparent">
            <span className="box-border caret-transparent">
              <span className="text-lg box-border caret-transparent">
                <span className="box-border caret-transparent block leading-[19.8px]">
                  <span className="box-border caret-transparent block leading-[25.2px]">
                    Contact Us Today for More Information.
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h6>
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] text-center mb-2">
          <span className="text-3xl box-border caret-transparent leading-9">
            Why You Should Have a Master Faux Artist &amp; Muralist do Custom
            Artwork in Your Home...
          </span>
        </h2>
        <p className="box-border caret-transparent mb-4">
          Elevate your home to a realm of extraordinary beauty and artistic
          mastery with the expertise of a Master Faux Artist &amp; Muralist.
          Experience the transformative power of custom artwork that transcends
          the ordinary and ignites your space with unparalleled elegance.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          With years of training, honing their craft to perfection, our Master
          Faux Artists &amp; Muralists possess a unique combination of skill,
          creativity, and vision. From intricate faux finishes that mimic the
          richness of marble or the texture of wood to breathtaking murals that
          transport you to distant lands or immerse you in captivating
          narratives, their artistry knows no bounds.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          Entrusting your home to a Master Faux Artist &amp; Muralist means
          inviting pure excellence into your space, where every stroke is a
          testament to meticulous craftsmanship and attention to detail. Witness
          firsthand how their artistic prowess breathes life into your walls,
          creating a personalized sanctuary that embodies your style and
          aspirations.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          Discover the immeasurable value of custom artwork brought to life by a
          true master and let your home become a masterpiece that leaves a
          lasting impression on all who enter.
        </p>
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] text-center mb-2">
          <span className="text-amber-200 box-border caret-transparent">
            Welcome to Misha Creations!
          </span>
        </h2>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-[50px] box-border caret-transparent leading-[50px]">
                <span className="box-border caret-transparent font-muli_black">
                  Misha&#39;s Creations
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <div className="box-border caret-transparent font-muli_black">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-6"></span>
                </span>
              </span>
            </div>
            <br className="box-border caret-transparent" />
            <span className="text-amber-200 box-border caret-transparent">
              <div className="box-border caret-transparent font-muli_black">
                <span className="text-xl box-border caret-transparent leading-5">
                  Meet Misha
                </span>
              </div>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                  
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Airbrushed Skies And Galaxies
                </span>
              </span>
            </span>
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent"></span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Decorative Arts
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Cabinet Finishes
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <div className="box-border caret-transparent font-muli_black">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-6"></span>
                </span>
              </span>
              <span className="text-xl box-border caret-transparent leading-5"></span>
            </div>
            <br className="box-border caret-transparent" />
            <span className="text-amber-200 box-border caret-transparent">
              <div className="box-border caret-transparent font-muli_black">
                <span className="text-xl box-border caret-transparent leading-5">
                  Murals
                </span>
              </div>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Venetian Plaster
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Marble
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Faux Wood Marquetry
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="text-amber-200 box-border caret-transparent">
            Discover More... 
          </span>
          <strong className="font-bold box-border caret-transparent">
            <a
              type="page"
              value=""
              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
            >
              CLICK HERE!
            </a>
          </strong>
          <br className="box-border caret-transparent" />
          <span className="box-border caret-transparent font-open_sans">
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Happy Feet Concrete
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Children&#39;s Themescapes
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
            <br className="box-border caret-transparent" />
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <div className="box-border caret-transparent font-muli_black">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-6"></span>
                </span>
              </span>
            </div>
            <br className="box-border caret-transparent" />
            <span className="text-amber-200 box-border caret-transparent">
              <div className="box-border caret-transparent font-muli_black">
                <span className="text-xl box-border caret-transparent leading-5">
                  Niches
                </span>
              </div>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-3xl box-border caret-transparent leading-[30px]">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-white box-border caret-transparent">
                  <span className="box-border caret-transparent block leading-9"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="text-xl box-border caret-transparent leading-5">
                <span className="box-border caret-transparent font-muli_black">
                  <br className="box-border caret-transparent" />
                  Ceilings
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent font-open_sans">
            <span className="box-border caret-transparent"></span>
            <span className="text-sm box-border caret-transparent leading-[21px]">
              <span className="box-border caret-transparent block leading-[19.6px]">
                <span className="text-amber-200 box-border caret-transparent">
                  Discover More...
                </span>
                 {" "}
                <strong className="font-bold box-border caret-transparent">
                  <a
                    type="page"
                    value=""
                    className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                  >
                    CLICK HERE!
                  </a>
                </strong>
                <br className="box-border caret-transparent" />
                <strong className="font-bold box-border caret-transparent"></strong>
                <br className="box-border caret-transparent" />
                <strong className="font-bold box-border caret-transparent"></strong>
              </span>
            </span>
            <span className="box-border caret-transparent"></span>
          </span>
        </p>
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] mb-2">
          <span className="text-white box-border caret-transparent">
            <span className="text-3xl box-border caret-transparent leading-9">
              BEAUTIFUL MURALS!
            </span>
          </span>
        </h2>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-violet-500 box-border caret-transparent">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-6xl box-border caret-transparent leading-[60px]">
                  <span className="box-border caret-transparent block leading-[72px]"></span>
                </span>
              </span>
            </span>
            <span className="text-amber-200 box-border caret-transparent">
              <span className="box-border caret-transparent font-muli_black">
                <span className="text-6xl box-border caret-transparent leading-[60px]">
                  GALLERY
                </span>
              </span>
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-center mb-4">
          <span className="box-border caret-transparent block leading-4">
            <span className="text-6xl box-border caret-transparent leading-[60px]">
              <div className="text-amber-200 box-border caret-transparent font-muli">
                <span className="box-border caret-transparent block leading-[72px]"></span>
              </div>
            </span>
            <span className="box-border caret-transparent block leading-[22.4px]">
              <span className="text-xl box-border caret-transparent leading-7">
                <div className="text-amber-200 box-border caret-transparent font-muli">
                  The Beautiful Creations of Misha!
                </div>
              </span>
            </span>
            <span className="box-border caret-transparent font-muli_black">
              <span className="text-white box-border caret-transparent">
                <span className="text-6xl box-border caret-transparent leading-[60px]"></span>
              </span>
            </span>
          </span>
        </p>
        <h4 className="text-black text-[35px] font-medium box-border caret-transparent leading-[38.5px] text-center mb-2 font-muli">
          <span className="text-amber-200 box-border caret-transparent">
            <span className="box-border caret-transparent">
              Discover More About King BJ Garrett!
            </span>
          </span>
        </h4>
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] text-right mb-2">
          <span className="text-white box-border caret-transparent">
            <span className="text-[27px] box-border caret-transparent leading-[32.4px]">
              AMAZING NITCHES!
            </span>
          </span>
        </h2>
      </div>
      <div className="absolute bg-white box-border caret-transparent h-full overflow-x-hidden overflow-y-auto w-full z-[9999]">
        <div className="relative box-border caret-transparent">
          <div className="box-border caret-transparent hidden"></div>
          <div className="relative box-border caret-transparent">
            <Header />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <Hero />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <WelcomeSection />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <ServicesGrid />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <ServicesGridAlt />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <ServicesGridExtended />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <SectionHeading />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <GallerySection />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <VideoSection />
            <div className="box-border caret-transparent hidden"></div>
            <div className="box-border caret-transparent hidden"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <NichesSection />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="relative box-border caret-transparent">
            <Footer />
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
        </div>
        <LoadingOverlay />
      </div>
    </body>
  );
};
