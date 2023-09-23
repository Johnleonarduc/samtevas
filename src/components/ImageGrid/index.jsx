import './index.css';

const images = [
     {
        name: 'meeting-space',
        width: '60vmin',
        height: '40vmin'
     },
     {
        name: 'wardrobe',
        width: '35vmin',
        height: '50vmin'
     },
     {
        name: 'wooden-chair',
        width: '35vmin',
        height: '50vmin'
     },
     {
        name: 'classroom-desks',
        width: '60vmin',
        height: '40vmin'
     }
    ];

const ImageGrid = () => {
    return (
        <div className="image-grid-wrapper">
            {images.map((image, i)=> (
                <div 
                    key={i}
                    className={image.name}
                    style={{
                        background: `url(/images/${image.name}.svg) no-repeat center center / cover`,
                        width: image.width,
                        height: image.height
                        }}
                    >
        
                    </div>
            ))}
        </div>
    )
};

export default ImageGrid;