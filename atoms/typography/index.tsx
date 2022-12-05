
import { Typography } from '@mui/material'
interface TypographyProps {
    variant : 'body1'| 'body2'| 'inherit'| 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6';
    text : string;
}
const Typograph = ({variant, text}:TypographyProps) => {
    return (
        <Typography variant={variant}>{text}</Typography>
    )
}
export default Typograph