import theme from '@/theme'
import { Avatar, Card, CardHeader, CardMedia, Rating } from '@mui/material'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ReviewsSlider = () => {
    const dates = [
        'June 06, 2024',
        'November 01, 2024',
        'July 03, 2024',
        'January 04, 2024',
        'July 03, 2024',
        'January 15, 2024',
        'October 30, 2024',
        'February 29, 2024',
    ]

    const burgerNames = [
        'Classic Cheeseburger',
        'Smoky BBQ Bacon Burger',
        'Spicy Jalapeño Crunch',
        'Mushroom Swiss Melt',
        'California Avocado Burger',
        'Triple Patty Monster',
        'Crispy Chicken Ranch Burger',
        'Vegan Black Bean Delight',
    ]

    const reviews = [5, 4.5, 5, 5, 4.5, 4.5, 5, 4.5]

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            autoplay={{ delay: 2000 }}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number, index) => (
                <SwiperSlide key={index}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: theme.palette.primary.main }}
                                ></Avatar>
                            }
                            title={burgerNames[index]}
                            subheader={
                                <Rating
                                    name="half-rating"
                                    defaultValue={reviews[index]}
                                    precision={0.5}
                                    readOnly
                                />
                            }
                        />
                        <CardMedia
                            component="img"
                            image={`/images/rev${number}.jpg`}
                            sx={{
                                height: 192,
                            }}
                        />
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ReviewsSlider
