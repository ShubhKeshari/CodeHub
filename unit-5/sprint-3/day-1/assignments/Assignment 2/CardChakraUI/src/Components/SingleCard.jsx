import { ButtonGroup,Button,Box,Card,Stack,CardFooter,Heading,Text,Image,CardBody} from '@chakra-ui/react'
export const SingleCard =()=>{
    return(
     <>
    <Card maxW='sm'  maxH="xl" margin="auto" boxShadow='dark-lg'mt={5}>
    <CardBody>
     <Image
      borderRadius='full'
      position="relative"
      backgroundColor="red"
      boxSize='100px'
      src='data:image/jpeg;base64,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'
      alt='Rashmika Mandanna image'
       margin="auto"/>
       <Box  borderRadius='full' boxSize='15px' bg="#68D391" border="2.1px solid white"  pos="absolute"  top="100px" left="219px"></Box>
    <Stack mt='6' spacing='3'>
       
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Heading size='md' margin="auto" mb={0} fontSize="1.8rem">Rashmika Mandanna</Heading>
      <Heading size='sm' margin="auto" mt={0}  color="#828FA2">@rashmika_mandanna</Heading>
        </Box>
        <Box>
        <Text fontSize='1.4rem' pl="19px">
        Actress ,musician ,songwriter
       </Text>
       <Text fontSize='1.4rem' pl="10px">
         and artist. PM for work inquires 
      </Text>
      <Text  fontSize='1.4rem' display="flex" justifyContent="center" alignItems="center" >
        or
      </Text>
      <Text color='blue.600' fontSize='1.4rem' display="flex" justifyContent="center" alignItems="center" >
        #tag
      </Text>
      <Text  fontSize='1.4rem' display="flex" justifyContent="center" alignItems="center" >
        me in your posts
      </Text>
        </Box>
       <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Box bg="#F8FAFC" p="2px" >#ART</Box><Box bg="#F8FAFC">#PHOTOGRAPHY</Box><Box bg="#F8FAFC">#MUSIC</Box>
       </Box>
      
    </Stack>
  </CardBody>
  
  <CardFooter  display="flex" justifyContent="space-evenly">
    <ButtonGroup spacing='4'>
      <Button bg="#19c37d" w="150px" color="black" borderRadius="30px" >
        Buy now
      </Button>
      <Button bg="#00abef"  w="150px" color="white" borderRadius="30px" >
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
     </>
    )
}