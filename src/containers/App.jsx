import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";

function App() {
  return (
    <>
      <Container maxWidth='xl'>
        <div>
          <Stack direction='row' spacing={1}>
            <Typography color='default' variant='h4' marginRight={100}>
              ST Artfolio
            </Typography>
            <Button
              startIcon={<BubbleChart />}
              variant='contained'
              size='large'
              color='primary'>
              All Arts
            </Button>

            <Button variant='contained' size='small' color='primary'>
              Pencil
            </Button>
            <Button variant='contained' size='small' color='primary'>
              Color pencil
            </Button>
            <Button variant='contained' size='small' color='primary'>
              Watercolor
            </Button>
            <Button variant='contained' size='small' color='primary'>
              Acrylic
            </Button>
          </Stack>
        </div>

        {/* <ButtonGroup >
          <Button
            startIcon={<BubbleChart />}
            variant='contained'
            size='large'
            color='primary'>
            All Arts
          </Button>

          <Button variant='contained' size='small' color='primary'>
            Pencil
          </Button>
          <Button variant='contained' size='small' color='primary'>
            Color pencil
          </Button>
          <Button variant='contained' size='small' color='primary'>
            Watercolor
          </Button>
          <Button variant='contained' size='small' color='primary'>
            Acrylic
          </Button>
        </ButtonGroup> */}
      </Container>
    </>
  );
}

export default App;
