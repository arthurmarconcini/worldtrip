import {
  Box,
  Heading,
  HStack,
  Container,
  Text,
  Center,
  Flex,
  Wrap,
  WrapItem,
  Image,
  Avatar
} from '@chakra-ui/react'

import { GetStaticPaths, GetStaticProps } from 'next'
import Card from '../../components/Card'
import Header from '../../components/Header/Header'

interface City {
  country: string
  name: string
  image: string
  flag?: string
}

interface ContinentProps {
  data: {
    name: string
    description: string
    image: string
    info: {
      countries: number
      languages: number
      cities: City[]
    }
  } | null
}

const continents = [
  {
    name: 'Europa',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    image: '/europe.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          country: 'França',
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png',
          flag: 'https://cdn-icons-png.flaticon.com/512/197/197560.png'
        },
        {
          country: 'Reino Unido',
          name: 'Londres',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Skyscrapper_Shard_London.jpg',
          flag: 'https://cdn-icons-png.flaticon.com/512/323/323270.png'
        }
      ]
    }
  },
  {
    name: 'North America',
    description: 'O continente mais antigo',
    image: '/northamerica.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        },
        {
          name: 'Londres',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        }
      ]
    }
  },
  {
    name: 'South America',
    description: 'O continente mais antigo',
    image: '/latinamerica.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        },
        {
          name: 'Londres',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        }
      ]
    }
  },
  {
    name: 'Africa',
    description: 'O continente mais antigo',
    image: '/africa.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        },
        {
          name: 'Londres',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        }
      ]
    }
  },
  {
    name: 'Asia',
    description: 'O continente mais antigo',
    image: '/asia.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        },
        {
          name: 'Londres',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        }
      ]
    }
  },
  {
    name: 'Oceania',
    description: 'O continente mais antigo',
    image: '/oceania.jpg',
    info: {
      countries: '54',
      languages: '5',
      cities: [
        {
          name: 'Paris',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        },
        {
          name: 'Londres',
          image:
            'https://super.abril.com.br/wp-content/uploads/2019/04/cidade-nova-br.png'
        }
      ]
    }
  }
]

export default function Continent(props: ContinentProps) {
  return (
    <Box minH="100vh">
      <Header />
      {props.data !== null ? (
        <>
          <Box
            background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)),url(${
              props.data!.image
            })`}
            backgroundSize="cover"
            w="100%"
            h="500px"
            position="relative"
          >
            <Heading
              mx="140px"
              position="absolute"
              bottom="59px"
              fontWeight={600}
              fontSize="2.5rem"
              lineHeight="4.5rem"
              color="info.200"
            >
              {props.data!.name}
            </Heading>
          </Box>
          <HStack margin="5rem 8.75rem">
            <Container
              mr="70px"
              color="dark.100"
              fontWeight="400"
              fontSize="1.5rem"
              lineHeight="2.25rem"
              textAlign="justify"
            >
              {props.data!.description}
            </Container>
            <HStack flex="1" justify="center" spacing={42}>
              <Box>
                <Text
                  as="h1"
                  fontWeight={600}
                  fontSize="3rem"
                  lineHeight="2.25rem"
                  color="highlight.100"
                  textAlign="center"
                  mb="10px"
                >
                  {props.data!.info.countries}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize="1.5rem"
                  lineHeight="2.25rem"
                  color="dark.100"
                  textAlign="center"
                >
                  Países
                </Text>
              </Box>
              <Box>
                <Text
                  as="h1"
                  fontWeight={600}
                  fontSize="3rem"
                  lineHeight="2.25rem"
                  color="highlight.100"
                  textAlign="center"
                  mb="10px"
                >
                  {props.data!.info.languages}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize="1.5rem"
                  lineHeight="2.25rem"
                  color="dark.100"
                  textAlign="center"
                >
                  Línguas
                </Text>
              </Box>
              <Box>
                <Text
                  as="h1"
                  fontWeight={600}
                  fontSize="3rem"
                  lineHeight="2.25rem"
                  color="highlight.100"
                  textAlign="center"
                  mb="10px"
                >
                  {props.data!.info.cities.length}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize="1.5rem"
                  lineHeight="2.25rem"
                  color="dark.100"
                  textAlign="center"
                >
                  cidades +100
                </Text>
              </Box>
            </HStack>
          </HStack>
          <Flex
            flexDirection="column"
            gap="40px"
            justifyContent="center"
            margin="0 140px 50px"
          >
            <Heading
              as="h1"
              fontWeight={500}
              fontSize="3.25rem"
              lineHeight="3.375rem"
              color="dark.100"
            >
              Cidades +100
            </Heading>

            <Wrap spacing="3.3rem">
              {props.data.info.cities.map(city => (
                <Card city={city} />
              ))}
            </Wrap>
          </Flex>
        </>
      ) : (
        <Box p="250px 0">
          <Center>Pagina não existe</Center>
        </Box>
      )}
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params!.continent

  const continent = continents.find(
    continent => continent.name.toLowerCase() === slug
  )
  console.log(continent)

  if (!continent) {
    return {
      props: {
        data: null
      }
    }
  }

  return {
    props: { data: { ...continent } },
    revalidate: 60 * 30 // 30 minutes
  }
}
