import React from 'react';
import { Skeleton as Skel, VStack, Center, NativeBaseProvider } from 'native-base';

export const Skeleton = () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                    borderColor: 'coolGray.500'
                }} _light={{
                    borderColor: 'coolGray.200'
                }}>
                    <Skel h="40" />
                    <Skel.Text px="4" />
                    <Skel px="4" my="4" rounded="md" startColor="primary.100" /> 
                </VStack>
            </Center>
        </NativeBaseProvider>
    )
}
