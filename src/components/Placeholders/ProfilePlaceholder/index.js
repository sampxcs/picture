import React from 'react'
import ContentLoader from 'react-content-loader'

const ProfilePlaceholderDesktop = (props) => {
  return (
    <ContentLoader height={'100vh'} width={'100%'} viewBox='0 0 100% 100vh' backgroundColor='#f5f5f5' foregroundColor='#dbdbdb' {...props}>
      {/* CARD PROFILE */}
      <rect x='30' y='0' rx='3' ry='3' width='285' height='1' />
      <rect x='30' y='0' rx='3' ry='3' width='1' height='470' />
      <rect x='30' y='470' rx='3' ry='3' width='285' height='1' />
      <rect x='315' y='0' rx='3' ry='3' width='1' height='470' />

      <circle cx='170' cy='125' r='100' />

      <rect x='60' y='240' rx='3' ry='3' width='130' height='20' />
      <rect x='60' y='270' rx='3' ry='3' width='190' height='15' />

      <rect x='62' y='300' rx='5' ry='5' width='225' height='35' />

      <circle cx='65' cy='360' r='5' />
      <circle cx='65' cy='380' r='5' />
      <circle cx='65' cy='400' r='5' />
      <circle cx='65' cy='420' r='5' />

      <rect x='75' y='355' rx='3' ry='3' width='180' height='10' />
      <rect x='75' y='375' rx='3' ry='3' width='130' height='10' />
      <rect x='75' y='395' rx='3' ry='3' width='100' height='10' />
      <rect x='75' y='415' rx='3' ry='3' width='120' height='10' />

      {/* MAIN PROFILE */}
      <rect x='335' y='0' rx='3' ry='3' width='calc(100% - 365px)' height='1' />
      <rect x='335' y='0' rx='3' ry='3' width='1' height='100%' />

      <rect x='calc(100% - 30px)' y='0' rx='3' ry='3' width='1' height='100%' />

      <rect x='360' y='25' rx='3' ry='3' width='100' height='20' />
      <rect x='calc(50% + 160px)' y='25' rx='3' ry='3' width='100' height='20' />

      <rect x='360' y='60' rx='10' ry='10' width='calc(50% - 220px)' height='200' />
      <rect x='calc(50% + 160px)' y='60' rx='10' ry='10' width='calc(50% - 220px)' height='200' />

      <rect x='360' y='305' rx='3' ry='3' width='150' height='20' />
      <rect x='360' y='340' rx='10' ry='10' width='calc(100% - 420px)' height='300' />
    </ContentLoader>
  )
}

const ProfilePlaceholderMobile = (props) => {
  return (
    <ContentLoader height={'200vh'} width={'100%'} viewBox='0 0 100% 200vh' backgroundColor='#f5f5f5' foregroundColor='#dbdbdb' {...props}>
      {/* CARD PROFILE */}
      <circle cx='50%' cy='125' r='100' />

      <rect x='calc(50% - 110px)' y='240' rx='3' ry='3' width='220' height='20' />
      <rect x='calc(50% - 95px)' y='270' rx='3' ry='3' width='190' height='15' />

      <rect x='calc(50% - 115px)' y='300' rx='5' ry='5' width='230' height='35' />

      <circle cx='calc(50% - 100px)' cy='360' r='5' />
      <circle cx='calc(50% - 75px)' cy='380' r='5' />
      <circle cx='calc(50% - 60px)' cy='400' r='5' />
      <circle cx='calc(50% - 70px)' cy='420' r='5' />

      <rect x='calc(50% - 90px)' y='355' rx='3' ry='3' width='180' height='10' />
      <rect x='calc(50% - 65px)' y='375' rx='3' ry='3' width='130' height='10' />
      <rect x='calc(50% - 50px)' y='395' rx='3' ry='3' width='100' height='10' />
      <rect x='calc(50% - 60px)' y='415' rx='3' ry='3' width='120' height='10' />

      <rect x='30' y='510' rx='3' ry='' width='100' height='20' />
      <rect x='30' y='545' rx='10' ry='10' width='calc(100% - 60px)' height='200' />

      <rect x='30' y='770' rx='3' ry='3' width='100' height='20' />
      <rect x='30' y='805' rx='10' ry='10' width='calc(100% - 60px)' height='200' />

      <rect x='30' y='1030' rx='3' ry='3' width='100' height='20' />
      <rect x='30' y='1065' rx='10' ry='10' width='calc(100% - 60px)' height='200' />

      <rect x='30' y='1290' rx='3' ry='3' width='100' height='20' />
      <rect x='30' y='1325' rx='10' ry='10' width='calc(100% - 60px)' height='200' />
    </ContentLoader>
  )
}

const ProfilePlaceholder = window.innerWidth < 660 ? ProfilePlaceholderMobile : ProfilePlaceholderDesktop

export default ProfilePlaceholder
