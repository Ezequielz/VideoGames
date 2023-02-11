import { FC, useState } from 'react';
import Slider from 'react-slick';
import { Box, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import { Screenshot } from '../../games/interfaces/screenshots';


interface Props {
    images?: Screenshot[]
}

export const SlideShow: FC<Props> = ({ images }) => {


    const [nav1, setNav1] = useState<Slider | null>();
    const [nav2, setNav2] = useState<Slider | null>();
    
    const buttonStyle = {
        width: "30px",
        height: '40px',
        padding: '7px 0',
        background: '#80808087',
        color: 'white',
        border: '0px',
        
    };

    const SampleNextArrow = (props : any) => {
        const { className, style, onClick } = props
        return (
            <Box display={ {xs: 'none', sm: 'block'} }>

                <button 
                    className={className}
                    style={{  ...buttonStyle, ...style, borderRadius: '5px 0 0 5px', marginRight: '25px'  }}
                    onClick={onClick}
                >
                        {/* <ArrowForwardIosTwoToneIcon /> */}
                </button>
            </Box>

        )
      }
      
      const SamplePrevArrow =  (props : any)  => {
        const { className, style, onClick } = props
        return (
            <Box display={ {xs: 'none', sm: 'block'} }>
                <button 
                    className={className}
                    
                    style={{ ...buttonStyle,...style, borderRadius: '0 5px 5px 0', marginLeft: '25px', zIndex: 10  }}
                    onClick={onClick}
                >
                        {/* <ArrowBackIosNewTwoToneIcon /> */}
                </button>

            </Box>
        )
      }
      
      const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }
    



  return (
    <div>

    <Slider 
        asNavFor={nav2!} 
      
        ref={(slider1) => setNav1(slider1)}
        {...settings}
    >
    {
        images && images.length > 1 &&
        images!.map((image, index) => (
            // <CardMedia
            //     key={index}
             
            //     src='https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg'
            // />
            <img src={image.image} alt="" key={index} />

        ))
    }
    {/* {   movies && movies.length >1 &&
        movies.map( (video, index) =>(
            <Card 
            key={index}
            sx={{ maxWidth: 545 }}
            >
                <CardMedia
                    component="video"
                    poster={ video.preview }
                    controls
                    src={ video.data.max }
                />
                
            </Card>

        ))
    } */}
    </Slider>

    <Box style={{ marginTop:'5px' }}>
        <Slider
        asNavFor={nav1!}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        arrows={true}
        centerMode={true}
        focusOnSelect={true}
        {...settings}
        
        >
        {
            images && images.length > 1 &&
            images!.map((image, index) => (
                // <CardMedia
                //     key={index}
            
                //     src='https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg'
                // />
                <img src={image.image} alt="" key={index}/>

            ))
        }
        {/* {   movies && movies.length >1 &&
            movies.map( (video, index) =>(
                <Card 
                key={index}
                sx={{ maxWidth: 545 }}
                >
                    <CardMedia
                        component="video"
                        poster={ video.preview }

                        // autoPlay
                        // controls
                        
                    />
                    
                </Card>

            ))
        } */}
        </Slider>

    </Box>
  </div>
  )
}
