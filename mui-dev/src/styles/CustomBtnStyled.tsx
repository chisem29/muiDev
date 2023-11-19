import { styled } from '@mui/material';

import customBtnThemeComps from '../shared/interfaces/customBtnThemeComps';

const CustomBtnStyled = styled('button')<customBtnThemeComps>(
  ({
    theme: {
      palette: { secondary, primary, facebook },
      shape,
      spacing,
    },
    color,
  }) => ({
    color: {
      secondary: secondary.contrastText,
      primary: primary.contrastText,
      facebook: facebook.contrastText,
    }[color],
    backgroundColor: {
      secondary: secondary.main,
      primary: primary.main,
      facebook: facebook.main,
    }[color],
    padding: spacing(1),
    borderColor: {
      secondary: secondary.main,
      primary: primary.main,
      facebook: facebook.main,
    }[color],
    borderRadius: shape.borderRadius,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      color: secondary.contrastText,
      backgroundColor : {
        secondary: "auto",
        primary: "auto",
        facebook: "transparent",
      }[color],

    },
  }),
);

export default CustomBtnStyled;
