import './index.css';

const aboutText = [
    "Samtevas embodies the essence of creativity, innovation, and royal elegance in interior decoration. We are a dedicated team of interior decorators committed to transforming living spaces into havens of unparalleled luxury and style. Our unwavering dedication to creative innovation fuels our quest to redefine interior design.",
    "At Samtevas, we believe that every home deserves to radiate a sense of regal splendor. With a touch of artistic flair and a commitment to innovation, we craft interiors that seamlessly blend modern trends with timeless sophistication. Our meticulous attention to detail ensures that each project is a unique masterpiece, tailored to reflect your individuality",
    "Step into the world of Samtevas, where we bring your interior design aspirations to life. With us, you'll experience the magic of innovative creativity, and your living spaces will resonate with a sense of royal refinement that truly sets us apart. Welcome to Samtevas, where innovation meets royal elegance in every corner of your home.",
    ];

const Description = ()=> {
    return (
        <div className='about-text'>
            <div className="text-content">
                {aboutText.map((paragraph, i)=>(<p key={i}>{paragraph}</p>))}
            </div>
        </div>
    )
};

export default Description;