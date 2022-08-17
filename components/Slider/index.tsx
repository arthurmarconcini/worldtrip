import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

interface SliderProps {
  continents: {
    name: string
    description: string
    image: string
  }[]
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Box margin="0 240px" mb="52px" minWidth={640}>
      <Swiper
        tag="section"
        wrapperTag="ul"
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.sliderWrapper}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.name} tag="li">
            <Link href={`/continent/${continent.name.toLowerCase()}`} passHref>
              <Flex
                as="a"
                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)),url(${continent.image})`}
                backgroundSize="cover"
                w="100%"
                h="426px"
                direction="column"
                alignItems="center"
                justifyContent="center"
                _hover={{ cursor: 'pointer' }}
              >
                <Heading
                  fontSize="3rem"
                  fontWeight="bold"
                  lineHeight="4.5rem"
                  mb="16px"
                  color="info.200"
                >
                  {continent.name}
                </Heading>
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="36px"
                  color="info.100"
                >
                  {continent.description}
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
