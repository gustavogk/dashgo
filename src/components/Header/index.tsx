import { Flex } from '@chakra-ui/react'

import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo'

export function Header() {
    return (
        <Flex 
         as="header" 
         w="100%"
         h="20"
         maxWidth={1480}
         mx="auto"
         mt="4"
         px="6"
         align="center"
        >
            <Logo />

            <SearchBox />
            
            <Flex align="center" ml="auto" >
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>     
    );
}