import "./App.css";
import {
  Avatar,
  Card,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import bg from "../src/images/bg-pattern-card.svg";
import avatar from "../src/images/image-victor.jpg";
import { Box, Stack } from "@mui/system";

const typo = {
  fontFamily: "unset",
  fontSize: "18px",
};
function App() {
  return (
    <div className="main">
      <div className="flex">
        <Container
          sx={{ background: "white", borderRadius: "20px", width: "400px" }}
          disableGutters
        >
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <CardMedia component="img" src={bg} />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,50%)",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{ width: "100px", height: "100px" }}
              />
            </div>
          </Card>

          <Box mt={10} mb={3} textAlign="center">
            <Typography className="heading" sx={{ ...typo }}>
              Victor Crest{" "}
              <span style={{ color: "hsl(0, 0%, 59%)", fontWeight: "normal" }}>
                26
              </span>
            </Typography>

            <Typography
              sx={{
                ...typo,
                color: "hsl(227, 10%, 46%)",
                mb: 4,
                fontSize: "14px",
              }}
            >
              London
            </Typography>

            <Divider />
            <Stack
              mt={4}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Typography sx={{ ...typo }} className="heading">
                80k{" "}
              </Typography>
              <Typography sx={{ ...typo }} className="heading">
                803k{" "}
              </Typography>
              <Typography sx={{ ...typo }} className="heading">
                1.4k{" "}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Typography
                sx={{
                  ...typo,
                  color: "hsl(0, 0%, 59%)",
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                Followers
              </Typography>
              <Typography
                sx={{
                  ...typo,
                  color: "hsl(0, 0%, 59%)",
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                Likes{" "}
              </Typography>
              <Typography
                sx={{
                  ...typo,
                  color: "hsl(0, 0%, 59%)",
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                Photos{" "}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
