import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

const CustomSlider = () => {
  return (
    <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
        className='w-full h-96'
      >
        <SplideSlide className='w-full h-96'>
          <img className="slide-img w-full h-96" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtv01D5umpYJae-xi-WvjpBCTAjdBcCpdJ_zsbTp5E5nfdU8TvhOJV6aarVGbfDCn7ceF4Bzly7xjDPAw0lVBplN_D5Di_7paAcHGf6va2lpwPaUXjwRR40D6bAVxjJ4R7bhAOLa5hEkuk/s800/time_cupsule.png" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide className='w-full h-96'>
          <img className="slide-img w-full h-96" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMaUUhG4T-uG_0Fqh54ZA2YE-GHx1U9APdcWgwCMqY1I7soPpZwE6ukdeZDKCKMs3pcigWvDjznGcs58OTShpXmRa2UBfNkOoI315R-A4XrodBFwIyLlWHOr0fRYtd4UAxrMec-Y5VxVyA/s800/time_cupsule_kids.png" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide className='w-full h-96'>
          <img className="slide-img w-full h-96" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifSC82CQPUiFkNrHZ0icQpkoJ4TAQKgn9eoeyakwaiXtrP9pxdlspBbgvjBWImWnY5ZcBc0XKtA1WpnYqv614GaDVcC2P43jzOj5XjuPDmviXDp2KFUfIunQQwkM2nrrzjjpFD-yjcWy4/s800/seikou_syukufuku_woman.png" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide>
  );
}

export default CustomSlider;
