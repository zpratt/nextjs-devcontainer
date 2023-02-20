import {Card, CardActionArea, CardContent, CardHeader, Typography} from '@mui/material';
import Link from 'next/link'

export const DockerImage = ({ image }) => {
  return (
    <Card sx={{maxWidth: 300}}>
        <CardActionArea>
            <Link href={`/images/${image.id}`}><CardHeader title={image.name} subheader={image.tag}/></Link>
            <CardContent>
                <Typography>
                    {image.size}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
