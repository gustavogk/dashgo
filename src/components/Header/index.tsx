import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'

import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
            { !isWideVersion && (
                <IconButton 
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />} 
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}
            <Logo />

            { isWideVersion && <SearchBox /> }
            
            <Flex align="center" ml="auto" >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>     
    );
}