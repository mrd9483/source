import { Button, Drawer, Container, Stack, Box } from "@mui/material";

function KeyComponent(props) {
    return (
        <Button key={props.letter} onClick={() => props.onClick(props.letter)} variant="contained" sx={{ minWidth: 0, width: 30, m: 0.5 }}>
            {props.letter}
        </Button>
    );
}

function Keyboard(props) {
    const keyboardKeys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const handleClick = (letter) => {
        props.onKeyClick(letter);
    };

    return (
        <Drawer variant="permanent" anchor="bottom">
            <Container maxWidth="sm">
                <Stack>
                    {keyboardKeys.map((row) => (
                        <Box sx={{ mx: "auto" }}>
                            {row.split("").map((letter) => (
                                <KeyComponent onClick={() => handleClick(letter)} letter={letter} />
                            ))}
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Drawer>
    );
}

export default Keyboard;
