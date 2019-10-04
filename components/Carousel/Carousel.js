/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



const CreateCarousel = () => {
   const container = document.querySelector( '.carousel-container' );

   const carousel = document.createElement( 'div'  );
   const img1     = document.createElement( 'img'  );
   const img2     = document.createElement( 'img'  );
   const img3     = document.createElement( 'img'  );
   const img4     = document.createElement( 'img'  );
   const controls = document.createElement( 'div'  );
   const left     = document.createElement( 'div'  );
   const right    = document.createElement( 'div'  );
   const btn1     = document.createElement( 'span' );
   const btn2     = document.createElement( 'span' );
   const btn3     = document.createElement( 'span' );
   const btn4     = document.createElement( 'span' );

   const img1_src = './assets/carousel/mountains.jpeg';
   const img2_src = './assets/carousel/computer.jpeg';
   const img3_src = './assets/carousel/trees.jpeg';
   const img4_src = './assets/carousel/turntable.jpeg';

   img1.setAttribute( 'src', img1_src );
   img2.setAttribute( 'src', img2_src );
   img3.setAttribute( 'src', img3_src );
   img4.setAttribute( 'src', img4_src );
   
   img1.classList.add( 'slide', 'w3-animate-fading' );
   img2.classList.add( 'slide', 'w3-animate-fading' );
   img3.classList.add( 'slide', 'w3-animate-fading' );
   img4.classList.add( 'slide', 'w3-animate-fading' );
   
   carousel.classList.add( 'carousel', 'w3-content', 'w3-display-container' )
   
   controls.classList.add( 'controls', 'w3-center', 'w3-padding', 'w3-large', 'w3-text-white', 'w3-display-bottomleft' );
   
   left.classList.add ( 'w3-left', 'w3-padding', 'w3-hover-orange'  );
   right.classList.add( 'w3-right', 'w3-padding', 'w3-hover-orange' );
   
   left.textContent  = '❮';
   right.textContent = '❯';
   
   btn1.classList.add( 'w3-badge', 'showBtn', 'w3-border', 'w3-transparent', 'w3-hover-orange' );
   btn2.classList.add( 'w3-badge', 'showBtn', 'w3-border', 'w3-transparent', 'w3-hover-orange' );
   btn3.classList.add( 'w3-badge', 'showBtn', 'w3-border', 'w3-transparent', 'w3-hover-orange' );
   btn4.classList.add( 'w3-badge', 'showBtn', 'w3-border', 'w3-transparent', 'w3-hover-orange' );
   
   carousel.appendChild( img1     );
   carousel.appendChild( img2     );
   carousel.appendChild( img3     );
   carousel.appendChild( img4     );
   carousel.appendChild( controls );
   controls.appendChild( left     );
   controls.appendChild( right    );
   controls.appendChild( btn1     );
   controls.appendChild( btn2     );
   controls.appendChild( btn3     );
   controls.appendChild( btn4     );
   
   container.appendChild( carousel );
};

CreateCarousel();


class Slideshow {
   constructor() {
      this.timer      = null;
      this.slideIndex = 1;
      
      this.slides     = document.querySelectorAll( '.slide' );
      this.dots       = document.querySelectorAll( '.showBtn' );
   }
   
   showImgs() {
      const current = this.slideIndex - 1;
      
      
      
      this.slides.forEach( e => { e.style.display = 'none'; });
      
      this.dots.forEach( e => { e.className = e.className.replace(' w3-white', '') });
      
      this.slides[current].style.display = 'block';
      this.dots[current].className += ' w3-white';
   }
   
   controlHndlr() {
      const controls = document.querySelector( '.controls' );
      
      controls.style.visibility = controls.style.visibility !== 'visible' ? 'visible' : 'hidden';
   }
   
   changeImg( n ) {
      if ( ( this.timer !== undefined ) && ( typeof this.timer !== 'undefined' ) ) { clearTimeout( this.timer ); }
      
      if ( n === -1 ) { this.slideIndex += -2; }
      
      this.carousel();
   }
   
   setImg( n ) {
      if ( ( this.timer !== undefined ) && ( typeof this.timer !== 'undefined' ) ) { clearTimeout( this.timer ); }
      
      this.slideIndex = n;
      this.carousel();
   }
   
   carousel() {
      if ( this.slideIndex > this.slides.length ) { this.slideIndex = 1; }
      else if ( this.slideIndex < 1 ) { this.slideIndex = this.slides.length; }
      
      this.showImgs(this.slideIndex);
      this.slideIndex++;
      
      if ( ( this.timer === undefined ) || ( typeof this.timer === 'undefined' ) || ( this.timer === null ) ) {
         const _this = this;
         this.timer = setTimeout( function() { _this.carousel(); }, 8000);
      }
   }
   
}

const myShow = new Slideshow();


const addListeners = () => {
   const carousel = document.querySelector( '.carousel' );
   const left     = document.querySelector( '.w3-left'   );
   const right    = document.querySelector( '.w3-right'  );
   
   const dots     = document.querySelectorAll( '.showBtn' );
   
   carousel.addEventListener( 'mouseover', myShow.controlHndlr );
   carousel.addEventListener( 'mouseout',  myShow.controlHndlr );
   
   left.addEventListener( 'click', function() { myShow.changeImg(-1); } );
   right.addEventListener( 'click', function() { myShow.changeImg(1); } );
   
//   dots.forEach( (e, i) => {
//      e.addEventListener( 'click', function() { myShow.setImg( i - 1 ); } );
//   });
//   console.log(dots);
};

addListeners();

myShow.setImg(1);

