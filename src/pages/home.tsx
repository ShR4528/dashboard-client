import { useList } from '@pankod/refine-core'
import {
  PieCharts,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui'

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142D'>
        Dashbord
      </Typography>
      <Box mt='20' display='flex' flex='wrap' gap={4}>
        <PieCharts
          title='Properties for Sale'
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieCharts
          title='Properties for Rent'
          value={550}
          series={[60, 40]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieCharts
          title='Total customers'
          value={5684}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieCharts
          title='Properties for Cities'
          value={555}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']}
        />
      </Box>
      <Stack
        mt='25px'
        width='100%'
        direction={{ xs: 'column', lg: 'row' }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default home
