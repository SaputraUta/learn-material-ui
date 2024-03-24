import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon
            sx={{
              marginRight: "20px",
            }}
          />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div
          style={{
            padding: "48px 0",
            backgroundColor: "#f7f7f7",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone this is a photo album and i'm trying to make this
              sentences as long as possible and see what does it looks like on
              the screen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    sx={{
                      marginTop: "40px",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      marginTop: "40px",
                    }}
                    variant="outlined"
                    color="primary"
                  >
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container
          maxWidth="md"
          sx={{
            padding: "20px 0",
          }}
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    sx={{
                      paddingTop: "56.25%",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer style={{ backgroundColor: "#f7f7f7", padding: "50px 0" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give a footer a purpose!
        </Typography>
      </footer>
    </>
  );
}
