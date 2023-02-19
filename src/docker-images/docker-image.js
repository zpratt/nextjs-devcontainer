import {Card, CardActionArea, CardContent, CardHeader, Typography} from '@mui/material';

export const DockerImage = ({ image }) => {
  return (
    <Card sx={{maxWidth: 300}}>
        <CardActionArea>
            <CardHeader title={image.name} subheader={image.tag}/>
            <CardContent>
                <Typography>
                    {image.size}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
