import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const images = {
  bg: require("./assets/friend.jpeg"),
};

function App() {
  return (
<Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="120px">
          ✨Building a pet project on AWS ✨
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          And run it for free (almost)
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px" color="primary">
          STORY TIME
        </Heading>
      </FlexBox>
      <Notes>
        <ol>
          <li>I have a friend</li>
          <li>He had an idea</li>
          <li>I decided to join his project and help out with website</li>
        </ol>
      </Notes>
    </Slide>
    <Slide transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px" color="primary">
          DEMO TIME
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          <a target="_blank" href="https://www.ualyrics.com">www.ualyrics.com</a>
        </Heading>
      </FlexBox>
      <Notes>
        <ol>
          <li>Open ualyrics.com</li>
          <li>Show browsing translations</li>
          <li>Show login</li>
          <li>Show adding a translation</li>
        </ol>
      </Notes>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="black"
    >
      <FlexBox alignItems="center" justifyContent="center" height="100%">
        <Image src="https://i.imgflip.com/5vifke.jpg" height="100%"/>
      </FlexBox>
      <Notes>
        I was to lazy to evaluate all options and went with
      </Notes>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="black"
      backgroundImage="url(https://i0.wp.com/www.vicoland.com/wp-content/uploads/2021/09/maxresdefault.jpg)"
      backgroundOpacity={1}
    >
      <Notes>
        AWS is quite amazing especially when it comes to serverless solutions.
      </Notes>
    </Slide>
    <Slide>
      <Heading>AWS services used</Heading>
      <UnorderedList>
        <Appear priority={0}>
          <ListItem>S3 (static web content) + CloudFront (CDN)</ListItem>
        </Appear>
        <Appear>
          <ListItem>AppSync (GraphQL)</ListItem>
        </Appear>
        <Appear priority={1}>
          <ListItem>DynamoDB (DB)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Lambda (For special usecases)</ListItem>
        </Appear>
        <Appear priority={2}>
          <ListItem>CloudFormation (IaC)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Cognito (Auth/Auth)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Amplify</ListItem>
        </Appear>
        <Appear>
          <ListItem>Many many others (CloudWatch, Route 53 etc.)</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="120px" color="primary">
          DEMO TIME (Yay \o/)
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          <a target="_blank" href="https://console.aws.amazon.com/">console.aws.amazon.com</a>
        </Heading>
      </FlexBox>
      <Notes>
        <ol>
          <li>DyanamoDB</li>
          <li>AppSync</li>
          <li>Lambda</li>
          <li>Cognito</li>
          <li>Amplify</li>
          <li>CloudFormation</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="100px">
          Where is all the code?!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Text>
          <CodePane language="jsx">{`
            class Person extends React.Component{
              constructor(props) {
                super(props);
                this.state = { age:0 }
                this.incrementAge = this.incrementAge.bind(this)
              }

              incrementAge(){
                this.setState({
                  age:this.state.age + 1;
                });
              }

              render(){
                return(
                  <div>
                    <label>My age is: {this.state.age}</label>
                    <button onClick={this.incrementAge}>Grow me older !!<button>
                  </div>
                );
              }
            }
          `}</CodePane>
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Testing with Cypress (DEMO)
        </Heading>
      </FlexBox>
      <Notes>
        Run cypress locally
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Monitoring
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h5">
          <a target="_blank" href="https://console.aws.amazon.com/">console.aws.amazon.com</a>
        </Heading>
      </FlexBox>
      <Notes>
        Run cypress locally
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Q&A
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox alignItems="center" justifyContent="center" height="100%">
        <Image src="/friend.jpeg" width={500}/>
      </FlexBox>
    </Slide>
  </Deck>
  );
}

export default App;
