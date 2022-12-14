import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Stack,
  Heading,
  Text,
  // Button,
  AspectRatio,
  Image,
  Center,
  // Icon
} from 'native-base';

import { VideoCamera } from 'phosphor-react'; 

interface ImageProps {
  url: string, 
  alt?: string
}

export interface CardProps {
  practitioner: string, 
  facility: string, 
  images: ImageProps
}


export const Card: React.FC<CardProps> = ({ 
  practitioner, 
  facility,
  images= {}
}) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box alignItems="center">
          <Box 
            maxW="80" 
            rounded="lg" 
            overflow="hidden" 
            borderColor="coolGray.200" 
            borderWidth="1" 
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} 
            _web={{
              shadow: 2,
              borderWidth: 0
            }} 
            _light={{
              backgroundColor: "gray.50"
            }}>
            <Box>
            <AspectRatio 
              w="100%" 
              ratio={16 / 9}>
                <Image 
                  source={{
                    uri: images?.url
                  }} 
                  alt={images?.alt} 
                />
            </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {practitioner}
            </Heading>
            <Text 
              fontSize="xs" 
              _light={{
                color: "violet.500"
              }} 
              _dark={{
                color: "violet.400"
              }} 
              fontWeight="500" ml="-0.5" mt="-1">
                {facility}
            </Text>
          </Stack>
          {/* <Box>
            <Button 
              leftIcon={
                <Icon as={<VideoCamera size={32} />} size="sm" />
              } 
              onPress={
                () => console.log("hello world")
              }>
                Video Consultation
            </Button>
          </Box> */}
        </Stack>
      </Box>
    </Box>
      </Center>
    </NativeBaseProvider>
  )
};