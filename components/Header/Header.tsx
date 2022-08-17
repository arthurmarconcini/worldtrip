import NextImage from 'next/image'
import { Box, Center, Link } from '@chakra-ui/react'

import Logo from '../../public/logo.png'
import NextLink from 'next/link'

interface HeaderProps {
  isHome?: boolean
}

export default function Header({ isHome }: HeaderProps) {
  return (
    <Center height={100} position="relative">
      {isHome ? (
        ''
      ) : (
        <Box position="absolute" left="140px" fontSize="32px">
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: 'none' }}>&lt;</Link>
          </NextLink>
        </Box>
      )}
      <NextImage src={Logo} alt="Logo" />
    </Center>
  )
}
