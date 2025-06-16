import { HStack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { links } from 'utils/links'

const NavLinks = (): JSX.Element => {
  const { asPath } = useRouter()

  return (
    <Box as="nav" display={{ base: 'none', lg: 'block' }}>
      <HStack as="ul" display="flex" spacing={9} listStyleType="none">
        {links.map(link => (
          <li key={link.id}>
            <NextLink href={link.url} passHref>
              <Text
                as="a"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="0.125em"
                textTransform="uppercase"
                textDecoration="none"
                color={asPath === link.url ? 'accent' : 'white'}
                _hover={{ color: 'accent' }}
                transition="color 0.2s linear"
                aria-current={asPath === link.url ? 'page' : undefined}
              >
                {link.text}
              </Text>
            </NextLink>
          </li>
        ))}
      </HStack>
    </Box>
  )
}

export default NavLinks
