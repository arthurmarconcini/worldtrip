import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react'
import NextImage from 'next/image'

import Logo from '../public/logo.png'
import Airplane from '../public/airplane.svg'
import Cocktail from '../public/cocktail.svg'
import Building from '../public/building.svg'
import Earth from '../public/earth.svg'
import Museum from '../public/museum.svg'
import Surf from '../public/Surf.svg'
import Slider from '../components/Slider'

const continents = [
  {
    name: 'Europa',
    description: 'O continente mais antigo',
    image: '/europe.jpg'
  },
  {
    name: 'North America',
    description: 'O continente mais antigo',
    image: '/northamerica.jpg'
  },
  {
    name: 'South America',
    description: 'O continente mais antigo',
    image: '/latinamerica.jpg'
  },
  {
    name: 'Africa',
    description: 'O continente mais antigo',
    image: '/africa.jpg'
  },
  {
    name: 'Asia',
    description: 'O continente mais antigo',
    image: '/asia.jpg'
  },
  {
    name: 'Oceania',
    description: 'O continente mais antigo',
    image: '/oceania.jpg'
  }
]

export default function Home() {
  return (
    <Box>
      <Center height={100}>
        <NextImage src={Logo} alt="Logo" />
      </Center>
      <Flex
        bgImage="url('/background.png')"
        backgroundSize="cover"
        w="100%"
        h="335px"
        px="200px"
      >
        <Flex w="900px" direction="column" justifyContent="center">
          <Heading
            as="h1"
            mb="20px"
            fontWeight={500}
            lineHeight="54px"
            fontSize={36}
            textColor="text.100"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            textColor="text.100"
            fontWeight={400}
            fontSize="20px"
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você
            <br /> sempre sonhou.
          </Text>
        </Flex>
        <Box position="relative" width="100%">
          <Box position="absolute" rotate="3" right={1} top={20} minW="240px">
            <NextImage src={Airplane} alt="Avião" width="417px" />
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" mx="140px" mt="100px">
        <Box textAlign="center">
          <NextImage src={Cocktail} alt="Taça" />
          <Text
            color="dark.100"
            fontSize="1.5rem"
            fontWeight="600"
            lineHeight="36px"
            mt="24px"
          >
            vida noturna
          </Text>
        </Box>
        <Box textAlign="center">
          <NextImage src={Surf} alt="Prancha" />
          <Text
            color="dark.100"
            fontSize="1.5rem"
            fontWeight="600"
            lineHeight="36px"
            mt="24px"
          >
            praia
          </Text>
        </Box>
        <Box textAlign="center">
          <NextImage src={Building} alt="Construção" />
          <Text
            color="dark.100"
            fontSize="1.5rem"
            fontWeight="600"
            lineHeight="36px"
            mt="24px"
          >
            moderno
          </Text>
        </Box>
        <Box textAlign="center">
          <NextImage src={Museum} alt="Museu" />
          <Text
            color="dark.100"
            fontSize="1.5rem"
            fontWeight="600"
            lineHeight="36px"
            mt="24px"
          >
            clássico
          </Text>
        </Box>
        <Box textAlign="center">
          <NextImage src={Earth} alt="Planeta Terra" />
          <Text
            color="dark.100"
            fontSize="1.5rem"
            fontWeight="600"
            lineHeight="36px"
            mt="24px"
          >
            e mais...
          </Text>
        </Box>
      </Flex>
      <Divider
        m="80px auto 52px"
        width={90}
        borderBottomWidth={2}
        borderColor="dark.100"
        opacity={1}
      />
      <Heading
        as="h1"
        mb="52px"
        mx="140px"
        fontSize="2.25rem"
        fontWeight="500"
        lineHeight="3.375rem"
        textAlign="center"
        color="dark.100"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Box>
  )
}
