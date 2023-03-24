import Head from 'next/head';
import { Avatar, Box, Card, CardContent, CardHeader, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const user = {
    avatar: '/assets/avatars/avatar-anika-visser.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Anika Visser',
    timezone: 'GTM-7'
};

const NewsLetter = () => (
  <>
    <Head>
      <title>
        News Letter
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <Card>
                    <CardContent>
                    <Box
                        sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                        }}
                    >
                        <Avatar
                        src={user.avatar}
                        sx={{
                            height: 80,
                            mb: 2,
                            width: 80
                        }}
                        />
                        <Typography
                        gutterBottom
                        variant="h5"
                        >
                        {user.name}
                        </Typography>
                        <Typography
                        color="text.secondary"
                        variant="body2"
                        >
                        {user.city} {user.country}
                        </Typography>
                        <Typography
                        color="text.secondary"
                        variant="body2"
                        >
                        {user.timezone}
                        </Typography>
                    </Box>
                    </CardContent>
                </Card>
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <Card>
                  <CardHeader
                    subheader="content"
                    title="Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

NewsLetter.getLayout = (newsLetter) => (
  <DashboardLayout>
    {newsLetter}
  </DashboardLayout>
);

export default NewsLetter;
