import { Box, WrapItem, Image, Heading, Text, Avatar } from '@chakra-ui/react'

interface CardProps {
  city: {
    name: string
    country?: string
    image?: string
    flag?: string
  }
}

export default function Card({ city }: CardProps) {
  return (
    <WrapItem>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image w="280px" h="186px" src={city.image} alt={'Foto do Pais'} />

        <Box
          p="24px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="baseline"
            gap="12px"
            fontFamily="Barlow, sans-serif"
          >
            <Heading
              as="h2"
              fontSize="1.25rem"
              lineHeight="1.5625rem"
              fontWeight={600}
              color="dark.100"
            >
              {city.name}
            </Heading>
            <Text
              as="h3"
              fontWeight={500}
              fontSize="1rem"
              lineHeight="1.5625rem"
              color="dark.50"
            >
              {city.country}
            </Text>
          </Box>
          <Avatar w="30px" h="30px" src={city.flag} />
        </Box>
      </Box>
    </WrapItem>
  )
}
