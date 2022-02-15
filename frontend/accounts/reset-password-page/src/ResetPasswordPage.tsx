import React                              from 'react'

import ResetPassword                      from '@accounts/reset-password-fragment'
import { ForwardArrowLeftIcon, LogoIcon } from '@ui/icons'
import { Box, Column, Layout, Row }       from '@ui/layout'
import { NextLink as Link }               from '@ui/link'

export const ResetPasswordPage = () => (
  <Box bg='rgb(159, 159, 159)' height='100vh'>
    <Column>
      <Layout flexBasis={12} />
      <Layout flexGrow={1} alignItems='center'>
        <Row>
          <Layout flexBasis={[32, 44, 44]} />
          <Layout>
            <Link href='/signin'>
              <ForwardArrowLeftIcon width={18} height={18} />
            </Link>
          </Layout>
        </Row>
      </Layout>
      <Layout justifyContent='center'>
        <LogoIcon height='60px' width='156px' />
      </Layout>
      <Layout flexGrow={2} />
      <Layout justifyContent='center'>
        <ResetPassword />
      </Layout>
      <Layout flexGrow={3} />
    </Column>
  </Box>
)
