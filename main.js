/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  */
        
function updateClock() {       
            const date = new Date()         /* creates a new Date object from the Date class */
            const hours = date.getHours().toString().padStart(2,'0');       /* calls the new date object .getHours() which - */
            const mins = date.getMinutes().toString().padStart(2, '0');         /*  -retrieves current Hour, same for mins/secs */
            const seconds = date.getSeconds().toString().padStart(2,'0');     /* .toString() converts to a 2 digit string*/
            const day = date.getDate().toString().padStart(2, '0');       /*getDay = day of the week, getDate() = day of month  */
            const month = (date.getMonth() + 1).toString().padStart(2, '0');     /*Off by one cause it starts at 0(0-11), +1 makes it (1-12)*/                                                                       /*makes it as the normal 1-12 */

                                                                        /* padStart (2 digits long, fills any blank with '0')  */

            const year = date.getFullYear();               /* returns four digit year */                

        const timeString = hours + ":" + mins + ":" + seconds;  /*const var timeString, uses str concatenation to print as one*/
        const dateString = month + "-" + day + "-" + year;

        document.getElementById("clockDate").innerHTML = 'Welcome to my site! Today is ' + dateString + '. Currently it is ' + timeString ; 
        /*doc.getElbyID(name of <div>) */   
        }
                                            /*innerHTML retrieves the HTML content inside of an element */
                                            /* pulls variables like C++, use + and "" to concatenate and add between variables */

        /*Updates the clock every second */
        setInterval(updateClock, 1000);

        /*calls it right after updating to ensure theres no delay */
        updateClock();


/* Function scrolls to section named target box when Introduction button is pressed*/
function scrollToSection() 
    {
        document.getElementById("target-box").scrollIntoView({behavior: "smooth"});
    }


 /* Email trick for bots. Bots don't see this when scraping raw HTML */
 document.addEventListener("DOMContentLoaded", ()=> {
  const user = "trevor";
  const domain = "trevorbelt.dev";
  const email = `${user}@${domain}`;
  const link = document.createElement("a");
  link.href = `mailto:${email}`;
  /* link.textContent = "Email Me";*/
  document.getElementById("email-link").appendChild(link);
    });


/* Gets dynamic year for footer section*/
document.getElementById("year").textContent = new Date().getFullYear();

/*-------------------------------------------UNUSED/TO BE USED-----------------------------------------------------------------------*/
    /*
    <div class="binaryBg"></div>
    <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
    <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
    <script>
        document.querySelector(".binaryBg").textContent = "01".repeat(1000);
        gsap.registerPlugin(ScrollTrigger)

            gsap.to(".binaryBg", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".topbar",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });

            gsap.to("binaryBg", {
                y: "-100vh",
                duration: 20,
                repeat: -1,
                ease: "linear"
            });
    */
       