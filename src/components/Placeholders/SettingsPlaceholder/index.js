import React from 'react'
import ContentLoader from 'react-content-loader'

const SettingsPlaceholderDesktop = (props) => {
  return (
    <ContentLoader height={'100vh'} width={'100%'} viewBox='0 0 100% 100vh' backgroundColor='#f5f5f5' foregroundColor='#dbdbdb' {...props}>
      {/* SETTITNGS NAV */}
      <circle cx='80' cy='40' r='30' />

      <rect x='120' y='20' rx='3' ry='3' width='100' height='20' />
      <rect x='120' y='45' rx='3' ry='3' width='140' height='15' />

      <rect x='50' y='100' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='145' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='190' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='235' rx='5' ry='5' width='225' height='35' />

      <rect x='50' y='279' rx='5' ry='5' width='225' height='1' />

      <rect x='50' y='290' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='335' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='380' rx='5' ry='5' width='225' height='35' />
      <rect x='50' y='425' rx='5' ry='5' width='225' height='35' />

      <rect x='50' y='470' rx='5' ry='5' width='225' height='1' />

      <circle cx='65' cy='500' r='5' />
      <circle cx='65' cy='520' r='5' />
      <circle cx='65' cy='540' r='5' />
      <circle cx='65' cy='560' r='5' />

      <rect x='75' y='495' rx='3' ry='3' width='180' height='10' />
      <rect x='75' y='515' rx='3' ry='3' width='130' height='10' />
      <rect x='75' y='535' rx='3' ry='3' width='100' height='10' />
      <rect x='75' y='555' rx='3' ry='3' width='120' height='10' />

      {/* MAIN SETTINGS */}

      <rect x='360' y='25' rx='3' ry='3' width='190' height='30' />
      <rect x='360' y='70' rx='3' ry='3' width='calc(100% - 420px)' height='1' />

      <rect x='360' y='100' rx='3' ry='3' width='100' height='20' />
      <rect x='360' y='130' rx='3' ry='3' width='420' height='40' />
      <rect x='360' y='175' rx='3' ry='3' width='380' height='10' />
      <rect x='360' y='190' rx='3' ry='3' width='260' height='10' />

      <rect x='360' y='235' rx='3' ry='3' width='100' height='20' />
      <rect x='360' y='265' rx='3' ry='3' width='390' height='30' />
      <rect x='360' y='300' rx='3' ry='3' width='380' height='10' />
      <rect x='360' y='315' rx='3' ry='3' width='210' height='10' />

      <rect x='360' y='360' rx='3' ry='3' width='60' height='20' />
      <rect x='360' y='390' rx='3' ry='3' width='490' height='120' />
      <rect x='360' y='515' rx='3' ry='3' width='380' height='10' />
      <rect x='360' y='530' rx='3' ry='3' width='210' height='10' />

      <rect x='calc(100% - 265px)' y='410' rx='3' ry='3' width='100' height='50' />
      <circle cx='calc(100% - 220px)' cy='250' r='150' />
    </ContentLoader>
  )
}

const SettingsPlaceholderMobile = (props) => {
  return (
    <ContentLoader height={'200vh'} width={'100%'} viewBox='0 0 100% 200vh' backgroundColor='#f5f5f5' foregroundColor='#dbdbdb' {...props}>
      <circle cx='60' cy='40' r='30' />

      <rect x='100' y='20' rx='3' ry='3' width='100' height='20' />
      <rect x='100' y='45' rx='3' ry='3' width='140' height='15' />

      <rect x='30' y='100' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='170' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='240' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='310' rx='5' ry='5' width='calc(100% - 60px)' height='55' />

      <rect x='30' y='380' rx='5' ry='5' width='calc(100% - 60px)' height='1' />

      <rect x='30' y='400' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='470' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='540' rx='5' ry='5' width='calc(100% - 60px)' height='55' />
      <rect x='30' y='610' rx='5' ry='5' width='calc(100% - 60px)' height='55' />

      <rect x='30' y='680' rx='5' ry='5' width='calc(100% - 60px)' height='1' />

      <circle cx='35' cy='710' r='5' />
      <circle cx='35' cy='730' r='5' />
      <circle cx='35' cy='750' r='5' />
      <circle cx='35' cy='770' r='5' />

      <rect x='45' y='705' rx='3' ry='3' width='180' height='10' />
      <rect x='45' y='725' rx='3' ry='3' width='130' height='10' />
      <rect x='45' y='745' rx='3' ry='3' width='100' height='10' />
      <rect x='45' y='765' rx='3' ry='3' width='120' height='10' />
    </ContentLoader>
  )
}

const SettingsPlaceholder = window.innerWidth < 660 ? SettingsPlaceholderMobile : SettingsPlaceholderDesktop

export default SettingsPlaceholder
