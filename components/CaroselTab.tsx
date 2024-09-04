import Carousel from '../components/Carousal'

const CarouselTab = () => {
  const slides = [
    {
      note: 'Starting from $18 per day',
      title: 'Fast and Effective Service',
      description: 'We let YOU pick the car that will ensure the best trip ever.Give us a shout and we will get it ready for you!',
      imageUrl: '/assets/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg',
    },
    {
      note: 'Starting from $18 per day',
      title: 'Global Online Car Rental',
      description: 'Order cars all over the world sing our website service! We will make sure that you receive it on time.',
      imageUrl: '/assets/marc-kleen-5unH6DaHQoc-unsplash.jpg',
    },
    {
      note: 'Car Rental service',
      title: 'Favorite Rental Service',
      description: 'The Best Final Cars Rental Rate! No Hidden Extra Charges! Trusted By 7 Millions Customer and Counting!',
      imageUrl: '/assets/jd-weiher-r_I6Y3eFrXE-unsplash.jpg',
    },
  ];

  return (
    <div className="mx-4 md:mx-20 rounded-sm">
      <Carousel slides={slides} />
    </div>
  );
};

export default CarouselTab;
