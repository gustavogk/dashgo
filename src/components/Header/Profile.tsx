import { Flex, Text, Box, Avatar } from  '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right" >
                    <Text>Gustavo Assuncao</Text>
                    <Text color="gray.300" fontSize="small">
                                gust@gmail.com
                    </Text>
                 </Box>
            )}
            <Avatar size="md" name="Gustavo Assuncao" src="http://github.com/gustavogk.png"/>
        </Flex>
    );
}