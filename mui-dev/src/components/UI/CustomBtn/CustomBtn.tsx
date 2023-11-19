import { FC } from 'react';

import CustomBtnStyled from '../../../styles/CustomBtnStyled';
import { ThemeProvider } from '@mui/material/styles';

import jsxWithTheme from '../../../shared/types/jsxWithTheme';
import theme from '../../../themes/customBtnTheme';
import customBtnThemeComps from '../../../shared/interfaces/customBtnThemeComps';

const CustomBtn: FC<customBtnThemeComps> = ({ color }): jsxWithTheme => {
  return (
    <ThemeProvider {...{ theme }}>
      <CustomBtnStyled {...{color}}>Start</CustomBtnStyled>
    </ThemeProvider>
  );
};

export default CustomBtn;
