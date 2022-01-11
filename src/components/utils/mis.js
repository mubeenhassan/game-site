import AOS from 'aos';;

export const AosInitializer =()=>{
 AOS.init({
   duration: 1000,
   easing: 'ease-in-out',
 })
}
export const SCROLL_BEHAVIOUR = {
 'data-aos': 'fade-up',
}