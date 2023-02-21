import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material';

import { AgentCardProp, InfoBarProps } from 'interfaces/agent';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { Link } from '@pankod/refine-react-router-v6';
import { useGetIdentity } from '@pankod/refine-core';

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} maxWidth={{ xs: '100%', sm: 300 }} gap={1.5} direction='row'>
    {icon}
    <Typography fontSize={14} color='#808191'>
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return '/my-profile';

    return `/agents/show/${id}`;
  };
  return (
    <Box
      component={Link}
      to={generateLink()}
      width='100%'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '20px',
        padding: '20px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)',
        },
      }}>
      <img
        src={avatar}
        alt='user'
        width={90}
        height={90}
        style={{ borderRadius: 9, objectFit: 'cover' }}
      />
      <Stack
        direction='column'
        justifyContent='space-between'
        flex={1}
        gap={{ xs: 4, sm: 2 }}>
        <Stack gap={2} direction='row' flexWrap='wrap' alignItems='center'>
          <Typography fontSize={22} fontWeight={600} color='#11142d'>
            {name}
          </Typography>
          <Typography fontSize={22} color='#808191'>
            Real-Estate Agent
          </Typography>
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          flexWrap='wrap'
          alignItems='center'
          gap={2}>
          <InfoBar
            icon={
              <EmailOutlined
                sx={{
                  color: '#808191',
                }}
              />
            }
            name={email}
          />
          <InfoBar
            icon={
              <Place
                sx={{
                  color: '#808191',
                }}
              />
            }
            name='London'
          />
          <InfoBar
            icon={
              <Phone
                sx={{
                  color: '#808191',
                }}
              />
            }
            name='+380-63-113-1115'
          />
          <InfoBar
            icon={
              <LocationCity
                sx={{
                  color: '#808191',
                }}
              />
            }
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
