import batala from "../assets/images/batala.png";
import hoagiefest from "../assets/images/hoagiefest.png";
import farmer from "../assets/images/farmer.png";
import archaeology from "../assets/images/archaeology.png";

const projects = [
  {
    id: 1,
    title: "Batala Philadelphia",
    image: batala,
    github: "https://github.com/LizCottrell/batalaphiladelphia",
    url: "http://www.batalaphiladelphia.com/",
    design: true,
    development: true,
    text:
      "I designed Batala Philadelphia's website using the logo as inspiration while keeping the message explicit and direct - \"this is what Batala is, and this is how you get in touch\". The website was developed using simple animations and a single page.  Because it's such a straightforward site I kept the technologies limited - this is only HTML & CSS on top of Bootstrap and a little PHP."
  },
  {
    id: 2,
    image: hoagiefest,
    development: true,
    title: "Wawa Hoagiefest",
    text:
      "I developed Wawa's 2016 Hoagiefest webpage, which was driven by SVG animations, colorful imagery, and interactive games."
  },
  {
    id: 3,
    image: farmer,
    development: true,
    title: "The Farmer & The Chef",
    text:
      "I developed The Farmer & The Chef's website for several years, creating a new custom WordPress theme for each iteration. Leveraging Bootstrap and the WordPress plugin Advanced Custom Fields, I was able to create a simple interface for..."
  },
  {
    id: 4,
    image: archaeology,
    design: true,
    title: "Archaeology and History",
    text:
      'I created a number of illustrations, maps, field drawings, report graphics, interpretive signs, posters, booklets, and figures over the years. In my role as an archaeologist, field drawings were a particular favorite of mine, where I would record in great detail artifacts and features in situ.  Later on, as a graphic design specialist, I taught myself the Adobe Creative Suite and expanded my services to include things like exhibit and interpretive signage design and fabrication. I also created my first website for the archaeology firm, <a href="https://www.hunterresearch.com/" target="_blank">Hunter Research</a>.'
  }
];

export default projects;
