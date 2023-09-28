import { Button, IconWrapper } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
 

   <Hero>
   <Button
     className=" translate-y-[-1rem] animate-fade-in opacity-0 "
     href="/"
     variant="secondary"
     size="small"
   >
     <span>Last Year You Said Next Year</span>{" "}
     <IconWrapper>→</IconWrapper>
   </Button>
   <HeroTitle className=" translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ">
     Linear is a better way <br className="hidden md:block" /> to build
     products
   </HeroTitle>
   <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
     Meet the new standard for modern software development.{" "}
     <br className="hidden md:block" /> Streamline issues, sprints, and
     product roadmaps.
   </HeroSubtitle>
   <Button
     className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
     href="/"
     variant="primary"
     size="large"
   >
     <span>Get Started </span>
     <IconWrapper>
       <ChevronIcon />
     </IconWrapper>
   </Button>
   <HeroImage />
 </Hero>
  );